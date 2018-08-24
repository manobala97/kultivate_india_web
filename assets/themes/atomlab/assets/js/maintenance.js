jQuery( document ).ready( function( $ ) {
	'use strict';

	maintenance_full_height();
	maintenance_coundown();

	function maintenance_coundown() {
		var $countDown = $( '#countdown' );

		if ( $countDown.length > 0 ) {
			var datetime = $countDown.data( 'datetime' );
			$countDown.countdown( datetime, function( event ) {
				jQuery( this )
					.html( event.strftime( '<div class="countdown-wrap"><div class="day"><span class="number">%D</span><span class="text">Days</span></div><div class="hour"><span class="number">%H</span><span class="text">Hours</span></div><div class="minute"><span class="number">%M</span><span class="text">Minutes</span></div><div class="second"><span class="number">%S</span><span class="text">Seconds</span></div></div>' ) );
			} );
		}
	}

	function maintenance_full_height() {
		var page = $( '#maintenance-wrap' );
		var height = $( window ).height();
		var adminBar = $( '#wpadminbar' );
		if ( adminBar ) {
			height -= adminBar.outerHeight();
		}

		var $_header = $( '#page-header' );

		height -= $_header.outerHeight();

		page.css( {
			'min-height': height
		} );

		$( window ).resize( function() {
			height = $( window ).height();
			if ( adminBar ) {
				height -= adminBar.outerHeight();
			}
			page.css( {
				'min-height': height
			} );
		} );
	}
} );
