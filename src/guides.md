---
layout: layouts/page.njk
tags: pages
category: landing
title: Guides
---

<ul>
{%- for post in collections.guides -%}
<li><a href='{{ post.url }}'>{{ post.data.title }}</a>  - {{ post.data.description }}</li>
 {%- endfor -%}
  
</ul>