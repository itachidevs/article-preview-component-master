# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I started with a bassic HTML structure. In this project I have used flex box layout to arrange the elements side by side. I used psuedo classes for the popup boxes
I find it very simple using flex box while using making cards.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
- How we can use different psudo classes and bulding a small popup for a button.
- When it comes to buliding with position property it was little bit confusing but   you can achieve it once you are used to it.
  To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
<footer class="footer-desktop" id="footer-desktop">
        <p class="share">SHARE</p>
        <img src="/article-preview-component-master\images\icon-facebook.svg" alt="facebook-icon" class="icon">
        <img src="/article-preview-component-master\images\icon-twitter.svg" alt="twitter-icon" class="icon">
        <img src="/article-preview-component-master\images\icon-pinterest.svg" alt="pinterest-icon" class="icon">
        
      </footer>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
ooter-desktop {

        visibility: hidden;
        width: fit-content;
        background-color: var(--heading);
        padding: 20px;
        position: absolute;
        display: flex;
        z-index: 1;
        bottom: 42%;
        left: 50%;
        margin-left: 200px;
        gap: 1em;
    }

```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
const showPopup=()=>{
    footerDesktop.classList.toggle('show-pop-up')
}
shareBtnDesktop.addEventListener('click',showPopup)

```


### Useful resources

- [Example resource 1](https://www.w3schools.com/) - This helped me in creating a beatuful popup for a button. I really liked this pattern and will use it going forward.

## Author

- Website - [itachidevs](https://www.your-site.com)
- Frontend Mentor - [@itachidevs](https://www.frontendmentor.io/profile/itachidevs)
- Twitter - [@itachi_devs](https://www.twitter.com/itachi_devs)

