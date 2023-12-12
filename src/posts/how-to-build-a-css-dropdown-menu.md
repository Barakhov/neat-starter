---
title: How to Build a CSS Dropdown Menu
description: The following snippet demonstrates how to build a dropdown menu
  with CSS (no JavaScript) that maintains its state when clicked. The special
  sauce in this demo is the :focus-within pseudo selector, which allows the
  dropdown to stay open when its child links are clicked.
author: Yo mismo
date: 2023-12-05T22:27:46.730Z
tags:
  - Tags
---

The following snippet demonstrates how to build a dropdown menu with CSS (no JavaScript) that maintains its state when clicked. The special sauce in this demo is the [:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) pseudo selector, which allows the dropdown to stay open when its child links are clicked.

## Step 1: Start with a Navigation Bar

Start with some navbar markup.

```html
<nav class="navbar">
  <ul class="navbar-nav">
    <li class="nav-item">Home</li>
    <li class="nav-item">About</li>

    <!-- Dropdown will go here -->

    <li class="nav-item">Login</li>
  </ul>
</nav>
```

The navbar is just simple flex container.

```css
.navbar {
  height: 70px;
  width: 100%;
  background: black;
  color: white;
}

.navbar-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}
```

## Step 2: Add a Dropdown Menu

Add a list item to the navbar that has a dropdown nested below it.

```html
<!-- Dropdown will go here -->

<li class="nav-item has-dropdown">
  <a href="#">Theme</a>

  <ul class="dropdown">
    <li class="dropdown-item">
      <a href="#">light</a>
    </li>
    <li class="dropdown-item">
      <a href="#">dark</a>
    </li>
    <li class="dropdown-item">
      <a href="#">solarize</a>
    </li>
  </ul>
</li>
```

The dropdown starts with an opacity of zero to keep it hidden until it becomes focused. It is also a flex container to control the layout direction of its children.

```css
.dropdown {
  opacity: 0;
  position: absolute;
  width: 500px;
  z-index: 2;
  background: black;

  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  margin-top: 2rem;
  padding: 0.5rem;

  transform: translateX(-40%);
  transition: opacity 0.15s ease-out;
}

.dropdown-item a {
  width: 100%;
  height: 100%;
}
```

## Step 3: Open the Dropdown with focus-within

When any of the `<a>` elements in the dropdown are focused (by being clicked), the opacity is updated to 1. The `focus-within` selector stays active while ANY of the children inside the dropdown have focus - that’s much easier than listening to click events with JavaScript. The transition in the previous step gives it a subtle fade-in animation.

```css
.has-dropdown:focus-within .dropdown {
  opacity: 1;
  pointer-events: auto;
}
```
