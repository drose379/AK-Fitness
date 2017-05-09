var currentContent;
var currentNav;

$(document).ready(function() {

  $('#story-container').unslider({
    autoplay: true,
    nav: false,
    arrows: false,
    dots: true
  });


  currentNav = $('#one-nav');
  currentContent = $('#one-content');

  currentNav.addClass('nav-current');

  $('#two-content').addClass('section-gone');
  $('#three-content').addClass('section-gone');
  $('#four-content').addClass('section-gone');

  $('#one-nav').click( function() {
    currentContent.addClass('section-gone');
    $('#one-content').removeClass('section-gone');
    currentContent = $('#one-content');

    currentNav.removeClass( 'nav-current' );
    currentNav = $('#one-nav');
    currentNav.addClass( 'nav-current' );

    currentNav = $('#one-nav');
  } );
  /*
  $('#two-nav').click( function() {
    currentContent.addClass('section-gone');
    $('#two-content').removeClass('section-gone');
    currentContent = $('#two-content');

    currentNav.removeClass('nav-current');
    currentNav = $('#two-nav');
    currentNav.addClass( 'nav-current' );
  });

  $('#three-nav').click( function() {
    currentContent.addClass('section-gone');
    $('#three-content').removeClass('section-gone');
    currentContent = $('#three-content');

    currentNav.removeClass( 'nav-current' );
    currentNav = $('#three-nav');
    currentNav.addClass('nav-current');

    currentNav = $('#three-nav');
  });

  $('#four-nav').click( function() {
    currentContent.addClass('section-gone');
    $('#four-content').removeClass('section-gone');
    currentContent = $('#four-content');

    currentNav.removeClass( 'nav-current' );
    currentNav = $('#four-nav');
    currentNav.addClass('nav-current');

    currentNav = $('#four-nav');
  });
  */


});
