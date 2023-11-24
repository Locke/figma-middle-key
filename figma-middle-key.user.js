// ==UserScript==
// @name     Fix Figma
// @version  1
// @grant    none
// @match    https://www.figma.com/*
// ==/UserScript==
const middle_button = 1

let nopaste = false

const delta = 6;
let startX;
let startY;

document.addEventListener('mousedown', function (event) {
  startX = event.pageX;
  startY = event.pageY;
});

document.addEventListener('mouseup', function(e) {
    const diffX = Math.abs(e.pageX - startX);
    const diffY = Math.abs(e.pageY - startY);
  	if (diffX < delta && diffY < delta) {
      // It's a click, not a drag
      return false 
  	}
    if (e.button == middle_button) {
      	nopaste = true
    }
    return false;
}, true);

document.addEventListener('paste', function(e) {
    if (nopaste) {
        e.cancelBubble = true;
        e.stopImmediatePropagation();
      	nopaste = false
    }
    return false;
}, true);
