$(document).ready(function() {
    $('.view-vitals #gridTableVitals').DataTable({
        "paging":   false,
        "info":     false,
        "searching": false
    });
    $('.view-vitals #graphTableVitals').DataTable({
        "paging":   false,
        "info":     false,
        "searching": false
    });
});

$(document).on('click','#toggleView input', function() {    
    if($(this).data().val === "grid") {      
        $("#toggleView .btn-group label.v-grid").addClass("active");
        $("#toggleView .btn-group label.v-graph").removeClass("active");
        $("#toggleView .btn-group label.v-grid input").attr("checked");
        $("#toggleView .btn-group label.v-graph input").removeAttr("checked");
        $("#graphContent").hide();
        $("#gridContent").show();
    }

    if($(this).data().val === "graph") {
        $("#toggleView .btn-group label.v-graph input").attr("checked");
        $("#toggleView .btn-group label.v-grid input").removeAttr("checked");
        $("#gridContent").hide();
        $("#graphContent").show();
        $("#toggleView .btn-group label.v-graph").addClass("active");
        $("#toggleView .btn-group label.v-grid").removeClass("active");
    }
});