#!/usr/bin/env node

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const https = require('https');
const { URL } = require('url');

// Helper functions
const isImageFile = (filename) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'];
  return imageExtensions.includes(path.extname(filename).toLowerCase());
};

const isVideoFile = (filename) => {
  const videoExtensions = ['.mp4', '.webm', '.mov'];
  return videoExtensions.includes(path.extname(filename).toLowerCase());
};

// Extract filename from Glitch URL
const getFilenameFromUrl = (url) => {
  try {
    // Parse the URL
    const parsedUrl = new URL(url);
    // Get the last part of the path and decode it
    const decodedPath = decodeURIComponent(parsedUrl.pathname);
    // Split by forward slash and get the last part
    const filename = decodedPath.split('/').pop();
    // Remove any query parameters
    return filename.split('?')[0];
  } catch (error) {
    console.error(`Error parsing URL ${url}:`, error.message);
    return null;
  }
};

// Download a file from a URL
const downloadFile = async (url) => {
  try {
    const filename = getFilenameFromUrl(url);
    if (!filename) {
      console.log(`Could not determine filename for ${url}`);
      return null;
    }

    // Determine output directory based on file type
    let outputDir;
    if (isImageFile(filename)) {
      outputDir = 'public/images';
    } else if (isVideoFile(filename)) {
      outputDir = 'public/videos';
    } else {
      outputDir = 'public/downloads';
    }

    // Create directory if it doesn't exist
    await fsPromises.mkdir(outputDir, { recursive: true });

    const outputPath = path.join(outputDir, filename);

    return new Promise((resolve, reject) => {
      const request = https.get(url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          console.log(`Following redirect to: ${redirectUrl}`);
          request.destroy();
          downloadFile(redirectUrl).then(resolve).catch(reject);
          return;
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
          return;
        }

        const file = fs.createWriteStream(outputPath);
        response.pipe(file);

        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename} -> ${outputPath}`);
          resolve(outputPath);
        });

        file.on('error', (err) => {
          fs.unlink(outputPath, () => { }); // Delete the file if there was an error
          reject(err);
        });
      });

      request.on('error', (err) => {
        reject(new Error(`Request failed: ${err.message}`));
      });
    });
  } catch (error) {
    console.error(`Error downloading ${url}:`, error.message);
    return null;
  }
};

// Find all Glitch URLs in content
const findGlitchUrls = (content) => {
  const pattern = /https?:\/\/(?:cdn\.)?glitch\.com\/[^\s"']+/g;
  return content.match(pattern) || [];
};

// Process a single file
const processFile = async (filePath) => {
  try {
    const content = await fsPromises.readFile(filePath, 'utf8');
    const urls = findGlitchUrls(content);

    if (urls.length === 0) return;

    console.log(`\nProcessing ${filePath}`);
    console.log(`Found ${urls.length} Glitch URLs`);

    let updatedContent = content;
    for (const url of urls) {
      const localPath = await downloadFile(url);
      if (localPath) {
        const relativePath = path.relative('public', localPath);
        updatedContent = updatedContent.replace(url, `/${relativePath}`);
      }
    }

    await fsPromises.writeFile(filePath, updatedContent, 'utf8');
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main function
const main = async () => {
  try {
    // Create necessary directories
    await fsPromises.mkdir('public/images', { recursive: true });
    await fsPromises.mkdir('public/videos', { recursive: true });
    await fsPromises.mkdir('public/downloads', { recursive: true });

    // Process all markdown files in src directory
    const srcDir = 'src';
    const files = await fsPromises.readdir(srcDir, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
        // Recursively process subdirectories
        const subDir = path.join(srcDir, file.name);
        const subFiles = await fsPromises.readdir(subDir);
        for (const subFile of subFiles) {
          if (subFile.endsWith('.md') || subFile.endsWith('.json')) {
            await processFile(path.join(subDir, subFile));
          }
        }
      } else if (file.name.endsWith('.md') || file.name.endsWith('.json')) {
        await processFile(path.join(srcDir, file.name));
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

main();
