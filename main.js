var currentContent;
var currentNav;

$(document).ready(function() {

  $('#story-container').unslider({
    autoplay: true,
    nav: false,
    arrows: false,
    dots: true,
    infinite: true
  });


  currentNav = $('#one-nav');
  currentContent = $('#one-content');

  currentNav.addClass('nav-current');

  $('#one-content').addClass('section-gone');
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
  $('#two-nav').click( function() {
    toPrograms();
  });
  $('#four-nav').click( function() {
    toContact();
  });
  $('#fat-loss').click( function() {
    toPrograms();
  } );
  $('#strength').click( function() {
    toPrograms();
  } );
  $('#to-contact').click( function() {
    toContact();
  } );

  function toPrograms() {
    currentContent.addClass('section-gone');
    $('#two-content').removeClass('section-gone');
    currentContent = $('#two-content');

    currentNav.removeClass('nav-current');
    currentNav = $('#two-nav');
    currentNav.addClass( 'nav-current' );
  }

  function toContact() {
    currentContent.addClass('section-gone');
    $('#four-content').removeClass('section-gone');
    currentContent = $('#four-content');

    currentNav.removeClass( 'nav-current' );
    currentNav = $('#four-nav');
    currentNav.addClass('nav-current');

    currentNav = $('#four-nav');
  }


});
