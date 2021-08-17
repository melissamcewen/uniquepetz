---
layout: layouts/page.njk
tags: ['pages', 'downloads']
category: landing
description: Selective breeds
title: Selective Breeds
---


## Selective petzy based on real breeds
Some have hexed lineaged using the "[genexing](/genex) technique", this will be noted in the description

<ul>
{%- for post in collections.realistic-breeds -%}
<li><a href='{{ post.url }}'>{{ post.data.title }}</a>  - {{ post.data.description }}</li>
 {%- endfor -%}

</ul>


## Selective breeds
Some have hexed lineaged using the "genexing technique"
<ul>
{%- for post in collections.selective-breeds -%}
<li><a href='{{ post.url }}'>{{ post.data.title }}</a>  - {{ post.data.description }}</li>
 {%- endfor -%}

</ul>

## P5 Reimagined
The Petz 5 breeds "reimagined" with genexing!
<ul>
{%- for post in collections.p5reimagined -%}
<li><a href='{{ post.url }}'>{{ post.data.title }}</a>  - {{ post.data.description }}</li>
 {%- endfor -%}

</ul>


## Wildz
Other species made by combining original breeds!
<ul>
{%- for post in collections.wildz -%}
<li><a href='{{ post.url }}'>{{ post.data.title }}</a>  - {{ post.data.description }}</li>
 {%- endfor -%}

</ul>

## WIP Selective Breeds
None available for download
<ul>
{%- for post in collections.wip -%}
<li><a href='{{ post.url }}'>{{ post.data.title }}</a>  - {{ post.data.description }}</li>
 {%- endfor -%}

</ul>
