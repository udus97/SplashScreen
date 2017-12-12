(function ($) {
  $.fn.splashScreen = function (settings) {
    settings = $.extend({
      textLayers: [],
      textShowTime: 200,
      textTopOffset: 80
    }, settings);

    let promoIMG = this;

    let splashScreen = $('<div>', {
      id: 'splashScreen',
      css: {
        'background-image': promoIMG.css('background-image'),
        'background-position': 'center ' + promoIMG.offset().top + 'px',
        height: $('document').height()
      }
    });

    $('body').append(splashScreen);

    splashScreen.click(function () {
      $(this).fadeOut('slow');
    });

    splashScreen.on('changeText', function (e, newID) {
      if (settings.textLayers[newID]) showText(newID);
      else splashScreen.click();
    });

    splashScreen.trigger('changeText', newID = 0);

    function showText(id) {
      let textImage = $('<img>', {
        src: settings.textLayers[id],
        css: {
          'margin-top': promoIMG.offset().top + settings.textTopOffset
        }
      }).hide();

      textImage.load(function () {
        let $this = $(this);
        $this.fadeIn('slow')
          .delay(settings.textShowTime)
          .fadeOut('slow', function () {
          $this.remove();

          splashScreen.trigger('changeText', [id + 1]);
        });
      });
      splashScreen.append(textImage);
    }
    return $(this);
  };
})(jQuery);
