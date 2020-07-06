$(document).on('click','#toggleView input', function() {
    
    if($(this).data().val === "grid") {      
        $("#toggleView .btn-group label.v-grid").addClass("active");
        $("#toggleView .btn-group label.v-graph").removeClass("active");
        $("#toggleView .btn-group label.v-grid input").attr("checked");
        $("#toggleView .btn-group label.v-graph input").removeAttr("checked");
        $("#graphContent").fadeOut("fast");
        $("#gridContent").fadeIn("fast");
    }

    if($(this).data().val === "graph") {
        $("#toggleView .btn-group label.v-graph input").attr("checked");
        $("#toggleView .btn-group label.v-grid input").removeAttr("checked");
        $("#gridContent").fadeOut("fast");
        $("#graphContent").fadeIn("fast");
        $("#toggleView .btn-group label.v-graph").addClass("active");
        $("#toggleView .btn-group label.v-grid").removeClass("active");
    }
});

//$("#datepicker").datepicker();