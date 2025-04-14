console.log("scripts.js loaded");

$(document).ready(function(){
    var isExpanded = false;
    
    // Set initial text for the archive toggle
    $(".archive").text("+ Show archive");
    $(".news").hide(); // Initially hide all news items
    
    $(".archive").click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var $container = $(e.currentTarget).closest('.accordion-container');

        // Toggle display based on current state
        if (isExpanded) {
            $container.find(".news").slideUp(); // Hide all news items
            $(".archive").text("+ Show archive");
        } else {
            $container.find(".news").slideDown(); // Show all news items
            $(".archive").text("– Hide archive");
        }

        // Toggle the state
        isExpanded = !isExpanded;
    });
});

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.setAttribute("aria-hidden", "false"); // Make visible to screen readers when opened
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.setAttribute("aria-hidden", "true"); // Hide from screen readers when closed
    }
}