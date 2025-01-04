(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

// ads pop

// Run this code when the window loads
window.onload = function () {
    const imagePopup = document.getElementById("imagePopup");
    const closeImagePopup = document.getElementById("closeImagePopup");

    // Show the modal on page load
    imagePopup.style.display = "flex";

    // Close the modal when the "X" button is clicked
    closeImagePopup.onclick = function () {
        imagePopup.style.display = "none";
    };

    // Close the modal when clicking outside the content area
    window.onclick = function (event) {
        if (event.target === imagePopup) {
            imagePopup.style.display = "none";
        }
    };
};

