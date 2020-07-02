$(document).ready(function(){
    $("main").load("/html/cards.html");
    $("#breadcrumbs").hide();
    populateUserName();

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

    $(document).on('click','.medication-schedule, #toggelSchMed .schedule',function(){
        $("main").load("/html/medication-schedule.html");
        $("#breadcrumbs").show();
        $(".link-bc-secondary").show();
        $(".link-bc-secondary").html('<a href="javascript:void(0)" class="link-medication">Medication</a>');
        $(".link-bc-secondary").removeClass("active");
        $(".link-bc-last").show();
        $(".link-bc-last").text("Schedule");
        $(".link-bc-last").addClass("active");
    });

    $(document).on('click','.diagnostics-view',function(){
        $("main").load("/html/diagnostics.html");
        $("#breadcrumbs").show();
        $(".link-bc-secondary").show();
        $(".link-bc-secondary").html('<a href="javascript:void(0)" class="link-diagnostic">Diagnostics</a>');
        $(".link-bc-secondary").removeClass("active");
        $(".link-bc-last").show();
        $(".link-bc-last").text("View");
        $(".link-bc-last").addClass("active");
    });

    $(document).on('click','#toggelSchMed .medication',function(){
        $("main").load("/html/my-medications.html");
        $("#breadcrumbs").show();
        $(".link-bc-secondary").show();
        $(".link-bc-secondary").html('<a href="javascript:void(0)" class="link-diagnostic">Medication</a>');
        $(".link-bc-secondary").removeClass("active");
        $(".link-bc-last").show();
        $(".link-bc-last").text("My Medications");
        $(".link-bc-last").addClass("active");
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

function populateUserName() {
    var email = getCookieValue("user");
    var username = email.split("@")[0];
    var firstname = username.split(".")[0];
    var lastname = username.split(".")[1];
    var fullname = "John Doe";
    if (firstname !== undefined && firstname !== "") {
        fullname = firstname;
        if (lastname !== undefined && lastname !== "") {
            fullname = fullname + " " + lastname;
        }
    }
    $(".user-name").text(fullname);
    if(email !== undefined && email !== "" && email.includes("@")) {
        $(".user-email").text(email);
    } else {
        $(".user-email").text("john.doe@example.com");
    }
}

function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}