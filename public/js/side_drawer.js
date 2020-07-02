$(document).ready(function () {
    $('button.navbar-toggler').on('click', function () {
        openSideDrawer();
    });
    $('#links a, #other-links a, #side-drawer-void, button.medication-btn, button.diagnostic-btn').on('click', function () {
        closeSideDrawer($(this), event);
    });
    $('.side-nav-links > a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    toggleDiagnostic();
    toggleMedication();
});

function openSideDrawer() {
    document.getElementById("side-drawer").style.left = "0";
    document.getElementById("side-drawer-void").classList.add("d-block");
    document.getElementById("side-drawer-void").classList.remove("d-none");
}

function closeSideDrawer(thisObj, e) {
    if (thisObj.attr('class').indexOf('dropdown-btn') !== -1) {
        e.stopPropagation();
    } else {
        document.getElementById("side-drawer").style.left = "-336px";
        document.getElementById("side-drawer-void").classList.add("d-none");
        document.getElementById("side-drawer-void").classList.remove("d-block");
    }
}

function toggleMedication() {
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    var dropdown = document.getElementsByClassName("medication-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            $('.list-group-item, .dropdown-btn').removeClass('active');
            this.classList.toggle("active");
            $('div#medication-links').toggleClass('active');
            $('button.medication-btn').addClass('active');
            var dropdownContent = $('#medication-links a');
            if ($(dropdownContent).is(':visible') === false) {
                $(dropdownContent).show();
            } else {
                $(dropdownContent).hide();
            }
        });
    }
}

function toggleDiagnostic() {
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    var dropdown = document.getElementsByClassName("diagnostic-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            $('.list-group-item, .dropdown-btn').removeClass('active');
            this.classList.toggle("active");
            $('div#diagnostic-links').toggleClass('active');
            $('button.diagnostic-btn').addClass('active');
            var dropdownContent = $('#diagnostic-links a');
            if ($(dropdownContent).is(':visible') === false) {
                $(dropdownContent).show();
            } else {
                $(dropdownContent).hide();
            }
        });
    }
}