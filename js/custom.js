function display() {
  $('#navbar').addClass('animated fadeInDown');
  $('#navbar').removeClass('hidden');
  $('#links').addClass('animated fadeInUp');
  $('#links').removeClass('hidden');
  $('#links').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('#particles').particleground({
    dotColor: '#337ab7',
    lineColor: '#AEC6CF',
    particleRadius: 7,
    density: 15000,
    proximity: 65,
    parallaxMultiplier: 25
    });
  });
}

$.typer.options = {
  highlightSpeed    : 18,
  typeSpeed         : 25,
  clearDelay        : 500,
  typeDelay         : 200,
  clearOnHighlight  : true,
  typerDataAttr     : 'data-typer-targets',
  typerInterval     : 2000,
  callback          : display
}

$('#name').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('#desc').addClass('animated fadeIn');
  $('#desc').removeClass('hidden');
});

$('#desc').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('#desc').typeTo('software engineer & creative problem-solver')
});

$('#home-link').css('color', '#EF3F38')

$("#home-link").click(function(e) {
    e.preventDefault();

    $(".active").addClass('hidden');
    $(".active").removeClass('active');
    $("#home").removeClass('hidden');
    $("#home").addClass('active');
});

$("#about-link").click(function(e) {
    e.preventDefault();

    $(".active").addClass('hidden');
    $(".active").removeClass('active');
    $("#about").removeClass('hidden');
    $("#about").addClass('active');
});

$("#portfolio-link").click(function(e) {
    e.preventDefault();

    $(".active").addClass('hidden');
    $(".active").removeClass('active');
    $("#portfolio").removeClass('hidden');
    $("#portfolio").addClass('active');
});
