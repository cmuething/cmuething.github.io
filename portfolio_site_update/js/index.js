$('#limit-l').click(function () {
    $('.image').each(function () {
        if ($(this).offset().left < 0) {
            $(this).css("left", "150%");
        } else if ($(this).offset().left > $('#move').width()) {
            $(this).animate({
                left: '0'
            }, 500);
        } else {
            $(this).animate({
                left: '-150%'
            }, 500);
        }
    });
});

$('#limit-r').click(function () {
    $('.image').each(function () {
        if ($(this).offset().left < 0) {
            $(this).animate({
                left: '0'
            }, 500);
        } else if ($(this).offset().left > $('#move').width()) {
            $(this).css("left", "-150%");
        } else {
            $(this).animate({
                left: '150%'
            }, 500);
        }
    });
});

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
		    	top: -overviewTopHeight
	    	}, 250);	
    	}
    });
});

//PROJECT DETAILS

$(document).ready(function () {
    $('.project-details-toggle').on('click', function(event){
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