---
layout: layouts/page.njk
tags: pages
category: landing
title: About
---
Melissa/Meowlissa she/they, old enough to have played the games when they first came out

Site built with 11ty. Feel free to ["remix"](https://glitch.com/~petz) and use it to make your own!
<img src="https://cdn.glitch.com/e8c48446-7221-44a1-aabd-d809cd1d1e34%2Fpetz2u.png?v=1624740532558" class="pixel img-left desktop-image">

<ul>
{%- for post in collections.about -%}
<li><a href='{{ post.url }}'>{{ post.data.title }}</a>  - {{ post.data.description }}</li>
 {%- endfor -%}
  
</ul>

