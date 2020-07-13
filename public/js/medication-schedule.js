window.location.href.indexOf("medication-schedule") > -1 ? $('#calendarCarousel').carousel({
    interval: false
}) : false;

var medicationData;

$(document).ready(function () {
    
    showMedicationList();

    $(document).on('click', '.notify', function () {
        $(this).toggleClass("active");
    });

    $(document).on('click', '.alert-me', function () {
        $(this).toggleClass("active");
    });

    $(document).on('click', '.notifyAll', function () {
        $(this).toggleClass("active");
        var that = $(this);
        $(this).parents(".collapse, .cardContent").find(".notify").each(function () {
            selectAll($(this), that);
        });
    });

    $(document).on('click', '.checkAll', function () {
        $(this).toggleClass("active");
        var that = $(this);
        $(this).parents(".collapse, .cardContent").find(".alert-me").each(function () {
            selectAll($(this), that);
        });
    });

    function selectAll(self, that) {
        if (!self.hasClass("active")) {
            self.addClass("active");
        }

        if (!that.hasClass("active")) {
            self.removeClass("active");
        }
    }

    $(document).on('click', '#calendarCarousel li', function () {
        $("#calendarCarousel li").removeClass("active");
        $(this).addClass("active");
        var selectedDate = $(this).data().date;
        selectedDate === undefined ? selectedDate = "first-june" : $(this).data().date;
        $(".schAccordion").each(function () {
            selectedDate === $(this).data().subscription ? $(this).show() : $(this).hide();
        })
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

    $(document).on('click', '#medicationList', function () {
        showMedicationList();
    });

    function showMedicationList() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'json/medication.json',
            success: function (data) {
                var medicationlist = "";
                medicationData = data;
                $.each(data.medication, function (key, value) {
                    medicationlist = medicationlist + '<div class="card-body"><div class="row"><div class="col-1 col-sm-2 icon"><span>&#9737;</span></div>' +
                        '<div class="col-7 col-sm-6 info"><h6>' + value.name + ' ' + value.dose + '</h6>' +
                        '<p>' + value.frequency + ', ' + value.suggestedTime + '</p></div>' +
                        '<div class="col-4 col-sm-4 action"><div class="align-center">' +
                        '<span class="delete"></span><span class="edit"></span></div></div></div></div>';
                });
                $('#collapseOneamo').html(medicationlist);
            }
        });
    }

});