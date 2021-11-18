---
layout: layouts/page.njk
tags: ['pages', 'guides']
description: Yes, it's possible to unstuck a pregnancy using hexing
title: Hexing Away Stuck Pregnancies
---
# Hexing Away Stuck Pregnancies
"Stuck" pregnancies have been a problem in the Petz games for over a decade now. Stuck pregnancies is when a pet just doesn't give birth no matter how many days or weeks have passed. The old method for fixing them involved setting the computer clock really far into the future and then to the past, sometimes over and over again. Petz reversed engineer Reflet discovered the cause in the file. It turns out the cause is an erroneous date of birth set when the baby is conceived. Because of the discovery we can now hex to fix stuck pregnancies. However, it's not easy. I'll try to explain as best as I can.

This guide assumes general knowledge of hex editors and how to use PetzByte.

## Finding the "date of birth"
A pregnant pet file contains both the mother and the baby in one file. The date of birth should be in the section that contains the baby, at the end of the family tree data. To find it I often search for the dad's name. In this case, the dad was named "Alpine".  Or you can try searching for the string `p.f.magicpetzIII`, it's usually the fourth result. 

Now go backwards one byte, the byte you skip is usually `01` or `00`. Then the next four bytes is the date of birth! I've highlighted the area in the screenshot below though of course the numbers will be different for each pet.


![CleanShot 2021-10-17 at 20 36 35@2x](https://user-images.githubusercontent.com/1251094/137656204-944cf549-c7b6-436b-8957-1873e74ff224.jpg)


That's what we'll change in the next step.

## Fixing the date of birth
I'm not going to explain what this value is, because it gives me a headache. But you can just replace it with the value in the example.

```
3A 1B 65 61
```

If you really want to know the hacker details and such, the date is a unix hexadecimal epoch time stamp with the bytes in reverse order.
[I used this converter](http://www.fmdiff.com/fm/timestamp.php) when I first hexed an unstuck pregnancy. The date I did that was Oct 12th or so, which is what the timestamp above is.

## Balancing the checksum
Now you need to balance the checksum with Petz Byte. If you bring the pet into the game, the baby should be born now.
