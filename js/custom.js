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
  $('#desc').typeTo('creative problem-solver / software engineer')
});

$("#home-ln").click(function(e) {
    e.preventDefault();
    $(".active-ln").removeClass('active-ln');
    $("#home-ln").addClass('active-ln');
    $(".active").addClass('hidden');
    $(".active").removeClass('active');
    $("#home").removeClass('hidden');
    $("#home").addClass('active');
});

$("#about-ln").click(function(e) {
    e.preventDefault();
    $(".active-ln").removeClass('active-ln');
    $("#about-ln").addClass('active-ln');
    $(".active").addClass('hidden');
    $(".active").removeClass('active');
    $("#about").removeClass('hidden');
    $("#about").addClass('active');
});

$("#port-ln").click(function(e) {
    e.preventDefault();
    $(".active-ln").removeClass('active-ln');
    $("#port-ln").addClass('active-ln');
    $(".active").addClass('hidden');
    $(".active").removeClass('active');
    $("#portfolio").removeClass('hidden');
    $("#portfolio").addClass('active');
});
