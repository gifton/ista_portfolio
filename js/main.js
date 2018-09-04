$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});

$(window).load(function() {
	$('.picture-button').click(function() {
		 $('#main-container').fadeOut('slow', function(){
         	$('#pictures-wrapper').fadeIn('slow');
    	});
	})
})

$(window).load(function() {
  $('.back-button').click(function() {
     $('#pictures-wrapper').fadeOut('slow', function(){
          $('#main-container').fadeIn('slow');
      });
  })
})