---
layout: layouts/page.njk
tags: ["pages", "guides", "laboratory"]
description: Illustrated guide to leg extensions
title: Leg Extension Guide
---
# Leg Extension Guide
Leg extension is a value both in the lnz and in the pet file's look chromosome. The genetic value in the look chromosome is translated into the actual leg extension in the lnz based on the base breed file's default. It can't diverge too far from that, so like a -100 value in the genes won't actually give you super short legs.

Here is a normal dali bred with different leg extensions

<img srcset="https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2Flegextension.png?v=1628440338036 2x">

Shortest: I used `64 FF FF FF` in the hex editor which "translates" to -156 in Gene Poolz. This leads to a dali with a `4 0` extension in the lnz.

Short: This is the smallest you can get with hex-free breeding, with the gene coming from the dachshund for `F3 FF FF FF` in the hex editor which "translates" to -32 in Gene Poolz. This leads to a dali with a `6 2` extension in the lnz.

Default: By default the dali breed has a `08`in the hex editor leg extension which "translates" to 8 in Gene Poolz and `10 6` in the lnz.

Tall: This is the tallest you can get with hex-free breeding, with the gene coming from the great dane for `11` in the hex editor which "translates" to 17 in Gene Poolz. This leads to a dali with a `6 2` extension in the lnz.

Tallest: I used `64` in the hex editor, which "translates" to 100 in Gene Poolz. This leads to a dali with a `16 12` extension in the lnz.


