$('h1').addClass('animated fadeIn');

$('h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('h3').addClass('animated fadeIn');
  $('h3').removeClass('hidden');
});

$('h3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
$('[data-typer-targets]').typer();
});