console.log("scripts.js loaded");

$(document).ready(function () {
    // Initialize all accordion buttons
    $(".archive").each(function () {
        $(this).text("+ Show archive");
        $(this).closest(".accordion-container").find(".news").hide();
    });

    $(".archive").click(function (e) {
        e.preventDefault();
        const $button = $(this);
        const $container = $button.closest(".accordion-container");
        const $newsItems = $container.find(".news");

        const isExpanded = $container.hasClass("expanded");

        if (isExpanded) {
            $newsItems.fadeOut();
            $button.text("+ Show archive");
            $container.removeClass("expanded");
        } else {
            $newsItems.fadeIn();
            $button.text("– Hide archive");
            $container.addClass("expanded");
        }
    });
});

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
        x.setAttribute("aria-hidden", "false");
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.setAttribute("aria-hidden", "true");
    }
}
