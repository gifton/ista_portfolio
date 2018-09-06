//hover on cards on desktop
$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});

//display art
$(window).load(function() {
  $('.art-button').click(function() {
   $('#main-container').fadeOut('slow', function(){
      $('#welcome-content').fadeOut('slow', function() {
        $('#art-wrapper').fadeIn('slow');
      });
    });
  })
});

//display inspirations
$(window).load(function() {
  $('inspirations-button').click(function() {
   $('#main-container').fadeOut('slow', function(){
      $('#welcome-content').fadeOut('slow', function() {
        $('#inspirations-wrapper').fadeIn('slow');
      });
    });
  })
});

// display projects
$(window).load(function() {
  $('.projects-button').click(function() {
   $('#main-container').fadeOut('slow', function(){
      $('#welcome-content').fadeOut('slow', function() {
        $('#projects-wrapper').fadeIn('slow');
      });
    });
  })
});

//return to home
$(window).load(function() {
  $('.back-button').click(function() {
    $('#welcome-content').fadeIn('slow');
    $('#main-container').fadeIn('slow');
    $('#projects-wrapper').fadeOut('slow');
    $('#art-wrapper').fadeOut('slow');
    $('#inspirations-wrapper').fadeOut('slow');
  })
});