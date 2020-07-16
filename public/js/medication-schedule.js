window.location.href.indexOf("medication-schedule") > -1 ? $('#calendarCarousel').carousel({
    interval: false
}) : false;

$(document).ready(function () {

    $(document).on('click', '#calendarCarousel li', function () {
        $("#calendarCarousel li").removeClass("active");
        $(this).addClass("active");
        var selectedDate = $(this).data().date;
        selectedDate === undefined ? selectedDate = "first-june" : $(this).data().date;
      /*  $(".schAccordion").each(function () {
            selectedDate === $(this).data().subscription ? $(this).show() : $(this).hide();
        }) */
    });

    $(document).on('click', '.toggelSchMed input', function () {
        if ($(this).data().val === "medication") {
            $("#scheduleWrap").fadeOut("fast");
            $("#MedicationWrap").fadeIn("fast");
        }

        if ($(this).data().val === "schedule") {
            $("#MedicationWrap").fadeOut("fast");
            $("#scheduleWrap").fadeIn("fast");
        }
    });

});