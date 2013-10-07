describe('jQuery Buttonspinner', function () {
  var button;

  beforeEach(function () {
    $('<button data-buttonspinner>Save</button>').appendTo('body');
    $button = $("[data-buttonspinner]");
    $initial_content = $button.html();
    $button.buttonspinner();
  });

  afterEach(function () {
    $button.remove();
  });

  describe('init()', function() {
    it('should have a plugin_buttonspinner data attribute', function() {
      expect($button.data('plugin_buttonspinner')).toBeTruthy();
    });

    it('should have a buttonspinner data attribute', function() {
      expect($button.data('buttonspinner')).toBeTruthy();
    });

    it('should apply class button-spinner to element', function() {
      expect($button.hasClass('button-spinner')).toBe(true);
    });

    it('should move content inside child element with class button-spinner-label', function() {
      expect($button.children('.button-spinner-label')).toBeTruthy();
    });
  });

  describe('start()', function() {
    var old_html;

    beforeEach(function() {
      old_html = $button.html();
      $button.buttonspinner('start');
    });

    it('should move element html to buttonspinner data attribute', function() {
      data = $button.data('buttonspinner');
      expect(data.old_html).toEqual(old_html);
    });
    
    it('should hide content', function() {
      $content = $('.button-spinner-label', $button);
      expect($content).toBeHidden();
    });
    
    it('should set dimension on button element', function() {
      expect($button).toHaveCss({
        width: $button.outerWidth() + 'px',
        height: $button.outerHeight() + 'px'
      });
    });
    
    it('should add class spinning', function() {
      expect($button).toHaveClass('spinning')
    });

    it('should add class disabled', function() {
      expect($button).toHaveClass('disabled');
    });

    it('should create a spin.js spinner', function() {
      expect($button.data('spinner')).toBeDefined();
    });
  });

  describe('stop()', function() {
    beforeEach(function() {
      $button.buttonspinner('stop');
    });

    it('should remove the spin.js spinner', function() {
      expect($button.data('spinner')).toBeUndefined();
    });

    it('should remove class spinning', function() {
      expect($button).not.toHaveClass('spinning');
    });
    
    it('should remove class disabled', function() {
      expect($button).not.toHaveClass('disabled');
    });

    it('should show content', function() {
      $content = $('.button-spinner-label', $button);
      expect($content).toBeVisible();
    });
    
    it('should delete html from data attribute', function() {
      data = $button.data('buttonspinner');
      expect(data.old_html).toBeUndefined();
    });
  });

  describe('destroy()', function() {
    beforeEach(function(){
      $button.buttonspinner('destroy');
    });

    it('should reset element dimension', function() {
      expect($button).not.toHaveProp('width');
      expect($button).not.toHaveProp('height');
    });
    
    it('should remove class button-spinner', function() {
      expect($button).not.toHaveClass('button-spinner');
    });

    it('should remove plugin_buttonspinner data attribute', function() {
      expect($button.data('plugin_buttonspinner')).toBeFalsy();
    });

    it('should remove buttonspinner data attribute', function() {
      expect($button.data('buttonspinner')).toBeFalsy();
    });

    it('should move content out of button-spinner-label', function() {
      expect($button).toHaveHtml($initial_content);
    });
  });
});
