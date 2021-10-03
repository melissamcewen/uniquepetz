---
layout: layouts/page.njk
tags: pages
category: landing
title: About
---
Melissa/Meowlissa she/they, old enough to have played the games when they first came out

Site built with 11ty. Feel free to ["fork"](https://github.com/melissamcewen/uniquepetz) and use it to make your own!
<img src="/public/images/petz2u.png" class="pixel img-left desktop-image">

<ul>
{%- for post in collections.about -%}
<li><a href='{{ post.url }}'>{{ post.data.title }}</a>  - {{ post.data.description }}</li>
 {%- endfor -%}

</ul>

