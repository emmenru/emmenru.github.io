console.log("scripts.js loaded");
$(document).ready(function () {
    // Initialize all accordion buttons
    $(".archive").each(function () {
        $(this).text("+ Show archive");
        $(this).append('<span class="sr-only">Expand to show older items</span>');
        $(this).attr('aria-expanded', 'false');
        
        // Get the news element and add an ID if it doesn't have one
        const $news = $(this).closest(".accordion-container").find(".news");
        if (!$news.attr('id')) {
            const uniqueId = 'news-' + Math.random().toString(36).substr(2, 9);
            $news.attr('id', uniqueId);
            $(this).attr('aria-controls', uniqueId);
        }
        
        // Hide the news section
        $news.hide();
        $news.attr('aria-hidden', 'true');
        
        // Ensure the container doesn't have the expanded class
        $(this).closest(".accordion-container").removeClass("expanded");
    });
    
    $(".archive").click(function (e) {
        e.preventDefault();
        const $button = $(this);
        const $container = $button.closest(".accordion-container");
        const $newsItems = $container.find(".news");
        const isExpanded = $container.hasClass("expanded");
        
        if (isExpanded) {
            // Collapse
            $newsItems.fadeOut();
            $button.text("+ Show archive");
            $button.attr('aria-expanded', 'false');
            $newsItems.attr('aria-hidden', 'true');
            
            // Update screen reader text
            if ($button.find('.sr-only').length > 0) {
                $button.find('.sr-only').text("Expand to show older items");
            } else {
                $button.append('<span class="sr-only">Expand to show older items</span>');
            }
            $container.removeClass("expanded");
        } else {
            // Expand
            $newsItems.fadeIn();
            $button.text("– Hide archive");
            $button.attr('aria-expanded', 'true');
            $newsItems.attr('aria-hidden', 'false');
            
            // Update screen reader text
            if ($button.find('.sr-only').length > 0) {
                $button.find('.sr-only').text("Collapse to hide older items");
            } else {
                $button.append('<span class="sr-only">Collapse to hide older items</span>');
            }
            $container.addClass("expanded");
        }
    });
    
    // Make the archive buttons keyboard accessible
    $(".archive").keydown(function(e) {
        // Handle Space and Enter key presses
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            $(this).click();
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