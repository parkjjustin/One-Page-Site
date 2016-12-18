
// Off sets fixed navbar
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) {
    shiftWindow();
};

window.addEventListener("hashchange", shiftWindow);

// Animates scroll in page anchor links
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (event) {
	    event.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

// Highlight links in anchor page
$(function() {
// When clicking on anchor links, this adds active class to highlight the link
  $('nav a').click(function() {
    $(this).addClass('active').siblings('nav a').removeClass('active');
  });

  $(document).scroll(function() {
    $('nav a[href="#'+$('section:hover').attr('id')+'"]').addClass('active').siblings('nav a').removeClass('active');
  });
  
});