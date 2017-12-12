Apple style splashscreen

The script tag is placed in the head section to ensure that nothing on the page is going to be shown to the user before we show the splash screen


The #promoIMG div has an image at the top - "Available now"

#promoIMG has a background image "macbookair.jpg"

The splashScreen has the same background image as promoIMG, and onload event of the page fires, it starts showing. When it finishes showing, it is removed and replaced back with the promoIMG div

While the slideshow is going on, if the image is clicked, the slideshow stops immediately

A custom event called 'changeText' is added to the splashScreen.
with a parameter 0 being the index of the first text to show among array of text images.

In the body of the callback function of the changeText custom event a function 'showText' is called if the user passed an array of images to show for the slideshow. If the user didnt pass an array of images, then there is no slideshow to show.

In the body of the showText callback function, an img element is created, the src attribute is the index position in the array passed by the user.
The element is hidden immediately after its created.

The image is loaded and a callback function is passed. In the callback function, the image fades in slowly, it is delayed by the number of seconds provided by the user in the settings object, and then it is faded out slowly. After it is done fading out, the image is removed, and the the changeText custom event is called again on the splashScreen with an index increased by 1, i.e. the next image in the array to be shown next in the slideshow.
