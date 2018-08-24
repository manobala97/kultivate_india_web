jQuery( function ( $ ) {
    'use strict';

    $( '.tm-pricing-group' ).each( function () {
        $( this ).find( '.tm-pricing-content' ).matchHeight();
    } );
} );
