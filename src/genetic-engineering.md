---
layout: layouts/page.njk
tags: pages
category: guides
title: Mad Science- Guide To Petz Genetic Engineering DRAFT
---


# Guide To Petz Genetic Engineering DRAFT

Each .pet file has its own "genome" which carries two sets of genes. One set from the father and one from the mother. Editing these genes does not change the pet's appearance. It can change what appearance any offspring has.

You can change this genome several ways. This guide assumes basic knowledge of hexing and petz breeding. How to hex and the genetics of color are beyond the scope of this tutorial but I recommend checking out [Yabiko's breeding guide](https://reflettage.wixsite.com/yabiko/breeding-guide), [Crushing Petz Genetics Guide](https://crushingpetz.tumblr.com/) (under Resources), and [Intron/Exon](http://intronexon.host56.com/).

## The "Easy" Way
People have been editing the .pet genome without knowing it since the invention of hexing. When you hex a breedfile (not a pet file) and adopt a pet from it, it may have an altered genome, even when the original breedfile is put back in. As far as we know the only values this applies to is:
- eye colors
- coat colors
- eyelid colors
- scales
- leg extension
- body extension

For colors, only certain colors work in the "genome". See a [list here on intron/exon](http://intronexon.host56.com/) and a full list on the [[Breeding] All possible fur, eye, and eyelid color mutations](https://whiskerwick.boards.net/thread/6341/breeding-all-eyelid-color-mutations) Whiskerwick forum thread (you may need to register to access). For example, you hexed a the Chinchilla breedfile to be pink, adopted a pink Chinchilla, then put the original P.F. Magic chinchilla.cat file back, the offspring would not inherit the pink color. But if you hex a cream color chinchilla, they might!

For a demo, i'll hex a cream color chinchilla. First I take the chinchilla.cat file and back it up. Then I'll edit it in Lnz Pro. I only need to change one body part, as long as it's the body part that determines the base of the "color area".

For that I can look at [Fur Color Areas] in the lnz. For Chinchilla they only have one so that makes it pretty easy. The ballWithBaseColor is 2, so I only need to change the color for ball 2. Some breeds have many color areas which can get a bit complicated. But here this means I only need to change the color of ball #2 (eBall_belly) to 45.

![](https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2FCleanShot%202021-06-05%20at%2018.47.29%402x.jpg?v=1622937178931)

![](https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2FCleanShot%202021-06-05%20at%2018.48.27%402x.jpg?v=1622937217477)

Save and the chinchilla I adopted from this file is "genetically engineered". You can confirm with Gene Poolz. Breeds with just one Fur Color Area are nice because just changing that one value changed ALL the color values. The offspring of two chinchillas adopted from this file will likely be all cream color (unless there is a random mutation)

![](https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2FScreen%20Shot%202021-06-04%20at%207.41.45%20PM.png?v=1622856636071)

Congrads you did it! Just to demo I'll put the OG Chinchilla file back, adopt a regular chinchilla, and see what the offspring are like. As you can see one is white and one is cream. But they both carry the cream color genes.

![](https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2FCleanShot%202021-06-05%20at%2018.50.26%402x.jpg?v=1622937248685)


## The Hard Way
What about editing the "genome" of an existing .pet file? This is harder. You'll need to be able to use a hex editor, understand breed IDs, and balance the checksum (I recommend Reflet's [Petz Byte tool](https://reflettage.wixsite.com/yabiko/download))

<aside>
  <a href="https://reflettage.wixsite.com/yabiko/breeding-guide">Reflet now has a really great genetics guide on this part of a .pet file</a>
</aside>

I've provided a .pet file with annotated Hex Workshop bookmarks so you can see what each area does. Do not load the .pet file in the game and open it because this alters the file, making the bookmarks wrong. This file is also corrupt so you can't load it. It's for demo purposes only.

Since it's an AC pet, its sets are identical and i've only annotated set 2.

Load the file in Hex Workshop, then load the .hbk bookmark file.

![](https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2FCleanShot%202021-06-04%20at%2020.27.42%402x.jpg?v=1622856634535)

- [dane-cherry.pet](https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2FDane-cherry.pet?v=1622856675305)
- [cherrybookmarks.hbk](https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2Fcherrybookmarks.hbk?v=1622856677843)



## FAQ

### Can I get particular markings with this method/ what is rand seed?
Short answer is no. If you looked at the bookmarks in the tutorial file, you'd see there are several areas marked "random seed." This is used to calculate what variations a pet expresses. There is a degree of randomness involved. So if you copy the seed from a particular sheepdog with a bobtail and copy it into the tail value of one with a tail, that will work. With mutt markings or dali spots, that method won't work because there are more random values involved. Some people call these more complex ones "linked" variations. Thanks to Reflet/Yabiko for explaning this to me.

The example file there is only one rand seed used. Each adoption center pet just has one. Mixed petz may carry many!

### What about personality trait genetics?
I haven't explored that yet but should work in a similar way.

### I changed my personality gene to one breed but the offspring expresses another breed?
Personality is a bit complicated. It's linked to scales. There is also some similar stuff happening with the leg and body extension stuff as well. TODO: explain more.

### My pet has an eye color that's not in the genome! It was naturally bred...what gives?
Sometimes this happens. It's a random thing. No one knows why.

### Can I tell if a pet has been genetically engineered?

Not easily, but this has always been the case for hexed lines as well. In the future if I do regular selective breeds I'll post pedigrees/family trees to verify that the petz have no hexed lineage. I may develop a tool for this verification as well.
