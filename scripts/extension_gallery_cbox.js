// anonymous function to keep this stuff out of the global namespace
(function(extension_gallery_cbox, $, undefined) {
  // variables within larger scope
  var cboxContent, cboxIframe, resizeTimer;
  // options to be passed to the colorbox
  var cboxOptions = {
    iframe: true,
    width: '95%',
    height: '95%',
    maxWidth: '960px',
    maxHeight: '960px',
    fastIframe: false,
    scrolling: false,
    onComplete: function(){
      // grab refrences to the colorbox and iframe elements
      cboxContent = $('#cboxLoadedContent');
      cboxIframe = $(cboxContent).find('iframe');
      // set the initial iframe dimensions
      iframeResizer();
    },
    onClosed: function(){
      // clear the reference to the iframe
      cboxIframe = null;
    }
  }
  // bind the colorbox event to the gallery link
  $('.gallery-link').colorbox(cboxOptions);
  // resize the colorbox on window resize
  $(window).resize(function(){
    cboxResizer();
  });
  // function to resize the colorbox
  function cboxResizer(){
    if (!!$(cboxIframe).length){
      // wait until the window is done being resized
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        // call the resize method on the colorbox
        $.colorbox.resize({
          // trick the resize method into respecting our max-width and max-height
          width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
          height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
        });
        // set the iframe dimensions
        iframeResizer();
      }, 300);
    }
  }
  // function to set absolute dimensions on the iframe, needed to fix iOS expansion bug
  function iframeResizer(){
    if (!!$(cboxIframe).length){
      $(cboxIframe).css({
        // reset the style attribute
        width: 'inherit'
      }).attr({
        // set the width and height attributes to the colorbox dimensions
        width: $(cboxContent).width(),
        height: $(cboxContent).height()
      });
    }
  }
}(window.extension_gallery_cbox = window.extension_gallery_cbox || {}, jQuery));