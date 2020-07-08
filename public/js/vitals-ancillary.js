$(document).ready(function(){
    $('.rating-number span').click(function(){
        $('.rating-number span').removeClass('selected');
        $(this).addClass('selected');
    });
});