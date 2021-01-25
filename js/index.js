$('.language').mouseenter( function() {
    $('.language_list').css('visibility', 'visible');
});

$('.language').mouseleave( function() {
    $('.language_list').css('visibility', 'hidden');
})  


$('.support_meny').mouseenter( function() {
    $('.nav_support').css('display', 'flex');
    $('.triangle_submenu').css('display', 'inline');
});

$('.support_meny').mouseleave( function() {
    $('.nav_support').css('display', 'none');
    $('.triangle_submenu').css('display', 'none');
})  

$('.products_meny').mouseenter( function() {
    $('.nav_products').css('display', 'flex');
    $('.triangle_submenu').css({
        'display': 'inline',
        'left' : '1010px'
    });
});

$('.products_meny').mouseleave( function() {
    $('.nav_products').css('display', 'none');
    $('.triangle_submenu').css('display', 'none');
})  


$('.banner_slider').slick({
    infinite: true,
    dots: true,
    autoplay: true
});

$('.products_first_card').mouseenter( function(){
    $('.products_first_card h3').css('display', 'none');
    $('.hidden_text').fadeIn(1000);
})



$('.products_first_card').mouseleave( function(){
    $('.hidden_text').css('display', 'none');;
    $('.products_first_card h3').fadeIn(1000);
})


$('.partners_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: "<img src='img/left_arrow_partners_slider.svg' style= 'height : 20px' class='prev' alt='1'>",
    nextArrow: "<img src='img/right_arrow_partners_slider.svg' style= 'height : 20px' class='next' alt='2'>"
});
