#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
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

// Extract filename and determine local path from Glitch URL
const getLocalPath = (url) => {
  try {
    // Parse the URL
    const parsedUrl = new URL(url);
    // Get the last part of the path and decode it
    const decodedPath = decodeURIComponent(parsedUrl.pathname);
    // Split by forward slash and get the last part
    const filename = decodedPath.split('/').pop();
    // Remove any query parameters
    const cleanFilename = filename.split('?')[0];
    // Replace %40 with @ in the filename
    const finalFilename = cleanFilename.replace(/%40/g, '@');

    // Only encode spaces
    const encodePath = (path) => path.replace(/ /g, '%20');

    // Determine the appropriate directory based on file type
    if (isImageFile(finalFilename)) {
      return `/public/images/${encodePath(finalFilename)}`;
    } else if (isVideoFile(finalFilename)) {
      return `/public/videos/${encodePath(finalFilename)}`;
    } else {
      return `/public/downloads/${encodePath(finalFilename)}`;
    }
  } catch (error) {
    console.error(`Error parsing URL ${url}:`, error.message);
    return null;
  }
};

// Find all Glitch URLs in content
const findGlitchUrls = (content) => {
  // Match both direct URLs, URLs in Markdown links, and URLs in image markdown
  const pattern = /(?:!?\[([^\]]*)\]\(|)(https?:\/\/(?:cdn\.)?glitch\.com\/[^\s"')]+)(?:\)|)/g;
  const matches = [];
  let match;
  while ((match = pattern.exec(content)) !== null) {
    const isImage = match[0].startsWith('![');
    const linkText = match[1] || '';
    const url = match[2];
    matches.push({
      fullMatch: match[0],
      linkText,
      url,
      isImage
    });
  }
  return matches;
};

// Process a single file
const processFile = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const matches = findGlitchUrls(content);

    if (matches.length === 0) return;

    console.log(`\nProcessing ${filePath}`);
    console.log(`Found ${matches.length} Glitch URLs`);

    let updatedContent = content;
    for (const match of matches) {
      const localPath = getLocalPath(match.url);
      if (localPath) {
        let replacement;
        if (match.isImage) {
          // For images, preserve the ![]() syntax
          replacement = `![${match.linkText}](${localPath})`;
        } else if (match.linkText) {
          // For regular links, preserve the []() syntax
          replacement = `[${match.linkText}](${localPath})`;
        } else {
          // For direct URLs, just use the path
          replacement = localPath;
        }
        console.log(`Replacing ${match.fullMatch} with ${replacement}`);
        updatedContent = updatedContent.replace(match.fullMatch, replacement);
      }
    }

    await fs.writeFile(filePath, updatedContent, 'utf8');
    console.log(`Updated ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main function
const main = async () => {
  try {
    // Process all markdown files in src directory
    const srcDir = 'src';
    const files = await fs.readdir(srcDir, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
        // Recursively process subdirectories
        const subDir = path.join(srcDir, file.name);
        const subFiles = await fs.readdir(subDir);
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
