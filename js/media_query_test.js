$(document).ready(function () {
    var ww = $(window).width();

    $(window).ready(function() {
        
     if (ww > 795) {
         
    $('.connor-info-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
        var connorTitle = $('.connor-info-toggle');
    	var connorInfo = $('.connor-info');
    	var connorInfoWidth = $('.connor-info').width();
        var gradientMove = $('.test'); 
        var myName = $('#connor');
    	    	
	    	connorInfo.animate({
		    	left: "0px"
	    	});	
            
            myName.addClass('keep-name');
    });
    
    $('.test').on('click', function(event){
        event.preventDefault();

    	var connorInfo = $('.connor-info');
        var gradientMove = $('.test');
    	var connorInfoWidth = $('.connor-info').width();
        var myName = $('#connor');
        
	    	connorInfo.animate({
		    	left: "-800px"
	    	}, 250);
        
            gradientMove.removeClass('gradient');
        
            myName.removeClass('keep-name');
        });
     }
        
    else {
        
    $('.connor-info-toggle').on('click', function(event){
        var connorTitle = $('.connor-info-toggle');
    	var connorInfo = $('.connor-info');
        
        connorInfo.toggleClass('skinny-view');
        
    });
    }    
    });
    
    $(window).resize(function() {
        
     if (ww > 795) {
         
       $('.connor-info-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
        var connorTitle = $('.connor-info-toggle');
    	var connorInfo = $('.connor-info');
    	var connorInfoWidth = $('.connor-info').width();
        var gradientMove = $('.test'); 
        var myName = $('#connor');
    	    	
	    	connorInfo.animate({
		    	left: "0px"
	    	});	
            
            myName.addClass('keep-name');
    });
    
    $('.test').on('click', function(event){
        event.preventDefault();

    	var connorInfo = $('.connor-info');
        var gradientMove = $('.test');
    	var connorInfoWidth = $('.connor-info').width();
        var myName = $('#connor');
        
	    	connorInfo.animate({
		    	left: "-800px"
	    	}, 250);
        
            gradientMove.removeClass('gradient');
        
            myName.removeClass('keep-name');
        });
         
     } 
        
    else {
         
     $('.connor-info-toggle').on('click', function(event){
        var connorTitle = $('.connor-info-toggle');
    	var connorInfo = $('.connor-info');
        
        connorInfo.toggleClass('skinny-view');
        
     });
     }
    });
});