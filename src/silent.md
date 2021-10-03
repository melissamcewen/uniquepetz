---
layout: layouts/page.njk
tags: ['pages', 'guides', 'downloads']
description: Files for barkless dogz/meowless catz
title: Barkless/Meowless
---

# Barkless/Meowless

I originally created these for someone who'd had an IRL cat that didn't meow and wanted to recreate that in petz. These files should maintain non-bark/meow sounds like purring or sneezing. You can also use them if you have a petz that makes sounds you find annoying. Put the 'silent' directory for Dogz in resource/Dogz and for Catz in resource/Catz.

Then in any cat you want to make silent, use Lnz Pro and remove the current `[Sounds]` entry and replace it with

```
[Sounds]
\resource\catz\silent\silent.txt
```

<a href="/public/downloads/silent%20catz.zip?v=1627161929338" class="download-link">Download</a>

For dogz

```
[Sounds]
\resource\dogz\silent\silent.txt
```

<a href="/public/downloads/silent%20dogz.zip?v=1627161878655" class="download-link">Download</a>
