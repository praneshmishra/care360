var medicationData, currentDateTime;

$(document).ready(function () {
    getMedicationList();
    let date = new Date();
    let options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
    currentDateTime = date.toLocaleDateString("en-us", options);
    $(".showCardContent  .card-text .date-info").text("Due on " + currentDateTime);
});

function getMedicationList() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'json/medication.json',
        success: function (data) {
            medicationData = data;
            getMedicationByTime(currentDateTime);
        }
    });
}

function getMedicationByTime(calendarInput) {
    console.log("alert");
    var i = 1;
    var groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    var groupedByTime = groupBy(medicationData.medication, 'suggestedTime');
    var mediSchedule = '', mediList = '', timeArray = [];
  //  var currentTime = calendarInput.split(",");
   // currentTime = currentTime[2];

    for (var key in groupedByTime) {
        if (groupedByTime.hasOwnProperty(key) && key !== "") {
            timeArray.push(key);
            $.each(groupedByTime[key], function (key, value) {
                var medStartDate = value.startDate;
                var medEndDate = value.endDate;
                medStartDate = new Date(medStartDate);
                medEndDate = new Date(medEndDate);
                calendarDate = new Date();
                if (calendarDate.getTime() <= medEndDate.getTime()
                    && calendarDate.getTime() >= medStartDate.getTime()) {
                    if (value.suggestedTime)
                        var mediNotes = value.notes !== "" ? ", " + value.notes : value.notes;
                    mediList = mediList + '<div class="card-body"><div class="row"><div class="col-1 col-sm-2 icon"><span>&#9737;</span></div>' +
                        '<div class="col-7 col-sm-6 info"><h6>' + value.name + ' ' + value.dose + '</h6>' +
                        '<p>' + value.frequency + mediNotes + '</p></div>' +
                        '<div class="col-4 col-sm-4 action"><div class="align-center">' +
                        '<span class="notify"></span><span class="alert-me"></span></div></div></div></div>';
                }
            });
            if (mediList !== "") {
                mediSchedule = '<div class="card-body med-alert-info"><div class="row">' +
                    '<div class="col-2 col-sm-2 alert"><div class="blue-alert bg-primary">' +
                    '<span><img src="../images/schedule/snooze-white.svg" width="15" alt="medication"/>4</span>' +
                    '</div></div><div class="col-6 col-sm-6 info"><p>Your ' + key + ' medications are due.</p></div>' +
                    '<div class="col-4 col-sm-4 action"><div class="align-center"><span class="notifyAll"><br><p>ALL</p></span>' +
                    '<span class="checkAll"><br><p>ALL</p></span></div></div></div></div>' + mediList;
            }
            $(".cardContent").html(mediSchedule);
        }
    }

    const currentTime = new Date(); 
    const timeDiff = [];
    timeArray.sort((a, b) => {
        return a.indexOf('PM');
    })
    timeArray.filter(time => {
        const _meridianPosition = timeArray.indexOf('am') > -1 ? 'AM' : 'PM';
        let _time = parseInt(time);
        if (_meridianPosition === 'PM' && _time !== 12) {
            _time += 12;
        } else if (_meridianPosition === 'AM' && _time === 12) {
            _time = 0;
        }
        const k = Math.abs(currentTime.getHours() - _time);
        timeDiff.push({ hour: time, diff: k });
    });

    timeDiff.sort((a, b) => {
         console.log(a.diff - b.diff);
    });

}