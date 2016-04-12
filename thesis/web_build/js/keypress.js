//arrow keys pressed
$(document).keydown(function(e){
    if (e.keyCode == 37) {  //left arrow
        goLeft = true
        goRight = false
        console.log( "LEFT" );
    }
    if (e.keyCode == 39) { //right arrow
        goRight = true
        goLeft = false
    }
    if (e.keyCode == 38) {  //up arrow
        goDown = true
        goUp = false
    }
    if (e.keyCode == 40) { //down arrow
        goUp = true
        goDown = false
    }
});

$(document).keyup(function(){
    goLeft = false
    goRight = false
    goUp = false
    goDown = false
});        
            