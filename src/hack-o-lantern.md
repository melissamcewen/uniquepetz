---
layout: layouts/page.njk
tags: ["pages", "guides"]
description: Hack the emotions triggered by the Jack O Lantern!
title: Hack O Lantern
---
# Hack O Lantern

The Jack O Lantern toy is known for triggering "scared" and "angry" emotions in petz. Thanks to Reflet we know the strings associated with these emotions. You can see a list of them in the "Emotions" sheet of the [Petz Stuff](https://docs.google.com/spreadsheets/d/1iAxztX3E9gn8TRoZ3bwG6EBdSIAuu84F8wT8GxZcle4/edit#gid=337215586) spreadsheet. 

01	Happy
02	Sad
03	Gratitude
04	Angry
05	Happy
06	Fear
07	Generous
08	Jealousy
09	Pride
0A[^1]	Shame 

[^1]: These are hex numbers so this is 10 in decimal


I used [Omar's Petz Debugger](http://petz.filthyhippie.net/) to see what emotions Petz had when playing with the toy. I set the checkbox to "Emotions" and could see 4 (angry) and 6 (fear). 

```
06 00 00 6A 64 6A 04
```
Search for this in a hex editor and change that last `04` (angry) to another emotion! 

You can do the same for the `06` here

```
24 00 07 00 00 50 6A 06
```

Remember these are hex numbers! 

This doesn't change some of the other actions in this function, which seem to trigger states like "StateTripAndSkid" so you may see your petz jump up in fear but they won't have the "fear" emotion. 

If you want to confirm, you can see in the debugger the emotion is now "3"



## Technical details

The Jack O Lantern has its own special function I found in IDA Pro (a disassembler). Petz hexer Gyigyg has a very good guide to using this in the [toy internal adjective hexing tutorial](https://gyiyg.neocities.org/itemhextut.html). The function is called `MakePetzReact` and I've never seen it in any other toy. Search for the `4` hex byte. Then in the search results click on the result that's in the `MakePetzReact` function and is a `push 4`. Do the same for `5`. Then you can use the hex view to find where it is in the file and edit it in a hex editor. 
