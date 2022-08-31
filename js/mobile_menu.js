$('.navigation__button').on("click", function () {
    $(this).toggleClass('active');
});

$(document).ready(function () {
    $("#hamburger").click(function () {
        $("#navUL").slideToggle(200).css("display", "flex");
    });
});