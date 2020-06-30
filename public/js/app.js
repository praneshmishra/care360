$(document).ready(function(){
    $("main").load("/html/cards.html");
    $("#diagnostics").click(function(){
        $("main").load("/html/diagnostics.html");
    });
});