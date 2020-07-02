$(document).ready(function() {
    $(".login_btn").click(function() {
        document.cookie = "user=" + $(".user-email").val();
    });
});