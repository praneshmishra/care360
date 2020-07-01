$(document).ready(function(){
    $("main").load("/html/cards.html");
    $("#breadcrumbs").hide();

    $(document).on('click','.link-diagnostic',function(){
        $("main").load("/html/diagnostics.html");
        $("#breadcrumbs").show();
        $(".link-bc-last").hide();
        $(".link-bc-secondary").show();
        $(".link-bc-secondary").text("Diagnostics");
        $(".link-bc-secondary").addClass("active");
    });

    $(document).on('click','.link-survey',function(){
        $("main").load("/html/survey.html");
        $("#breadcrumbs").show();
        $(".link-bc-last").hide();
        $(".link-bc-secondary").show();
        $(".link-bc-secondary").text("Survey");
        $(".link-bc-secondary").addClass("active");
    });

    $(document).on('click','.medication-schedule',function(){
        $("main").load("/html/medication-schedule.html");
        $("#breadcrumbs").show();
        $(".link-bc-secondary").show();
        $(".link-bc-secondary").html('<a href="javascript:void(0)" class="link-medication">Medication</a>');
        $(".link-bc-secondary").removeClass("active");
        $(".link-bc-last").show();
        $(".link-bc-last").text("Schedule");
        $(".link-bc-last").addClass("active");
    });

    $(document).on('click','.link-bc-home',function(){
        $("#breadcrumbs").hide();
        $("main").load("/html/cards.html");
    });

    $(".showCardContent").click(function(){
        $(this).toggleClass("mb-0");
        $(this).next(".cardContent").slideToggle();
    })

});

