function display() {
  $('ul').addClass('animated fadeInUp');
  $('ul').removeClass('hidden');
}

$.typer.options = {
  highlightSpeed    : 35,
  typeSpeed         : 70,
  clearDelay        : 500,
  typeDelay         : 200,
  clearOnHighlight  : true,
  typerDataAttr     : 'data-typer-targets',
  typerInterval     : 2000,
  callback          : display
}

$('h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('p').addClass('animated fadeIn');
  $('p').removeClass('hidden');
});

$('p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('p').typeTo('software engineering · passion for development')
});
