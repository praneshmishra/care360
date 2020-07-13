var medicationData;

$(document).ready(function () {
    showMedicationList();
});

$(document).on('click', '#medicationList', function () {
    showMedicationList();
});

$(document).on('click', '#addMedication', function () {
    var newData = medicationData;
    var toDo = {
        "name": $("#medicationName option:selected").val(),
        "dose": $("#medicationDose option:selected").val(),
        "frequency": $("#medicationFrequency option:selected").val(),
        "suggestedTime": $("#medicationTime").val(),
        "startDate": $("#medicationStartDate").val(),
        "endDate": $("#medicationEndDate").val(),
        "shape": "",
        "color": "",
        "notes": $("medicationNotes").val()
    };
    newData.medication.push(toDo);
    updateJson(newData);
    $("#medicationName option[value='default']").attr("selected", true);
    $("#medicationDose option[value='default']").attr("selected", true);
    $("#medicationFrequency option[value='default']").attr("selected", true);
    $("#medicationTime").val("");
    $("#medicationStartDate").val("");
    $("#medicationEndDate").val("");

    $("#myMedicationAdd").addClass("collapsed");
    $("#collapseTwoamo").removeClass("show");

});

$(document).on('click', '.medication-delete', function () {
    var currentMedication = $(this).parents(".card-body").data("medication");
    var medicationArray = medicationData;
    //var removeMedicationArray = medicationArray.medication;
    //  removeMedicationArray.medication.removeValue('name', currentMedication);
    jQuery.each(medicationArray.medication, function (i, val) {
        if (val.name === currentMedication) // delete index
        {
            medicationArray.medication.splice(i, 1);
            return false;
        }
    });
    updateJson(medicationArray);
    showMedicationList();
});

function updateJson(updatedData) {
    $.ajax({
        type: 'POST',
        data: JSON.stringify(updatedData),
        contentType: 'application/json',
        url: '/add-tasks',
        success: function (data) {
            console.log('success');
            console.log(JSON.stringify(newData));
        }
    });
}

function showMedicationList() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'json/medication.json',
        success: function (data) {
            var medicationlist = "";
            medicationData = data;
            $.each(data.medication, function (key, value) {
                medicationlist = medicationlist + '<div class="card-body" data-medication="' + value.name + '"><div class="row"><div class="col-1 col-sm-2 icon"><span>&#9737;</span></div>' +
                    '<div class="col-7 col-sm-6 info"><h6>' + value.name + ' ' + value.dose + '</h6>' +
                    '<p>' + value.frequency + ', ' + value.suggestedTime + '</p></div>' +
                    '<div class="col-4 col-sm-4 action"><div class="align-center">' +
                    '<span class="medication-delete"></span><span class="edit"></span></div></div></div></div>';
            });
            $('#collapseOneamo').html(medicationlist);
        }
    });
}