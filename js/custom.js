$('#name').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('#desc').addClass('animated fadeIn');
  $('#desc').removeClass('hidden');
});

$('#desc').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('#navbar').addClass('animated fadeInDown');
  $('#navbar').removeClass('hidden');
  $('#links').addClass('animated fadeInUp');
  $('#links').removeClass('hidden');
  $('#animate-container').addClass('animated fadeIn');
  $('#animate-container').removeClass('hidden');
});

$('#home-ln').click(function(e) {
    e.preventDefault();

    $('.active-ln').removeClass('active-ln');
    $('#home-ln').addClass('active-ln');

    $('.active').addClass('invisible');
    $('.active').removeClass('active');
    $('#home').removeClass('hidden');
    $('#home').addClass('active');
});

$('#about-ln').click(function(e) {
    e.preventDefault();

    $('.active-ln').removeClass('active-ln');
    $('#about-ln').addClass('active-ln');

    if ($('.active').attr('id') === 'home') {
      $('.active').addClass('hidden');
    } else {
      $('.active').addClass('invisible');
    }

    $('.active').removeClass('active');
    $('#about').removeClass('invisible');
    $('#about').addClass('active');
});

$('#port-ln').click(function(e) {
    e.preventDefault();

    $('.active-ln').removeClass('active-ln');
    $('#port-ln').addClass('active-ln');

    if ($('.active').attr('id') === 'home') {
      $('.active').addClass('hidden');
    } else {
      $('.active').addClass('invisible');
    }

    $('.active').removeClass('active');
    $('#portfolio').removeClass('invisible');
    $('#portfolio').addClass('active');
});
