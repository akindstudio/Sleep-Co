// A $( document ).ready() block.
$( document ).ready(function() {
   
    $(".hamburger").click(function(){

        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
    })

    // Animate on scroll - activate
    AOS.init();

});