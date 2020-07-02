$(document).ready(function () {
    $('button.navbar-toggler').on('click', function () {
        openSideDrawer();
    });
    $('#links a, #other-links a, #side-drawer-void, button.medication-btn, button.diagnostic-btn').on('click', function () {
        closeSideDrawer($(this), event);
    });
    $('.side-nav-links > a').click(function () {
        $('.list-group-item, .dropdown-btn').removeClass('active');
        $('.side-nav-links .dropdown-container').hide();
        $(this).addClass('active').siblings().removeClass('active');
    });
    toggleMenu();
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

function toggleMenu() {
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            $('.list-group-item, .dropdown-btn').removeClass('active');
            $('.side-nav-links .dropdown-container').hide();
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
}