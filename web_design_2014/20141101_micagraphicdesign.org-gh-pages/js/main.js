/*
var menuTop = document.getElementById( 'cbp-spmenu-s3' ),
 	showTop = document.getElementById( 'showTop' ),

showTop.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuTop, 'cbp-spmenu-open' );
				disableOther( 'showTop' );
			};

function disableOther( link ) {
			
if( link !== 'showTop' ) {
					classie.toggle( showTop, 'disabled' );
				}
*/

$(function () {
  $('#showTop').on('click', function (event) {
    event.preventDefault();

    $('html').toggleClass('js-about-active');
  });
});