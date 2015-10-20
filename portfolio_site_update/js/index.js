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