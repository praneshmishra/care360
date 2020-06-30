$(document).ready(function(){
    $("main").load("/html/cards.html");
    $("#breadcrumbs").hide();

    $(document).on('click','#diagnostics',function(){
        $("main").load("/html/diagnostics.html");
        $("#breadcrumbs").show();
        $("#home").after("<li class='breadcrumb-item active'>Diagnostics</li>");      
    });

    $(document).on('click','#home',function(){
        $("#breadcrumbs").hide();
        $("main").load("/html/cards.html");
        $("#breadcrumbs").hide();
    });

});

