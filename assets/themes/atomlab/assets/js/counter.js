jQuery( document ).ready( function( $ ) {
	'use strict';

	$( '.tm-counter' ).each( function() {
		var $numbers = $( this ).find( '.number' );

		var animation = $( this ).data( 'animation' ) ? $( this ).data( 'animation' ) : 'counterUp';

		if ( animation === 'odometer' ) {
			var _number = $numbers.html();
			var od      = new Odometer( {
				el   : $numbers[0],
				value: 0
			} );
			od.render();

			$( this ).waypoint( function() {
				od.update( _number );
			}, {
				offset     : '90%',
				triggerOnce: true
			} );
		} else {
			$numbers.counterUp( {
				delay: 10,
				time : 1000
			} );
		}
	} );
} );
