---
layout: layouts/page.njk
tags: ["pages", "guides"]
description: Very useful when hexing off the kitchen!
title: How to remove roaches from playscenes
---

# How to remove roaches from playscenes

For playscene hexers, the kitchen is a popular base because it has cabinets and stuff. But the roaches can be offputting. Removing them seems pretty simple! Open the playscene in a hex editor and search for the hex 

```
B0 01 C3 90 90 90 90 90
```

Now you'll want to flip that `01` to a `00` so:

```
B0 00 C3 90 90 90 90 90
```

That's it! Have fun with your roach free playscenes!

## The Technical Details

![CleanShot 2021-08-27 at 00 25 54@2x](https://user-images.githubusercontent.com/1251094/131076349-d45a73c5-29cc-49d0-8768-8a36552e1516.jpg)

I found this by opening Kitchen.env in a disassembler called IDA Pro. I found this function called `GetHasCockroaches` and guessed it had something to do with roaches... because of the name LOL. Also that it was a "bool" which means boolean and that means it has the value of true or false. In binary that's 0 or 1. And I just found the 1 (true) in the hex view and changed it to 0 (false). I'd had trouble testing this in the past since I rarely see roaches. But luckily, [Mythic Silence](http://www.mythicsilence.com/malevolent/) had a roach problem and was able to test for me. 
