---
layout: layouts/page.njk
tags: ['pages', 'guides']
title: Petz Mac Guide
description: How to get Petz 4 running on a modern Mac
---

# How to get Petz 4 running on a modern Mac

For years I meant to do this but I always got stuck because most instructions for Petz 4 on a Mac use a software called Wine. Wine is extremely buggy and I could never get it to run correctly. So recently I decided to do something else and finally got it running correctly. This all uses free software.

<aside>If you're willing to spend money on it, using Parallels is much easier and faster. They offer a free trial if you want to try it out.</aside>

<aside>There aren't many guides on Wine but this [Babyz guide](https://babyz.org/tutorials/mac.html) might work for Petz. Babyz was another PF Magic game.</aside>

## Get VirtualBox

VirtualBox is software that allows you to run virtual machines on your computer. Virtual machines are like fake computers that live in your real computer. You can download VirtualBox on [virtualbox.org](https://www.virtualbox.org/)

## Install Windows 10

[Grab this Windows 10 iso from Archive.org](https://archive.org/details/Windows10Enterprise2016LTSBx86). An iso is like a fake CD rom you can use on your brand new fake computer. Then follow the steps in the [How to Install Windows 10 on VirtualBox](https://www.youtube.com/watch?v=JT8EXoobjSc) video. By the end of the video you should have a brand new Windows 10 VM running on your Mac! Make sure to follow the "Guest Additions" step so you can share a folder on your Mac with your Windows VM.

<aside>I tried other versions of Windows and most didn't run well in VirtualBox. XP for example is really slow and I have no idea why. Windows 10 also has a "compatability mode" that allows you to play even older games.</aside>

## Get Petz 4

There are many copies of Petz 4 available online but I like the one available [on Yabiko, a Petz website.](https://reflettage.wixsite.com/yabiko/download) Put it in a folder on your Mac.

## Get the Petz 4 folder onto your Virtual Machine

To get folders from your Mac to your Windows 10 Virtual Machine, you can either drag and drop or set up a "shared folder."To enable drag and drop, go to "Devices" on the Mac Menu bar while your Windows 10 VM is open. Then select "drag and drop" then "bidirectional". Now you can drag your Petz folder from your Mac Finder right into the Virtual Machine desktop. From your Virtual Machine, open the folder you just dragged and click on the Petz game. Enjoy!

## Optional: Shared folders

Shared folders are a bit more complicated but allow you to have folders that are accessible from both your Mac and inside the Virtual Machine. Go to "Devices" on the Mac Menu bar while your Windows 10 VM is open. Then click "Shared Folders" and finally into the "Shared Folders Options." Click the icon on the right that looks like a folder with a plus icon. For "folder path" click on it, select "other", then navigate to the folder where you put the Petz 4 game. Click "Open" on the bottom of the folder selection window to select it. Open up a Windows Explorer window and navigate to "Network". Your shared folders will be in the "Vboxsr" folder

<aside>You can ignore the other options, but if you want to keep this folder attached every time you open the VM, check the "make permanent" checkbox. I like to keep at least one shared folder attached because I use it to back up my petz and save pictures to. VirtualBox can be buggy so I recommend backing up your Petz often.</aside>

## Additional tips

- There are now many cool Petz dev tools and utilities (see [this list on the Petz wiki](https://petz.fandom.com/wiki/Tools_and_Software)). The Petz 4 copy I recommend comes with Petz A already installed which has utilities for breeding petz and trimming large petz files. I also really like LNZ Pro for file editing and Petz Pic factory for generating pictures from Petz files.
- Back up your Petz often, especially if you're messing with Petz A or other similar tools
- If your Petz game loses all the toys in playscene, you may need to reset the registry using RegEdit. The keys are in "HKEY_CLASSES_ROOT\VirtualStore\MACHINE\SOFTWARE\PF.Magic"
- My Windows 10 Virtual Machine often has mysterious slowness that only resolves when I restart my Mac.
