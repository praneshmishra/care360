window.location.href.indexOf("medication-schedule") > -1 ? $('#calendarCarousel').carousel({
    interval: false
}) : false;

$( document ).ready(function() {

    $(".notify").click(function() {
        $(this).toggleClass("active");
    });

    $(".alert-me").click(function() {
        $(this).toggleClass("active");
    });

    $(".notifyAll").click(function() {
        $(this).toggleClass("active");
        var that = $(this);
        $(this).parents(".collapse, .cardContent").find(".notify").each(function() {
            selectAll($(this), that);
        });
    });

    $(".checkAll").click(function() {
        $(this).toggleClass("active");
        var that = $(this);
        $(this).parents(".collapse, .cardContent").find(".alert-me").each(function() {
            selectAll($(this), that);
        });
    });

    function selectAll(self, that) {
        if(!self.hasClass("active")) {
            self.addClass("active");
        }

        if(!that.hasClass("active")) {
            self.removeClass("active");
        }
    }

    $("#calendarCarousel li").click(function() {
        $("#calendarCarousel li").removeClass("active");
        $(this).addClass("active");
        var selectedDate = $(this).data().date;
        $(".schAccordion").each(function() {
            selectedDate ===  $(this).data().subscription ? $(this).show() : $(this).hide();
        })
    });

    $(".showCardContent").click(function() {
        $(this).toggleClass("mb-0");
        $(this).next(".cardContent").slideToggle();
    });

    $("#toggelSchMed input").click(function() {
        if($(this).data().val === "medication") {
            $("#scheduleWrap").fadeOut("fast");
            $("#MedicationWrap").fadeIn("fast");
        }

        if($(this).data().val === "schedule") {
            $("#MedicationWrap").fadeOut("fast");
            $("#scheduleWrap").fadeIn("fast");
        }
    });

});