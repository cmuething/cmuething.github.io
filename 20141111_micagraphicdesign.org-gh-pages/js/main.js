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
  $('#utility-about').on('click', function (event) {
    event.preventDefault();

    $('html').toggleClass('js-about-active');
  });
});

$(function () {
  $('#utility-contact').on('click', function (event) {
    event.preventDefault();

    $('html').toggleClass('js-contact-active');
  });
});

$(function () {
  $('#utility-subscribe').on('click', function (event) {
    event.preventDefault();

    $('html').toggleClass('js-subscribe-active');
  });
});

$(function () {
  $('#utility-archives').on('click', function (event) {
    event.preventDefault();

    $('html').toggleClass('js-archives-active');
  });
});

$(function () {
  $('#utility-login').on('click', function (event) {
    event.preventDefault();

    $('html').toggleClass('js-login-active');
  });
});

$(function () {
  $('#utility-search').on('click', function (event) {
    event.preventDefault();

    $('html').toggleClass('js-search-active');
  });
});