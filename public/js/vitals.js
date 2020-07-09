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
});