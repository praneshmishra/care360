var medicationData;

$.getJSON("json/medication.json", function (data) {
    medicationData = data;
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
    $.ajax({
        type: 'POST',
        data: JSON.stringify(newData),
        contentType: 'application/json',
        url: '/add-tasks',
        success: function (data) {
            console.log('success');
            console.log(JSON.stringify(newData));
        }
    });
    $("#medicationName option[value='default']").attr("selected",true);
    $("#medicationDose option[value='default']").attr("selected",true);
    $("#medicationFrequency option[value='default']").attr("selected",true);
    $("#medicationTime").val("");
    $("#medicationStartDate").val("");
    $("#medicationEndDate").val("");

    $("#myMedicationAdd").addClass("collapsed");
    $("#collapseTwoamo").removeClass("show");

});