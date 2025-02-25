# Smooth Scroll (SMOOTH_SCROLL)

<p align="center">
 <img width="400PX" src="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/main/images/repo_projects/SMOOTH_SCROLL.gif">
</p>

## Overview
`SMOOTH_SCROLL` is a JavaScript function that enables smooth scrolling using **linear interpolation (LERP)** for a more fluid scrolling experience. It works by continuously adjusting the scroll position over time, creating a soft, animated effect.

## Features
- Implements smooth scrolling using **LERP**.
- Works for both **horizontal** and **vertical** scrollable elements.
- Dynamically creates a container for smoother scrolling.
- Uses **requestAnimationFrame** to optimize performance.

## Installation
Simply include the `SMOOTH_SCROLL` function in your JavaScript file and call it on a scrollable element.

## Usage
```javascript
SMOOTH_SCROLL(document.querySelector(".vertical-scroll"));
SMOOTH_SCROLL(document.querySelector(".horizontal-scroll", 0.08));
```

## Example
```html
<!DOCTYPE html>
<HTML>
 <HEAD>
  <STYLE>
*
{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#__SLIDER__
{
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: min(600px, 90vw);
	height: 90vh;
	border: 1px solid rgba(0, 0, 0, 0.5);
	overflow-y: scroll;
	overflow-x: hidden;
}

#__SLIDER__ > SLIDER_CONTAINER
{
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
}

#__SLIDER__2
{
	left: 0;
	top: 0;
	width: 200EM;
	height: 100%;
	border: 1px solid rgba(0, 0, 0, 0.5);
	overflow-x: scroll;
	max-width: 100%;
}

#__SLIDER__2 > SLIDER_CONTAINER
{
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 18rem;
	padding: 1rem;
}

.SLIDER-ITEM
{
	width: inherit;
	height: 70vh;
	border: 0.5px solid rgba(0, 0, 0, 0.5);
	display: grid;
	place-items: center;
	font: 900 0.85rem helvetica, sans-serif;
}

/* *************************** [v] SCROLL BAR [v] *************************** */
*::-WEBKIT-SCROLLBAR
{
	WIDTH: 1REM;
}

*::-WEBKIT-SCROLLBAR-TRACK
{
	   BACKGROUND: TRANSPARENT;
	BORDER-RADIUS: 16PX;
}

*::-WEBKIT-SCROLLBAR-THUMB
{
	   BACKGROUND: #4E4B7533;
	BORDER-RADIUS: 16PX;
}

*::-WEBKIT-SCROLLBAR-THUMB:HOVER
{
	   BACKGROUND: #E9DDEDD9;
	BORDER-RADIUS: 16PX;
}

@SUPPORTS (-MS-IME-ALIGN: AUTO)
{
	*::-WEBKIT-SCROLLBAR-THUMB:HOVER;
	{
		/* SIMPLIFY THE EFFECT IN EDGE */
		    -WEBKIT-BOX-SHADOW: !IMPORTANT;
		/*-WEBKIT-*/BOX-SHADOW: NONE !IMPORTANT;
	}
}
/* *************************** [^] SCROLL BAR [^] *************************** */
  </STYLE>
 </HEAD>
 <BODY>
  <MAIN ID="__SLIDER__"> <!-- HORIZONTAL MAIN SCROLL -->
   <MAIN ID="__SLIDER__2"> <!-- VERTICAL CHILD SCROLL -->
    <DIV CLASS='SLIDER-ITEM'>1</DIV>
    <DIV CLASS='SLIDER-ITEM'>2</DIV>
    <DIV CLASS='SLIDER-ITEM'>3</DIV>
    <DIV CLASS='SLIDER-ITEM'>4</DIV>
    <DIV CLASS='SLIDER-ITEM'>5</DIV>
    <DIV CLASS='SLIDER-ITEM'>6</DIV>
    <DIV CLASS='SLIDER-ITEM'>7</DIV>
    <DIV CLASS='SLIDER-ITEM'>8</DIV>
    <DIV CLASS='SLIDER-ITEM'>9</DIV>
   </MAIN>
   <DIV CLASS='SLIDER-ITEM'>2</DIV>
   <DIV CLASS='SLIDER-ITEM'>3</DIV>
   <DIV CLASS='SLIDER-ITEM'>4</DIV>
   <DIV CLASS='SLIDER-ITEM'>5</DIV>
   <DIV CLASS='SLIDER-ITEM'>6</DIV>
   <DIV CLASS='SLIDER-ITEM'>7</DIV>
   <DIV CLASS='SLIDER-ITEM'>8</DIV>
   <DIV CLASS='SLIDER-ITEM'>9</DIV>
  </MAIN>
  <SCRIPT TYPE="TEXT/JAVASCRIPT" SRC="./SMOOTH_SCROLL.js"></SCRIPT>
  <SCRIPT TYPE="TEXT/JAVASCRIPT">
SMOOTH_SCROLL(document.getElementById("__SLIDER__"));
SMOOTH_SCROLL(document.getElementById("__SLIDER__2"), 0.02);
  </SCRIPT>
 </BODY>
</HTML>
```
