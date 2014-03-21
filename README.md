squeezingHeader
===============

A jQuery plugin for squeezing your header on scroll down

Usage
=====

To make your header squeezable, simply call `squeezingHeader()` on your header element passing along all the contained elements' final positions:

```javascript

var elementPositions =
    [
      {
        element: '.header .title',
        mins: {
          fontSize: 10,
          height: 10
        }
      },
      {
        element: '.header .menuBtn',
        mins: {
          marginRight: -100
        }
      }
    ];

$('.header').squeezingHeader(elementPositions);

```

For an working example, check out `demo.html`
