jquery.buttonspinner
===============

A jQuery plugin for feedback spinner inside a button, using spin.js

Develop using the jQuery plugin boilerplate by Jonathan Nicol (@f6design)
http://f6design.com/journal/2012/05/06/a-jquery-plugin-boilerplate/

Adds a spin.js spinner on a button. After initialization you can start, stop
and destroy the plugin instance.
CAN'T BE USED ON INPUT ELEMENT, because they cannot have childrens! :)

You can style the target element ( not the spinner ) using CSS:
- element on which buttonspinner is initializated will have class 
  .button-spinner
- when the spinner starts the .spinning class will be applied on the element

Example init:
  $('[data-buttonspinner]').buttonspinner();

  $('[data-buttonspinner]').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    $this = $(this);
    $this.buttonspinner('start');
    setTimeout(function() {
      $this.buttonspinner('stop');
    }, 2000);
  });
