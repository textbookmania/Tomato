Template.carousel.rendered = function() {
  $("#owl-home").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 1000,
    paginationSpeed : 400,
    rewindSpeed : 1000,
    rewindNav : true,
    autoplay : 2500,
    items : 1,
    loop: true,
    center: true
  });
};