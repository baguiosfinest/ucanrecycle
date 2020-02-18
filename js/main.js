$(document).ready(function(){
    $('.title').hover(function() {
        var state = $(this).data("state");
        $('.' + state).addClass('hover');
        $('.bg-' + state).addClass('hover');
    }, function() {
        var state = $(this).data("state");
        $('.' + state).removeClass('hover');
        $('.bg-' + state).removeClass('hover');
    });

    $('.state').hover(function() {
        var state = $(this).data("state");
        $('.title-' + state).addClass('hover');
        $('.bg-' + state).addClass('hover');
    }, function() {
        var state = $(this).data("state");
        $('.title-' + state).removeClass('hover');
        $('.bg-' + state).removeClass('hover');
    });
});