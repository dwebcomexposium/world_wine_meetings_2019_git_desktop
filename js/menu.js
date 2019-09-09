
$(function() {
	/* Burger Menu */
	var out = '<div id="burger"><div></div><div></div><div></div></div>';
	$( out ).appendTo( "body" );
	
	/* menu mobile */
	var menu = '<div id="mobile_menu"><div id="mobile_menu_close"><div class="mobile_menu_close" id="mobile_menu_close_1"></div><div class="mobile_menu_close" id="mobile_menu_close_2"></div></div></div>';
	$( menu ).appendTo( "body" );	
	$( ".site-banner .quicklinks .ql-list" ).clone().appendTo( "#mobile_menu" );
	$( ".site-banner .quicklinks .ql-list" ).clone().appendTo( "#mobile_menu" );
	$( ".site-footer .quicklinks .ql-list" ).clone().appendTo( "#mobile_menu" );
	
});
