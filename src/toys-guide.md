---
layout: layouts/page.njk
tags: ['pages']
description: Use this guide to make toys or convert my toys
title: Making Toys
---
# Making Toys
This guide I'll take you step by step through converting a P4 toy to P5. 

# Step 1: Finding a base toy
TODO THIS LATER

# Step 2: Creating A New Toy File

In **LnzPro** open the base toy, then go to the top menu and select "Save As". Choose a new file name. *Don't change this file name during the hexing process because it will break the toy.*

![CleanShot 2021-09-05 at 19 31 14@2x](https://user-images.githubusercontent.com/1251094/132145812-9e760458-8a56-4c9b-a695-038187d965ee.jpg)

A window should appear when you click "Save". Select "Make a new breed" and click "next". 

The next window asks to choose a breed ID. You can choose any number that translates to 4 characters in the "New Breed ID(hex)" box... I think. If it doesn't work you should choose another. 

If you're converting the toy you can use the same ID as the original toy. To find this, open the toy in **LnzPro**. On the side menu select "RCDATA". It's the number found in the **Breed ID(as a number)** field. 

# Step 3: Changing the internal ID in LnzPro
Open the new file in LnzPro. Open up the FLM tree on the side (SPR on Petz 5). You should see an internal ID that's usually four characters then an underscore then two more characters. 

![CleanShot 2021-09-05 at 19 40 46@2x](https://user-images.githubusercontent.com/1251094/132146177-e19a9383-0220-4938-be4f-b6a59009dfff.jpg)

In this example the toy on the right is the original P4 one and the toy on the left is the new P5 one we're hexing. The new internal ID we're going to be working with is `MOUS_A1`. Write that down.

OK now go down the tree and replace all of the instances of the old internal ID `BALL_A1` with the new one `MOUS_A1`. You can right click and select "rename". 

![CleanShot 2021-09-05 at 19 50 49@2x](https://user-images.githubusercontent.com/1251094/132146616-388da4f8-4d19-47cc-8d6b-7ff7750b9828.jpg)


# Step 4: Replacing the internal ID in a Hex Editor
Already did this, skip it
![CleanShot 2021-09-05 at 19 53 10@2x](https://user-images.githubusercontent.com/1251094/132146673-52ddf375-c5bc-47cf-b0b0-9f13b8d20e40.jpg)

# Step 5: Exporting assets and importing them into the new toy
you don't need this step

# Step 6: Editing filmstrips
You only need to do this if you're converting from P 3/4 to P5 or vice-versa. *TODO add part about exporting but not needed here.* Open the toy in Tinker. You will usually see two options. Select the first one. Go through and expand each of the items on the menu and right click to "import." Select the sprite image. Save. Open it again and choose the next option. Do the same for that option. Save. 

![CleanShot 2021-09-05 at 19 57 10@2x](https://user-images.githubusercontent.com/1251094/132146901-39928561-c34a-4ab9-b713-e94002f3d8bc.jpg)



Congrads you did it! 
