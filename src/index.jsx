import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from "./App";

const root_container = document.getElementById('root')
const root = ReactDOMClient.createRoot(root_container);

root.render(<App />)

const wrapper = document.querySelector('#wrapper')


document.addEventListener("touchstart", touchStart, false)
document.addEventListener("touchmove", touchMove, { passive: false })

let x1 = null;
let x2 = null;
let diff = null;
let scrollPosition = null;

// TODO: SCROLLING FUNCTIONS

function whereScrollingNext(currPos) {
  switch (currPos) {
    case 0: {
      window.wrapper.scrollTo(1024, 0)
      break
    }
    case 1024: {
      window.wrapper.scrollTo(2048, 0)
      break
    }
    case 2048: {
      window.wrapper.scrollTo(2048, 0)
      break
    }
  }
}

function whereScrollingPrev(currPos) {
  switch (currPos) {
    case 0: {
      window.wrapper.scrollTo(0, 0)
      break
    }
    case 1024: {
      window.wrapper.scrollTo(0, 0)
      break
    }
    case 2048: {
      window.wrapper.scrollTo(1024, 0)
      break
    }
  }
}

function whereScrollingCancel(currPos) {
  switch (currPos) {
    case 0: {
      window.wrapper.scrollTo(0, 0)
      break
    }
    case 1024: {
      window.wrapper.scrollTo(1024, 0)
      break
    }
    case 2048: {
      window.wrapper.scrollTo(2048, 0)
      break
    }
  }
}

// TODO: EVENT FUNCTIONS

function touchStart(event) {
  x1 = event.touches[0].clientX
  scrollPosition = window.wrapper.scrollLeft
}


function touchMove(event) {
  event.preventDefault()
  // event.stopImmediatePropagation()
  x2 = event.touches[0].clientX
  diff = x1 - x2
  if (diff >= 100) {
    whereScrollingNext(scrollPosition)
  }
  else if (diff < 100 && diff > -100) {
    whereScrollingCancel(scrollPosition)
  }
  else if (diff <= -100) {
    whereScrollingPrev(scrollPosition)
  }
}





