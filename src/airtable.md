---
layout: layouts/page.njk
tags: ['pages', 'guides']
description: Using AirTable to track your petz collection, show pics, and more. 
title: Tracking Petz With Airtable
---

# Tracking Petz With Airtable

I have used AirTable to track petz stuff for awhile. My personal one is on the [crew page](/crew). As it's gotten extremely complex, I thought I'd make a simpler version for people to use with some basic instructions. 


[Petz Tracker Template](https://airtable.com/shrRiwF0RaSC3kp1z)

See the Airtable documentation on how to [Duplicating an existing base
](https://support.airtable.com/hc/en-us/articles/202584549-Duplicating-an-existing-base) for info on how to copy it. You'll need to make an Airtable account and full disclosure I may receive some AirTable credits which will feed my data addiction (I use AirTable for tracking my clothing too). 

I added some demo data and comments but here are some instructions.

## Basics
![CleanShot 2021-09-04 at 20 36 16@2x](https://user-images.githubusercontent.com/1251094/132112088-5d206bea-6edd-48b5-be6a-13b13974a971.jpg)


1. There are three tables: Petz, Show Pictures, and Show Tracker. "Pets: tracks your pets basic info. "Show Pictures" is a place to upload individual pictures for entering shows. And "Show Tracker" is for tracking show entries and results. Each table is connected. "Show Pictures" connects to a Pet to get data on show name and call name. Each Show Tracker entry is associated with a Show Picture, so then that data can be used to calculate a pet's total show points. Airtable is pretty powerful so there are all kinds of other tables and calculations you could add if you wanted. For example, I have a "family tree" table that connects pet entries together to show a pet's children and parents. 
2. Views are used to display a table. The basic one used here is the "Grid" which is like a spreadsheet. I used the "Gallery" one for my Crew page.
3. You can add a new pet to the table here. Feel free to add more fields like date of birth, breed, or anything else you want to track. 

## Show Pictures


