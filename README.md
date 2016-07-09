squeezingHeader
===============

A jQuery plugin for squeezing your header on scroll down.

[Demo's here](http://htmlpreview.github.io/?https://github.com/Peleg/squeezingHeader/blob/master/demo.html)

[And IRL](https://education.burnsfilmcenter.org/education)

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

For a working example, check out `demo.html`
