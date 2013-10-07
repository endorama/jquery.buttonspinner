/*
 * Class:      buttonspinner
 * Author:     Edoardo Tenani
 * Website:    http://about.me/edoardo.tenani
 * Version:    1.0.0
 * Date:       26/09/2013
 * Tested On:  jQuery 1.10.2
 * Require:    Edoardo Tenani jQuery Spin.js gist
 * License:    MIT License
 * Copyright:  (c) 2013 - Edoardo Tenani
 *
 * Develop using the jQuery plugin boilerplate by Jonathan Nicol (@f6design)
 *   http://f6design.com/journal/2012/05/06/a-jquery-plugin-boilerplate/
 *
 * Adds a spin.js spinner on a button. After initialization you can start, stop
 * and destroy the plugin instance.
 * CAN'T BE USED ON INPUT ELEMENT, because they cannot have childrens! :)
 *
 * You can style the target element ( not the spinner ) using CSS:
 * - element on which buttonspinner is initializated will have class 
 *   .button-spinner
 * - when the spinner starts the .spinning class will be applied on the element
 *
 * Example init:
 *   $('[data-buttonspinner]').buttonspinner();
 *
 *   $('[data-buttonspinner]').on('click', function(event) {
 *     event.preventDefault();
 *     event.stopPropagation();
 *
 *     $this = $(this);
 *     $this.buttonspinner('start');
 *     setTimeout(function() {
 *       $this.buttonspinner('stop');
 *     }, 2000);
 *   });
 *
 * THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
;(function($) {
  var pluginName = 'buttonspinner';
   
  /**
   * Implements the Revealing Module Pattern.
   */
  function Plugin(element, options) {
    // References to DOM and jQuery versions of element.
    var el = element,
        $el = $(element),
        data = {},
        $content = $('.button-spinner-label', $el);
 
    options = $.extend({}, $.fn[pluginName].defaults, options);
 
    function init() {
      $el.data('buttonspinner', data);
      $el.addClass('button-spinner');
      // add a container for hide/show of button label
      if (!$content.length) {
        $el.html('<span class="button-spinner-label">' + $el.html() + '</span>')
        $content = $('.button-spinner-label', $el);
      }
    }
 
    function start() {
      data.old_html = $el.html();
      $el.data('buttonspinner', data);

      $content.css('display', 'none');
      $el
        .css({
          'height': $el.outerHeight(),
          'width': $el.outerWidth(),
        })
        .addClass('spinning disabled')
        .spin({
          lines: 8, 
          length: 3, 
          radius: 5
        });
    }

    function stop() {
      $el
        .spin(false)
        .removeClass('spinning disabled');
      $content.css('display', 'inline');

      delete data.old_html;
      $el.data('buttonspinner', data);
    }
  
    /**
     * Destroy plugin.
     * Usage: $('#el').buttonspinner('destroy');
     */
    function destroy() {
      // Iterate over each matching element.
      $el.each(function() {
        var el = this;
        var $el = $(this);
 
        // Add code to restore the element to its original state...
        $el
          .css({
            'height': '',
            'width': '',
          })
          .removeClass('button-spinner')
          .html($content.html());
 
        // Remove Plugin instance from the element.
        $el.removeData('plugin_' + pluginName);
        $el.removeData(pluginName);
      });
    }
 
    init();
 
    // Expose methods of Plugin we wish to be public.
    return {
      destroy: destroy,
      start: start,
      stop: stop
    };
  }
 
  /**
   * Plugin definition.
   */
  $.fn[pluginName] = function(options) {
    // If the first parameter is a string, treat this as a call to
    // a public method.
    if (typeof arguments[0] === 'string') {
      var methodName = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1);
      var returnVal;
      this.each(function() {
        // Check that the element has a plugin instance, and that
        // the requested public method exists.
        if ($.data(this, 'plugin_' + pluginName) && typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function') {
          // Call the method of the Plugin instance, and Pass it
          // the supplied arguments.
          returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(this, args);
        } else {
          throw new Error('Method ' +  methodName + ' does not exist on jQuery.' + pluginName);
        }
      });
      if (returnVal !== undefined){
        // If the method returned a value, return the value.
        return returnVal;
      } else {
        // Otherwise, returning 'this' preserves chainability.
        return this;
      }
    // If the first parameter is an object (options), or was omitted,
    // instantiate a new instance of the plugin.
    } else if (typeof options === "object" || !options) {
      return this.each(function() {
        // Only allow the plugin to be instantiated once.
        if (!$.data(this, 'plugin_' + pluginName)) {
          // Pass options to Plugin constructor, and store Plugin
          // instance in the elements jQuery data object.
          $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
        }
      });
    }
  };
 
  // Default plugin options.
  // Options can be overwritten when initializing plugin, by
  // passing an object literal, or after initialization:
  // $('#el').buttonspinner('option', 'key', value);
  $.fn[pluginName].defaults = {};
 
})(jQuery);
