(function ($) {
  $.fn.splashScreen = function (settings) {
    // Providing default options
    // The jQuery core 'extend' method merges the settings object provided by the user of the method with the default settings. If the user doesnt provide a settings object, the default settings object will be applied. Otherwise the user provided settings will be applied.
    settings = $.extend({
      textLayers: [],
      textShowTime: 1500,
      textTopOffset: 80
    }, settings);

    var promoIMG = this;
    //Creating the splashScreen DIV.
    var splashScreen = $('<div>', {
      id: 'splashScreen',
      css: {
        'background-image': promoIMG.css('backgroundImage'),
        'background-position': 'center ' + promoIMG.offset().top + 'px',
        height: $(document).height()
      }
    });

    //Add the created splashScreen div to the body
    $('body').append(splashScreen);

    //If the splashscreen is clicked, even while the slideshow is going on, stop the slideshow
    splashScreen.click(function () {
      splashScreen.fadeOut('slow');
    });

    // Binding a custom event for changing the current visible text according to the contents of the textLayers array (passed as a parameter)
    splashScreen.bind('changeText', function (e,newID) {
      // If the image that we want to show is within the boundaries of the array
      if (settings.textLayers[newID]) showText(newID)
      else splashScreen.click();
    });

    splashScreen.trigger('changeText', 0);


    function showText(id) {
      var textImage = $('<img>', {
        src: settings.textLayers[id],
        css: {
          'margin-top': promoIMG.offset().top + settings.textTopOffset
        }
      }).hide();

      textImage.load(function () {
        textImage.fadeIn('slow').delay(settings.textShowTime).fadeOut('slow', function () {
          textImage.remove();
          splashScreen.trigger('changeText', [id + 1]);
        });
      });
      splashScreen.append(textImage)

    }

    return $(this);

  }
})(jQuery);
