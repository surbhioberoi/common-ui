$(document).on('scroll', function(e) {
    var scrolledPixelFromTop = $(document).scrollTop();
    if (scrolledPixelFromTop > 50) {
        $('.navbar').css('opacity', 0.9);
    } else {
        $('.navbar').css('opacity', 0);
    }
});
