$(document).ready(function(){
    $("main").load("/html/cards.html");
    $("#breadcrumbs").hide();

    $(document).on('click','.link-diagnostic',function(){
        $("main").load("/html/diagnostics.html");
        $("#breadcrumbs").show();
        if (!$(".diagnostics").length) {
            $(".survey").remove();
            $("#home").after("<li class='breadcrumb-item active diagnostics'>Diagnostics</li>"); 
        }
    });

    $(document).on('click','.link-survey',function(){
        $("main").load("/html/survey.html");
        $("#breadcrumbs").show();
        if (!$(".survey").length) {
            $(".diagnostics").remove();
            $("#home").after("<li class='breadcrumb-item active survey'>Survey</li>"); 
        }
    });

    $(document).on('click','.link-home',function(){
        $("#breadcrumbs").hide();
        $("main").load("/html/cards.html");
    });

    $(".showCardContent").click(function(){
        $(this).toggleClass("mb-0");
        $(this).next(".cardContent").slideToggle();
    })

});

