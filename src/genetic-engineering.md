---
layout: layouts/page.njk
tags: ['pages', 'guides', 'laboratory']
description: Edit .pet "genes" by genexing
title: Guide To Petz Genetic Engineering DRAFT
---


# Guide To Petz Genetic Engineering DRAFT

Each .pet file has its own "genome" which carries two sets of genes. One set from the father and one from the mother. Editing these genes does not change the pet's appearance. It can change what appearance any offspring has.

You can change this genome several ways. This guide assumes basic knowledge of hexing and petz breeding. How to hex and the genetics of color are beyond the scope of this tutorial but I recommend checking out [Yabiko's breeding guide](https://reflettage.wixsite.com/yabiko/breeding-guide), [Crushing Petz Genetics Guide](https://crushingpetz.tumblr.com/) (under Resources), and [Intron/Exon](http://intronexon.host56.com/).

## Setup
You'll need
- a hex editor (I use [HXD](https://mh-nexus.de/en/hxd/))
- PetzByte and GenePoolz by [Reflet](https://reflettage.wixsite.com/yabiko/download)
- A reference sheet. I have a [Petz Genetics](https://airtable.com/shrMJLBngan9NvSw8) sheet in Airtable that I will be using here. A simpler one is available at [petz genome value reference](https://gyiyg.neocities.org/images/geneticvaluesref.txt).
- An pet file, if you'd like to use the same file I'm using it's available [download line-4-gen-1-3.pet](/public/downloads/line-4-gen-1-3.pet)

## Viewing The File
[Reflet has a detailed guide to the "looks chromosome"](https://reflettage.wixsite.com/yabiko/breeding-guide). To view it in the same way in HxD, go to the "view" menu and select "byte per row". Change that to "15". 

![CleanShot 2021-08-04 at 17 08 14@2x](https://user-images.githubusercontent.com/1251094/128261683-f0c01aef-901d-4d91-b116-c87b7d6f4205.jpg)

## Finding The Looks Chromosome
For me I find the easiest way is just scrolling down the file. You'll see the Lnz section. And then a section that lists the breed files the .pet uses followed by "p.f.magicpetzIII"

![CleanShot 2021-08-04 at 17 12 12@2x](https://user-images.githubusercontent.com/1251094/128262042-0fb51495-ade3-4df6-9489-4ff6407addd7.jpg)
 
Then you scroll past that until you find a section headed by "FF FF FF FF" with a bunch of breed IDs below it. There will be two sections like this because each pet has two "looks chromosomes"

![CleanShot 2021-08-04 at 17 13 48@2x](https://user-images.githubusercontent.com/1251094/128262200-2c772432-dd93-431e-bb9d-2b7f9933f0c0.jpg)


For beginners it may be helpful to just search for the breed IDs. For example, based on our reference sheet we know the breed ID for dalmatian is "F7 03". You can do a hex search for that. 

![CleanShot 2021-08-04 at 17 14 12@2x](https://user-images.githubusercontent.com/1251094/128262228-6243745b-b0cc-4eaf-9d39-b6b06dc95021.jpg)


## Changing the eyelid color
First, open our example pet in Genepoolz
![CleanShot 2021-08-04 at 17 15 25@2x](https://user-images.githubusercontent.com/1251094/128262339-292e4c1f-0cfb-4198-abab-6eb1c8ef9ab2.jpg)

I want to change both eyelid colors to black. Right now one of them already is black but the other is Brown (99). Since it's the "Set 1" I know it will be the first "looks chromosome". Looking up in my reference sheet I find that Brown (99) corresponds to "0D". Here it is in the "looks chromosome".

![CleanShot 2021-08-04 at 17 18 18@2x](https://user-images.githubusercontent.com/1251094/128262633-09b66ed5-5758-44c7-b888-3991ac209c3d.jpg)

Back to my reference sheet I find the hex number for the shade of black I want "black (39)". The hex number is "08". I change the "0D" to "08" and save.

![CleanShot 2021-08-04 at 17 20 09@2x](https://user-images.githubusercontent.com/1251094/128262775-82723fe1-14bc-4998-8628-8ad6b346fbbd.jpg)

Now let's check in Genepoolz!

![CleanShot 2021-08-04 at 17 21 07@2x](https://user-images.githubusercontent.com/1251094/128262859-d4027fab-ac64-4f93-b37e-62fe1abdb021.jpg)


Voila! Now you will need to balance the checksum, otherwise the game will think the .pet file is corrupt. I use PetzByte to do this. You should be able to just drag the .pet file on to PetzByte. Because I use a non-Windows computer I have to run it on the command line with " python3 PetzByte.py line-4-gen-1-3.pet"

Yay! you did it! This pet file should now only carry black eyelids. So when you breed it, the offspring will have black lids...unless there is a new mutation. 


## FAQ

### Can I get particular markings?
Sometimes but there is a degree of randomness involved. So if you copy the seed from a particular sheepdog with a bobtail and copy it into the tail value of one with a tail, that will work. With mutt markings or dali spots, that method won't work because there are more random values involved. Some people call these more complex ones "linked" variations. Thanks to Reflet/Yabiko for explaning this to me. My Airtable has a couple of seeds that I know for some commonly requested markings. 

![CleanShot 2021-08-04 at 17 28 19@2x](https://user-images.githubusercontent.com/1251094/128263524-43b0eea4-9acc-4410-a6f0-e2740156c195.jpg)

For example if you want a sheepdog with a long tail, go to the tail value and make the random seed "DA 0D"

### How does leg/body extension work?
I'm not entirely sure but I hope to document it more in the future. I usually start by finding a pet with the desired extension and just copy from that. I am not very good at math though so maybe someoone will write a better explanation. It's not as intuitive as the other values and uses columns that the other values don't. I put some values I use commonly into my Airtable. For example my munchkin cats use "C3 FF FF FF" which translates into -61. 

It also make not have that much effect. Each breed has a different minimum and maximum depending on the original values. 

### What about personality trait genetics?
I haven't explored that yet but should work in a similar way.

### I changed my personality gene to one breed but the offspring expresses another breed?
Personality is a bit complicated. It's linked to scales. 

### My pet has an eye color that's not in the genome! It was naturally bred...what gives?
Sometimes this happens. It's a random thing. No one knows why. Many people call this a "fluke"

### Can I tell if a pet has been genetically engineered?

Not easily, but this has always been the case for hexed lines as well. In the future if I do regular selective breeds I'll post pedigrees/family trees to verify that the petz have no hexed lineage. I may develop a tool for this verification as well.
