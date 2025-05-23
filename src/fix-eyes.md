---
layout: layouts/page.njk
tags: ['pages', 'guides']
description: Petz eyes too small? Fix it with this guide
title: Fixing Too-Small .pet Eyes
---


# Fixing Too-Small .pet Eyes
So here's a common issue I encounter, especially if the pet is small but has a head from a larger breed (Dane, Lab etc.). See this little guy? Really cute as a puppy:

![cute puppy](/public/images/petz229.png)

But as an adult... his eyes look super beady!

![beady eyes dog](/public/images/smoleyes.png)

Luckily we can fix it with [LnzPro](https://www.sherlocksoftware.org/page.php?id=14). Someone told me how to do this on Petzcord, whoever you are, thank you!

<aside>Back up your .pet file before you do this! Probably nothing bad will happen but there is a small chance you'll mess up the file.</aside>

## Step 1: Open the "adult" lnz file in LnzPro

The LNZ is part of the .pet file that determines appearance. Open the .pet file in Lnz Pro. There is a menu on the left side. One section of this menu should say "Lnz". Click it and open up and you'll see two sub-files. "Child" and "Adult". The "Adult" one is the one we'll be editing. 

## Step 2: Finding Ballz Info

Scroll down until you get to a section called "Ballz Info". This contains information about all the Ballz that make up the pet. Each ball has a number that corresponds to a body part. A key thing to remember is the first ball is <em>ball 0</em> not ball 1. 

![screenshot of the file](/public/images/CleanShot%202021-05-27%20at%2015.02.44@2x.jpg)

## Step 3: Finding the eye ballz

Now you're going to want to look up which number ball corresponds to the eyes. In LnzPro there a list on the help file, you'll find it under "General Editing Information". The ball numbers are different for Dogz and Catz so make sure you're looking at the right list.

![screenshot of help](/public/images/CleanShot%202021-05-27%20at%2015.03.26@2x.jpg)

So we see that L Eye = ball number 8. Let's start with that.

## Step 4: Editing the L eye ball size
OK back to our Lnz file, you'll need to count down to find ball eight. Remember, the first line is ball 0. One thing that might be helpful is using the line numbers. 

![eye ball](/public/images/CleanShot%202021-05-27%20at%2015.04.13@2x.jpg)

For Ballz info, each value has spaces between it. The size is the sixth value. here you can see it's -10. I'm going to change that to 0, save, and see what happens when I open the game.

Unfortunately it looks a little too big!

![eye too big](/public/images/petz231.png)

So I close the game and go back to LnzPro. I change it to -5, save, and reopen the game.

![eye just right](/public/images/petz232.png)

That looks great! Now I just need to edit the right eye ball to look the same

## Step 5: Editing the R eye ball size

The help files show that the R eye ball is ball number 32. LnzPro shows the line numbers next to the file. 

![line numbers](/public/images/CleanShot%202021-05-27%20at%2015.23.36@2x.jpg)

So if line 306 is ball 0, I can add 32 + 306 to 338. And scroll down to the 338 line number to find ball 32, which is the R eye. I now change the -10 there to -5 so the eyes are the same size. I save and open the game and voila!

![eyes fixed](/public/images/petz234.png)

Eye think this dog looks much better! You can also try decreasing the iris sizes if you want to make the eyes look better without making them bigger, but I usually find that doesn't work well for small dogs.