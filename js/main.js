(function ($) {
  "use strict";

  /*
   * Spinner
   * This function handles the loading spinner on the webpage.
   * It waits for 1 millisecond before checking if the spinner element exists.
   * If it does, it removes the 'show' class to hide the spinner.
   */
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        // Check if spinner element is present
        $("#spinner").removeClass("show"); // Hide the spinner
      }
    }, 1); // Wait for 1 millisecond
  };
  spinner(); // Call the spinner function to execute

  /*
   * Initiate the wowjs
   * WOW.js is used to reveal animations when scrolling down the page.
   * This line initiates WOW.js to start animations.
   */
  new WOW().init(); // Initialise WOW.js for scroll animations

  /*
   * Sticky Navbar
   * This section makes the navigation bar sticky, meaning it stays at the top of the page when scrolling.
   * When the user scrolls down more than 300 pixels, it adds a shadow and fixes the navbar at the top.
   * Otherwise, it hides the navbar by moving it up by 100 pixels.
   */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      // Check if scroll position is greater than 300 pixels
      $(".sticky-top").addClass("shadow-sm").css("top", "0px"); // Add shadow and fix navbar at top
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px"); // Remove shadow and hide navbar
    }
  });

  /*
   * Back to Top Button
   * This section controls the 'back to top' button that appears when the user scrolls down the page.
   * If the scroll position is more than 300 pixels, the button fades in.
   * When clicked, it smoothly scrolls the page back to the top.
   */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      // Check if scroll position is greater than 300 pixels
      $(".back-to-top").fadeIn("slow"); // Fade in the back-to-top button
    } else {
      $(".back-to-top").fadeOut("slow"); // Fade out the back-to-top button
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo"); // Smooth scroll to top
    return false; // Prevent default anchor click behavior
  });

  /*
   * Facts Counter
   * This section controls the counter animation for facts or statistics on the page.
   * The counter-up plugin animates the numbers with a delay of 10 milliseconds and a total duration of 2 seconds.
   */
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10, // Delay between increments
    time: 2000, // Total duration of the counter animation
  });

  /*
   * Testimonials Carousel
   * This section initializes the carousel for testimonials using the Owl Carousel plugin.
   * The carousel auto-plays with a speed of 1 second per slide, loops infinitely, and includes navigation arrows.
   */
  $(".testimonial-carousel").owlCarousel({
    autoplay: true, // Enable auto-play
    smartSpeed: 1000, // Set speed of transitions to 1 second
    items: 1, // Display one item at a time
    dots: false, // Disable dots navigation
    loop: true, // Enable infinite looping
    nav: true, // Enable navigation arrows
    navText: [
      // Define custom navigation arrow icons
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);
