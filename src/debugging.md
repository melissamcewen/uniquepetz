---
layout: layouts/page.njk
tags: ["pages", "guides"]
description: Some toys and clothes might be the culprit! 
title: Debugging Loading Problems
---

# Debugging Loading Problems?
Sometimes the petz games have loading issues. After studying the issue in a debugger, I realized that the game loads and unloads every single item when it opens. So the more of these you have, the slower it will be. I recommend first removing all downloaded (non PF Magic) toys, playscenes, and clothing. If it loads much faster, you can examine these items to make sure they are good. By and large most newer items are fine, but in the past hexers didn't know how to create files with the correct structure. 

If you want to examine the item, open in Lnz Pro. If it's properly made, it should share non of these values with the original toy values. 
