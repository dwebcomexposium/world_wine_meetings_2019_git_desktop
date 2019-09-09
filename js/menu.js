
$(function() {
	/* Burger Menu */
	var out = '<div id="burger"><div></div><div></div><div></div></div>';
	$( out ).appendTo( "body" );
	
	/* menu mobile */
	var menu = '<div id="mobile_menu"></div>'
	$( menu ).appendTo( "body" );	
	$( ".site-banner .quicklinks .ql-list" ).clone().appendTo( "#mobile_menu" );
	$( ".site-banner .quicklinks .ql-list" ).clone().appendTo( "#mobile_menu" );
	$( ".site-footer .quicklinks .ql-list" ).clone().appendTo( "#mobile_menu" );
	
});
