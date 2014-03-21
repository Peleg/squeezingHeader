
jQuery(function() {

  // header: header element to keep track of total height
  // elements: array of elements with their collapsed positions
  var SqueezingHeader = function(header, elements) {
    this.$header  = header;
    this.elements = elements;
    this.setBodyPadding();
    this.getOrigDimensions();

    var that = this;
    return $(window).on('scroll', function () {
      if (!that.isAtBttm()) { // fix for seizure on bottom of page (mac)
        return that.resizeHeader();
      }
    });
  };

  SqueezingHeader.prototype = {

    constructor: SqueezingHeader,

    // adjust body padding to new height of header
    setBodyPadding: function () {
      return $('body').css({ paddingTop: this.$header.height() });
    },

    // append original dimension of elements
    getOrigDimensions: function () {
      return this.elements.forEach(function (el) {
        el.original = {};
        for (var key in el.mins) {
          el.original[key] = Number($(el.element).css(key).replace('px', ''));
        }
      });
    },

    scrollPosition: function () {
      // avoid setting out of bounds
      return Math.max(0, $(window).scrollTop());
    },

    isAtBttm: function () {
      return (this.scrollPosition() + $(window).height()) >= $(document).height();
    },

    // iterate over all element.mins and set new dimensions based on current scroll position
    resizeHeader: function () {
      var that = this;
      this.elements.forEach(function (el) {
        var obj = {};
        for (var key in el.mins) {
          var range = el.original[key] - el.mins[key],
              factor = Math.min(1, that.scrollPosition()/Math.abs(el.mins[key]))
          obj[key] = el.original[key] - range * factor + 'px'
        }
        $(el.element).css(obj);
      });
      return this.setBodyPadding();
    }
  };

  return $.fn.squeezingHeader = function(elements) {
    return new SqueezingHeader(this, elements);
  };
});
