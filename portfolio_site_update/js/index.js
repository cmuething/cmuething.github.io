//$('#limit-l').click(function () {
//    $('.image').each(function () {
//        if ($(this).offset().left < 0) {
//            $(this).css("left", "150%");
//        } else if ($(this).offset().left > $('#move').width()) {
//            $(this).animate({
//                left: '0'
//            }, 500);
//        } else {
//            $(this).animate({
//                left: '-150%'
//            }, 500);
//        }
//    });
//});
//
//$('#limit-r').click(function () {
//    $('.image').each(function () {
//        if ($(this).offset().left < 0) {
//            $(this).animate({
//                left: '0'
//            }, 500);
//        } else if ($(this).offset().left > $('#move').width()) {
//            $(this).css("left", "-150%");
//        } else {
//            $(this).animate({
//                left: '150%'
//            }, 500);
//        }
//    });
//});


			$("#limit-l").click(function() {
				console.log("Left");
				var obj = $(".curr");
				$(obj).animate({
					left: '-50%'
				}, 500, function() {
					$(this).css('left', '+150%');
    				$(this).appendTo('#container');
				});
				$(obj).next().animate({
					left: '+50%'
				}, 500, function() {
					$(this).addClass('curr');
					$(obj).removeClass('curr');
				});
			});

			$("#limit-r").click(function() {
				console.log("Right");
				var obj = $(".curr");
				var prox = $(obj).siblings(":last");
				$(obj).animate({
					left: '+150%'
				}, 500, function() {
					$(prox).prependTo('#container');
				});
				$(prox).css('left', '-50%');
				$(prox).animate({
					left: '+50%'
				}, 500, function() {
					$(this).addClass('curr');
					$(obj).removeClass('curr');
				});
			});

//Am I going to have to use this to enable swipe left swipe right on mobile

//			var hammertime = new Hammer( document.getElementById("container") );
//			hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
//			hammertime.on('swipeleft', function() {
//				$("#esq").trigger("click");
//			});
//			hammertime.on('swiperight', function() {
//				$("#dir").trigger("click");
//			});
//		});

//click on a thumbnail to add the class curr to the project box with the corresponding href

//INFO

$(document).ready(function () {
    $('.connor-info-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var connorInfo = $('.connor-info');
    	var connorInfoWidth = $('.connor-info').width();
    	
    	// toggle open class
    	connorInfo.toggleClass("open");
    	
    	// slide menu
    	if (connorInfo.hasClass("open")) {
	    	connorInfo.animate({
		    	left: "0px"
	    	});	
    	} else {
	    	connorInfo.animate({
		    	left: -connorInfoWidth
	    	}, 250);	
    	}
    });
});

//OVERVIEW

$(document).ready(function () {
    $('.overview-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var overviewTop = $('.overview');
    	var overviewTopHeight = $('.overview').height();
    	
    	// toggle open class
    	overviewTop.toggleClass("open");
    	
    	// slide menu
    	if (overviewTop.hasClass("open")) {
	    	overviewTop.animate({
		    	top: "0px"
	    	});	
    	} else {
	    	overviewTop.animate({
		    	top: "-600px"
	    	}, 250);	
    	}
    });
});

//PROJECT DETAILS

$(document).ready(function () {
    $('.project-label').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var projectBottom = $('.project-details');
    	var projectBottomHeight = $('.project-details').height();
    	
    	// toggle open class
    	projectBottom.toggleClass("open");
    	
    	// slide menu
    	if (projectBottom.hasClass("open")) {
	    	projectBottom.animate({
		    	bottom: "0px"
	    	});	
    	} else {
	    	projectBottom.animate({
		    	bottom: -projectBottomHeight
	    	}, 250);	
    	}
        
    });
});

//$('#menu').bind('clickoutside', function (event) {
//    var projectBottom = $('.project-details');
//    
//    projectBottom.animate({
//        bottom: "-300px"
//    });
//    
//});

//$(function () {
//    //stop bubbling the event
//    $('.open').click(function (e) {
//        e.stopPropagation();
//    });
//    //catch the event and check if element clicked is not the toggle label
//    $('html').click(function (e) {
//        if (!$('.gradient').is($(e.target))) {
//            $('.open').prop("checked", false);
//        }
//    });
//});



//GRADIENT

var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);

//BUTTONS

$(document).ready(function(){
    var gradientButton = $('.overview-toggle, .project-label, .connor-info-toggle');
    var gradientMove = $('.test');
    
    gradientButton.click(function() {       
        gradientMove.toggleClass('gradient');
                
    });
});

//LOADING SCREEN 

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('whole-page', true);
    show('loading', false);
});

//CLOSE OVERVIEW TEST

//$(document).ready(function(){
//    var open = $('fa-the-large');
//    var button = $('fa');
//    
//    open.click(function() {
//        button.toggleClass('fa-times');
//    });
//});
   
    