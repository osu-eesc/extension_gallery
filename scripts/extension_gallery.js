(function(extension_gallery, $, undefined) {
  // place variables within the extension_gallery scope
  var modal, container, slider, slides, images, captions, prevButton, nextButton, pageInfo, slideWidth, currentSlide = 0;
  // initialize
  $(document).ready(function($){
    // create references to the elements we need to act on
    modal = $('.gallery-modal');
    container = $('.gallery-container');
    slider = $('.gallery-slider');
    slides = $('.gallery-slide');
    images = $('.field-name-field-gallery-image');
    captions = $('.field-name-field-gallery-caption');
    prevButton = $('.gallery-prev');
    nextButton = $('.gallery-next');
    pageInfo = $('.gallery-position');
    slideWidth, currentSlide = 0;
    // bind navigation button click events
    $(prevButton).add(nextButton).click(function(event){
      event.preventDefault();
        var step = $(this).is(prevButton) ? -1 : 1;
        navigate(step, true);
    });
    // bind swipe events
    $(prevButton).add(nextButton).on('swipeleft', function(){
      navigate(1, true);
    }).on('swiperight', function(){
      navigate(-1, true);
    });
    // if device is a touch screen, remove the no-touch class to remove annoying element hover behavior on tap
    if ('ontouchstart' in document) {
      $(modal).removeClass('gallery-no-touch');
    }
    // bind browser resize events
    $(window).resize(function(){
      resize();
    });
    // run the intitial size calculations
    resize();
  });
  // function to scale our html elements to fit
  function resize(){
    // adjust the container's height to fill the modal window
    $(container).height($(modal).height());
    // adjust each slide's width to fill the container
    var containerWidth = $(container).width();
    $(slides).each(function(){
      $(this).css('width', containerWidth);
    });
    // adjust the slider to fit all slides side-by-side
    slideWidth = $(slides).eq(0).width();
    var sliderWidth = slideWidth * slides.length;
    $(slider).width(sliderWidth);
    // adjust the slider's height to fill the container
    var sliderHeight = $(container).height()
    $(slider).height(sliderHeight);
    // adjust each image div to fill the space above its caption
    var imageHeight = $(captions).eq(0).position().top
    $(images).each(function(){
      $(this).height(imageHeight);
    });
    // make sure that the current slide is still in the proper position
    navigate(0, false);
  }
  // function to flip through the slides
  function navigate(step, animate){
    // step the current slide to the new one, wrapping around at the ends
    if (currentSlide + step  < 0) {
      currentSlide = slides.length - 1;
    }
    else if (currentSlide + step > slides.length - 1) {
      currentSlide = 0;
    }
    else {
      currentSlide += step;
    }
    // compute the new "left" value for the slider
    var offset = slideWidth * -currentSlide;
    // apply the new "left" value, animating if necessary
    if (animate) {
      $(slider).animate({left: offset}, 333, 'swing');
    }
    else {
      $(slider).css({left: offset});
    }
    //update the pager info, e.g. "2 of 5"
    $(pageInfo).text((currentSlide + 1) + ' of ' + slides.length);
  }
}(window.extension_gallery = window.extension_gallery || {}, jQuery));

