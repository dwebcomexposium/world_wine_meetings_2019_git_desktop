/* CHIFFRES */
$(function() {
	if ( $( "#chiffres" ).length ) {
		$(window).scroll(testScroll);
	}	
	var viewed = false;

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
});



/* FIN CHIFFRES */

/* PARALLAX */
$(function() {
    var $el = $('.front .article-focus:nth-child(1)');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position':'50% '+(-.5*scroll)+'px'
        });
    });
});
/* FIN PARALLAX */


/* Bandeau social */ 

$(function() {
	var out = '<div id="social_bar"><div id="social_linkedin"></div></div>';
	$( out ).appendTo( "body" );
	$( "#social_linkedin" ).click(function() {
		var let = "http://www.linkedin.com";
		window.open(url, '_blank');
	});
});


/* fin Bandeau social */

/* STICKY HEADER */
$(document).ready(function() {
	/*====================================*/
	/*=========== Bloc Sticky ============*/
	/*====================================*/
	var options = {
		stickyBlock : ".site-banner", // bloc cible à rendre "sticky"
		stickyBlockClass : "sticky-box", // classe du bloc cible à rendre "sticky"
		stickyClass : "is-sticky", // classe qui active le mode "sticky" selon le niveau de scroll
		stickyEvents : "load scroll", // Ne doit pas être modifié en théorie !
		stickyActiveCSS : {
			"position":"fixed", // Position "fixed" pour le mode Sticky. Ne pas modifier !
			"width":"100%", // Recommandé de fixer la largeur à 100% pour ne pas avoir de bug
			"z-index":9999, // Recommandé de fixer un fort z-index pour passer au-dessus des contenus
			"top":0 // Optionnel : permet ici de coller le bloc Sticky en haut du viewport
		},
	};

	// On encadre le bloc ciblé par une DIV nécessaire pour faire l'effet sticky
	$(options.stickyBlock).wrap('<div class="'+options.stickyBlockClass+'"></div>');

	// On prend les dimensions par défaut du bloc (hauteur dynamique)
	//var heightSticky = Math.round($(options.stickyBlock).outerHeight());
	var heightSticky = 120;

	$(window).on(options.stickyEvents, function() {
		// Récupération de la hauteur dynamiquement à chaque scroll (pour voir si elle change...)
		if(heightSticky > Math.round($(options.stickyBlock).outerHeight())) {
			var newHeightSticky = Math.round($(options.stickyBlock).outerHeight()); // Hauteur de l'entête
		}

		// Si on scroll au niveau du bloc sticky
		if($(window).scrollTop() > 0) {
			// Ajout de la classe d'activation du mode Sticky
			$("."+options.stickyBlockClass).addClass(options.stickyClass);

			// Récupération de la hauteur du bloc (utile si cette dernière change !)
			$("."+options.stickyBlockClass).height(newHeightSticky);

			// Application du style par défaut pour le bloc "sticky"
			$("."+options.stickyClass+" "+options.stickyBlock).css(options.stickyActiveCSS);
		}
		else // Si on est retourné au niveau le plus haut (donc plus de mode Sticky)
		{
			// Suppression de la class d'activation du mode Sticky
			$("."+options.stickyBlockClass).removeClass(options.stickyClass);

			// Récupération de la hauteur initiale (par défaut) du bloc "sticky"
			$("."+options.stickyBlockClass).height(heightSticky);

			// Suppression du style spécifique actif pour le mode Sticky
			$("."+options.stickyBlockClass+" "+options.stickyBlock).removeAttr('style');
		}
	});
});
/* STICKY HEADER */

/* trick contact */
$(function() {
	var detach  = $(".contact .cl-content div[itemprop='address']").detach();
	$(".contact .cl-content .cl-item-title").before(detach);
});

/* trick programme */
$(function() {
	
	var detach1  = $(".node1235852 .article-focus:nth-child(3) table tr:nth-child(2) td:first-child p").detach();
	$(".node1235852 .article-focus:nth-child(3) table tr:first-child td:nth-child(1) p").after(detach1);

	var detach2  = $(".node1235852 .article-focus:nth-child(3) table tr:nth-child(2) td:nth-child(2) p").detach();
	$(".node1235852 .article-focus:nth-child(3) table tr:first-child td:nth-child(2) p").after(detach2);

	var detach3  = $(".node1235852 .article-focus:nth-child(3) table tr:nth-child(2) td:nth-child(3) p").detach();
	$(".node1235852 .article-focus:nth-child(3) table tr:first-child td:nth-child(3) p").after(detach3);
	
});

