---
layout: layouts/page.njk
tags: ["pages", "guides", "laboratory"]
description: What color slots matter for coat colors
title: Genetics of coat colors
---

# Genetics of coat colors

I'd like to document what color slots matter for coat colors. Each "looks chromosome" has 5 slots. Depending on the type of coat, only 1 could be used, or many. And the order can determine what part of the coat gets one color. The tools used include [Gene Poolz](https://reflettage.wixsite.com/yabiko/download). I altered some petz to make sure each slot had a different color to make it easier to determine which slot is used and also to remove the markings since color slots don't affect those.

When you mix different coats and breeds you can get different effects. For example, using the Dachshund Agouti coat on a lab will give you some elements (the boots) but not others (the mouth and eyebrow markings).

<aside>In dogz the 5th slot doesn't mutate so if it's a different color from the breed's default it's either bred in (options are limited) or from hexed lineage</aside>

A few breed coats just use the first color slot

- Alley cat (the grey muzzle is a marking)
- Chinchilla
- Chihuahua
- Dalmatian
- Golden Retriever
- Labrador
- Papillon
- Persian
- Russian Blue

There are downloadable petz available for some of the variations! They may be useful for breeding projects. These petz are genexed and should breed true. If you want to request one, DM me on Discord.

## B+W Shorthair

BWS coat uses three slots.

<img srcset="/public/images/bws-colors.png 2x">

1. Main coat
2. "Boots"
3. Unused
4. Unused
5. Muzzle

On other breeds:

<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-bws.png">
      <figcaption><a href="/public/downloads/alley-bws.pet">Alley Cat</a></figcaption>
    </figure>
  </div>
  <div>
    <figure>
  <img src="/public/images/calicobws.png" >
  <figcaption>Calico</figcaption>
</figure>

  </div>
  <div>
    <figure>
      <img src="/public/images/persianbws.png">
      <figcaption>Persian</figcaption>
    </figure>
  </div>

</div>

## Bulldog

<img srcset="/public/images/bulldog.png 2x">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-bulldog.png">
      <figcaption>Lab</figcaption>
    </figure>
  </div>

<div>
    <figure>
      <img src="/public/images/poodle-bulldog.png">
      <figcaption>Poodle</figcaption>
    </figure>
  </div>
</div>



## Calico

Calicos use all slots except the last (5th). It's not easy to describe where each color goes but hopefully the picture is helpful.

<img srcset="/public/images/calicos.png 2x">

- Default: This var comes out of the adoption center with an orange head (example seed 38 33)
- Black: This var comes out of the adoption center with a black head (example seed 8C 45)
- White: This var comes out of the adoption center with a white head (example seed A7 78)

On other breeds "default" var:

<div class="breed-pics">
  <div>
    <figure>
  <img src="/public/images/cali-oshie.png" >
  <figcaption>Orange Shorthair</figcaption>
</figure>

  </div>
  <div>
    <figure>
      <img src="/public/images/alley-calico.png">
      <figcaption>Alley Cat</figcaption>
    </figure>
  </div>
</div>

## Dachshund

### Mystery brows: "Chocolate" vs. Regular Head
This is a selective breeders nightmare. It is related to the head and not the coat. For example the dog on the left here uses seed 01 38 for the head and the dog on the right uses A0 3F. The brown eyebrows aren't part of the colors in the "genome".

<img srcset="/public/images/mysterybrowsdach.png 2x">

Even weirder they manifest as other colors depending on the coat.  I believe this is due to the brown dachies have their eyebrows set to group "-1". When that is set, I believe that the color comes from whatever is in the base breedfile for that paritcular coat. For example -1 brow dachies with dalmatian coats have white brows, because the default dali has a white brow. The other variations have their brows in different groups as set in [Color Info Override]. You can tell the group is -1 because you cannot paint them with the paint can.

"Chocolate" head: same color sets, different coats

<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/dali-coat.png" >
      <figcaption><a href="/public/downloads/dali-coat-dashie.pet">Dalmatian</a></figcaption>
    </figure>

  </div>
    <div>
    <figure>
      <img src="/public/images/dashie-bulldog.png" >
      <figcaption><a href="/public/downloads/dashie-bulldog.pet">Bulldog</a></figcaption>
    </figure>

  </div>
</div>

### "Agouti"/"Body Black"

Most Dachshunds are solid color but a percentage have a black and brown coat. I call it "agouti" because that's what it's called in real dogs. You'll notice it's common among several dog breeds like pinchers and rottweilers. Later I realized it's called "body black" in the code.

<aside>For the markings around the mouth, putting the coat as dachshund isn't enough, you need the right random seed. I'm not entirely sure why. I use 3C 48. </aside>

1. The main body color
2. feet/tail tip
3. unused
4. unused
5. mouth and eyebrows

<img srcset="/public/images/color-slots-d-r.png 2x">

On other breeds:

<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/agouti-bulldog.png" >
      <figcaption><a href="/public/downloads/bulldog-agouti.pet">Bulldog</a></figcaption>
    </figure>

  </div>

  <div>
    <figure>
      <img src="/public/images/agouti-dali.png" >
      <figcaption><a href="/public/downloads/agouti-dali.pet">Dalmatian</a></figcaption>
   </figure>
  </div>
 <div>
    <figure>
      <img src="/public/images/gd-agouti.png" >
      <figcaption><a href="/public/downloads/agouti-gd.pet">Great Dane</a></figcaption>
   </figure>
  </div>

   <div>
    <figure>
      <img src="/public/images/agouti-lab.png" >
      <figcaption><a href="/public/downloads/agouti-lab.pet">Lab</a></figcaption>
   </figure>
  </div>
   <div>
    <figure>
      <img src="/public/images/poodle-agouti.png" >
      <figcaption>Poodle</figcaption>
   </figure>
  </div>
</div>

## Desert Lynx

Note that with the original p5 breedfiles the textured part will always be the same color because it's not transparent. Fixed file I used is from [Reverie.](http://jewellz.net/)

<img srcset="/public/images/lynxcolors.png 2x">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-lynx.png">
      <figcaption><a href="/public/downloads/alley-lynx.pet">Alley Cat</a></figcaption>
    </figure>
  </div>
</div>

## Egyptian Mau

Note that with the original p5 breedfiles the textured part will always be the same color because it's not transparent. I'm not sure why the ruff is different in the p5 version! Fixed file I used is from [Reverie.](http://jewellz.net/)

<img srcset="/public/images/maucolors.png 2x">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-mau.png">
      <figcaption><a href="/public/downloads/alley-mau.pet">Alley Cat</a></figcaption>
    </figure>
  </div>
</div>

## German Shepherd

<img srcset="/public/images/gsd-colors.png 2x">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-gsd.png">
      <figcaption><a href="/public/downloads/lab-gsd.pet">Lab</a></figcaption>
    </figure>
  </div>

   <div>
    <figure>
      <img src="/public/images/poodle-gsd.png">
      <figcaption>Poodle</figcaption>
    </figure>
  </div>
</div>

## Great Dane

<img srcset="/public/images/greatdane.png 2x">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-great-dane.png">
      <figcaption><a href="/public/downloads/lab-great-dane.pet">Lab</a></figcaption>
    </figure>
  </div>

<div>
    <figure>
      <img src="/public/images/poodle-great-dane.png">
      <figcaption>Poodle</figcaption>
    </figure>
</div>
</div>

## Honeybear

Note that with the original p5 breedfiles the textured part will always be the same color because it's not transparent

<img srcset="/public/images/honeybear.png 2x">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-honey-bear.png">
      <figcaption><a href="/public/downloads/alley-honey-bear.pet">Alley Cat</a></figcaption>
    </figure>
  </div>
</div>

## Jack Russell Terrier

<img srcset="/public/images/jrt-colors.png 2x">


On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-jrt.png">
      <figcaption><a href="/public/downloads/lab-jrt.pet">Lab</a></figcaption>
    </figure>
  </div>
    <div>
    <figure>
      <img src="/public/images/poodle-jrt.png">
      <figcaption>Poodle</figcaption>
    </figure>
  </div>
</div>

## Japanese Bobtail

<img srcset="/public/images/bobtail.png 2x">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-bobtail.png">
      <figcaption><a href="/public/downloads/alley-bobtail.pet">Alley Cat</a></figcaption>
    </figure>
  </div>
</div>

## Maine Coon

The ruff is part of the coat but does not use a color slot, it is always white. I've added arrows since the textured area can be hard to see.

<img srcset="/public/images/maine-coon-colors.png 2x" >

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-maine--coon.png">
      <figcaption><a href="/public/downloads/alley-maine-coon.pet">Alley Cat</a></figcaption>
    </figure>
  </div>
</div>


## Mutt

<img srcset="/public/images/mutt-colors.png 2x" class="retina">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-mutt.png">
      <figcaption>Lab</figcaption>
    </figure>
  </div>

  <div>
    <figure>
      <img src="/public/images/poodle-mutt.png">
      <figcaption>Poodle</figcaption>
    </figure>
  </div>
</div>


## Orange Shorthair

<img srcset="/public/images/oshie.png 2x" class="retina">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-oshie.png">
      <figcaption><a href="/public/downloads/alley-oshie.pet">Alley Cat</a></figcaption>
    </figure>
  </div>
</div>


## Poodle

<img srcset="/public/images/poodle-colors.png 2x" class="retina">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-poodle.png">
      <figcaption><a href="/public/downloads/lab-poodle.pet">Lab</a></figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="/public/images/poodle-coat-dash.png">
      <figcaption>Dachshund</figcaption>
    </figure>
  </div>

  <div>
    <figure>
      <img src="/public/images/poodle-coat-agouti-dash.png">
      <figcaption>Dachshund "Agouti"</figcaption>
    </figure>
  </div>
</div>


## Pug

Has two color slots but the original hexers may have done something wrong...

<img srcset="/public/images/pug-wtf.png 2x" class="retina">


On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-pug.png">
      <figcaption><a href="/public/downloads/lab-pug.pet">Lab</a></figcaption>
    </figure>
  </div>

  <div>
    <figure>
      <img src="/public/images/poodle-pug.png">
      <figcaption>Poodle</figcaption>
    </figure>
  </div>
</div>


## Scottie

<img srcset="/public/images/scottiecolors.png 2x" class="retina">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-scottie.png">
      <figcaption><a href="/public/downloads/lab-scottie.pet">Lab</a></figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="/public/images/poodle-scottie.png">
      <figcaption>Poodle</figcaption>
    </figure>
  </div>
</div>


## Scottish Fold

Note that with the original p5 breedfiles the textured part will always be the same color because it's not transparent. Fixed file I used is from [Reverie.](http://jewellz.net/)

<img srcset="/public/images/foldcolors.png 2x" class="retina">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-scottish-fold.png">
      <figcaption>Alley Cat</figcaption>
    </figure>
  </div>
</div>

## Sheepdog

<img srcset="/public/images/sheepdog-pal.png 2x" class="retina">


On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/lab-sheepdog.png">
      <figcaption>Lab</figcaption>
    </figure>
  </div>

  <div>
    <figure>
      <img src="/public/images/poodle-sheepdog.png">
      <figcaption>Poodle</figcaption>
    </figure>
  </div>
</div>


## Siamese

<img srcset="/public/images/color-meezer.png 2x" class="retina">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-siamese.png">
      <figcaption>Alley Cat</figcaption>
    </figure>
  </div>
</div>


## Tabby

<img srcset="/public/images/tabby-color.png 2x" class="retina">

On other breeds:
<div class="breed-pics">
  <div>
    <figure>
      <img src="/public/images/alley-tabby.png">
      <figcaption>Alley Cat</figcaption>
    </figure>
  </div>
</div>
