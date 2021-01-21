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