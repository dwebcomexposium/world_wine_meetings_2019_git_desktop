/* CHIFFRES */
$(function() {
	$(window).scroll(testScroll);
	var viewed = false;

});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($("#chiffres")) && !viewed) {
      viewed = true;
      $('.compteur').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}

/* FIN CHIFFRES */

/* Bandeau social */ 

$(function() {
	var out = '<div id="social_bar"><div id="social_linkedin"></div><div id="social_newsletter"><a href="#" title="Inscription newsletter">NEWSLETTER</a></div></div>';
	$( out ).appendTo( "body" );
});


/* fin Bandeau social */