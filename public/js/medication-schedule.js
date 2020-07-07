window.location.href.indexOf("medication-schedule") > -1 ? $('#calendarCarousel').carousel({
    interval: false
}) : false;

$( document ).ready(function() {

    $(document).on('click','.notify',function(){
        $(this).toggleClass("active");
    });

    $(document).on('click','.alert-me',function(){
        $(this).toggleClass("active");
    });

    $(document).on('click','.notifyAll',function(){
        $(this).toggleClass("active");
        var that = $(this);
        $(this).parents(".collapse, .cardContent").find(".notify").each(function() {
            selectAll($(this), that);
        });
    });

    $(document).on('click','.checkAll',function(){
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

    $(document).on('click','#calendarCarousel li',function(){
        $("#calendarCarousel li").removeClass("active");
        $(this).addClass("active");
        var selectedDate = $(this).data().date;
        selectedDate === undefined ? selectedDate = "first-june" : $(this).data().date;
        $(".schAccordion").each(function() {
            selectedDate ===  $(this).data().subscription ? $(this).show() : $(this).hide();
        })
    });

    $(document).on('click','.showCardContent',function(){
        $(this).toggleClass("mb-0");
        $(this).next(".cardContent").slideToggle();
    });

    $(document).on('click','.toggelSchMed input',function(){
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