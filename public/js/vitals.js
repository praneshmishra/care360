$(document).ready(function () {
    $('.rating-number span').click(function () {
        $('.rating-number span').removeClass('selected');
        $(this).addClass('selected');
    });

    // vitals form page
    $('.vitals-form .btn-clear').on('click', function () {
        $('.vitals-form .form-group input.form-control').val('');
    });

    // vitals ancillary parameters form
    $('.parameters-card-body .btn-clear').on('click', function () {
        $('.parameters-form .form-group input.form-control').val('');
    });

    // vitals ancillary symptoms form
    $('.symptoms-card-body .btn-clear').on('click', function () {
        $('.symptoms-form-check input:checked').prop('checked', false);
        $('.symptoms-form .form-group .form-control').val('');
        $('.pain-scale-bar .rating-number span').removeClass('selected');
    });

    if ($("form.vitals-form").is(':visible')) {
        formData.getVitals();
    }

    if ($("form.parameters-form").is(':visible')) {
        formData.getParameters();
    }

    $('#ancillaryAccordion .btn-link').click(function () {
        setTimeout(() => {
            if ($("form.symptoms-form").is(':visible')) {
                formData.getSymptoms();
            }
        }, 100);
    });

    $("form.vitals-form .btn-save").click(function () {
        formData.setVitals();
    });

    $("form.parameters-form .btn-save").click(function () {
        formData.setParameters();
    });

    $("form.symptoms-form .btn-save").click(function () {
        formData.setSymptoms();
    });

    $("form.vitals-form .btn-clear").click(function () {
        sessionStorage.removeItem('vitalsForm');
    });

    $("form.parameters-form .btn-clear").click(function () {
        sessionStorage.removeItem('parametersForm');
    });

    $("form.symptoms-form .btn-clear").click(function () {
        sessionStorage.removeItem('symptomsForm');
    });

    $('a.logout').click(function () {
        sessionStorage.removeItem('vitalsForm');
        sessionStorage.removeItem('parametersForm');
        sessionStorage.removeItem('symptomsForm');
    });
});

var formData = {
    setVitals: function () {
        var vitalsForm = [];
        // Delete old data from sessionStorage
        sessionStorage.removeItem('vitalsForm');
        $('form.vitals-form input[type=text]').each(function () {
            vitalsForm.push({ name: this.name, value: this.value });
        });
        // Add the array to sessionStorage
        sessionStorage.vitalsForm = JSON.stringify(vitalsForm);
    },

    setParameters: function () {
        var parametersForm = [];
        sessionStorage.removeItem('parametersForm');
        $('form.parameters-form input[type=text]').each(function () {
            parametersForm.push({ name: this.name, value: this.value });
        });
        sessionStorage.parametersForm = JSON.stringify(parametersForm);
    },

    setSymptoms: function () {
        var symptomsForm = [];
        var selectedRatingID = $('.wrapper .rating-number span.selected').attr('id'),
            selectedRatingVal = $('.wrapper .rating-number span.selected').text();
        // Delete old data from sessionStorage
        sessionStorage.removeItem('symptomsForm');
        $('form.symptoms-form input[type=text]').each(function () {
            symptomsForm.push({ name: this.name, value: this.value });
        });
        $('.symptoms-form-check input[type=checkbox]:checked').each(function () {
            symptomsForm.push({ name: this.name, value: this.checked });
        });
        $('form.symptoms-form textarea').each(function () {
            symptomsForm.push({ name: this.name, value: this.value });
        });
        symptomsForm.push({ name: selectedRatingID, value: selectedRatingVal });
        // Add the array to sessionStorage
        sessionStorage.symptomsForm = JSON.stringify(symptomsForm);
    },

    getVitals: function () {
        // Is the form already stored within sessionStorage? If so, get it and copy it's contents over our vitalsForm array variable.
        if (sessionStorage.vitalsForm != undefined) {
            // Get the existing values out of sessionStorage
            vitalsForm = JSON.parse(sessionStorage.vitalsForm);
            // Loop through vitalsForm
            for (var i = 0; i < vitalsForm.length; i++) {
                // Populate the form with what data you have for it
                $('[name=' + vitalsForm[i].name + ']').val(vitalsForm[i].value);
            }
        }
    },

    getParameters: function () {
        if (sessionStorage.parametersForm != undefined) {
            // Get the existing values out of sessionStorage
            parametersForm = JSON.parse(sessionStorage.parametersForm);
            for (var i = 0; i < parametersForm.length; i++) {
                // Populate the form with what data you have for it
                $('[name=' + parametersForm[i].name + ']').val(parametersForm[i].value);
            }
        }
    },

    getSymptoms: function () {
        // Is the form already stored within sessionStorage? If so, get it and copy it's contents over our vitalsForm array variable.
        if (sessionStorage.symptomsForm != undefined) {
            // Get the existing values out of sessionStorage
            symptomsForm = JSON.parse(sessionStorage.symptomsForm);
            for (var i = 0; i < symptomsForm.length; i++) {
                // Populate the form with what data you have for it
                $('[name=' + symptomsForm[i].name + ']').val(symptomsForm[i].value);
                $('[name=' + symptomsForm[i].name + ']').prop('checked', true);
                $('.wrapper .rating-number span').each(function () {
                    if ($(this).attr('id') === symptomsForm[i].name) {
                        $(this).addClass('selected');
                    }
                })
            }
        }
    },
}