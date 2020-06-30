$(document).ready(function(){
    $("#diagnostics").click(function(){
        $("main").load("diagnostics.html");
    });

    $(".showCardContent").click(function(){
        $(this).addClass("mb-0");
        $(this).next(".cardContent").slideToggle();
    })
});