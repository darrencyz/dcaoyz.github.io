$.typer.options = {
  highlightSpeed    : 35,
  typeSpeed         : 70,
  clearDelay        : 500,
  typeDelay         : 200,
  clearOnHighlight  : true,
  typerDataAttr     : 'data-typer-targets',
  typerInterval     : 2000
}

$('h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('p').addClass('animated fadeIn');
  $('p').removeClass('hidden');
});

$('p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('p').typeTo('software engineering · passion for development')
});

function display(){
  $('ul').addClass('animated fadeIn');
  $('ul').removeClass('hidden');
}

setTimeout(function() {
  $('ul').addClass('animated fadeIn');
  $('ul').removeClass('hidden');
}, 8500);