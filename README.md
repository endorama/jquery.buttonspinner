# jQuery ButtonSpinner

jQuery.buttonspinner is a jQuery plugin for feedback spinner inside a button, using spin.js.

Develop using the jQuery plugin boilerplate by Jonathan Nicol (@f6design)
http://f6design.com/journal/2012/05/06/a-jquery-plugin-boilerplate/

Adds a spin.js spinner on a button. After initialization you can start, stop and destroy the plugin instance.  
**CAN'T BE USED ON INPUT ELEMENT, because they cannot have childrens!** :)

## CSS Styles

You can style the target element ( not the spinner ) using CSS:

- element on which buttonspinner is initializated will have class 
  .button-spinner
- when the spinner starts the .spinning class will be applied on the element

## Methods

### Defaults

    $.fn.buttonspinner.defaults = {};

Default options for the plugin. Overriding this array globally overrides default options.

### Plugin initialization and start

    $("['data-buttonspinner']").buttonspinner();

Initialize the plugin but do not starts the spinner.

### Destroy plugin instance

    $("['data-buttonspinner']").buttonspinner('destroy');

Destroy the instance of the buttonspinner plugin, to free memory.

### Start the spinner

    $("['data-buttonspinner']").buttonspinner('start');

Start the spinner, creating a Spin.js instance add placig it in the button element.

### Stop a running spinner

    $("['data-buttonspinner']").buttonspinner('stop');

Stop a started spinner, destroing the Spin.js instance.

## Example

Sample usage:

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

## Tests

jQuery ButtonSpinner public methods are all tested, you can find specs in `spec/` folder. I used Jasmine to create tests.

## Contrib

1. Fork the project
2. Create a development environment ( you need to have grunt available to perform tasks ).
3. Create a feature branch
4. Add **code** and **tests**
5. Create a pull request

## License

Licensed under the MIT License. See LICENSE for details.

Copyright © 2013 Edoardo Tenani
