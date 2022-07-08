$(document).ready(function(){
    $("#carousel1").owlCarousel(
        {
            center: true,
            items:1,
            loop:true,
            margin:10,
            responsive:{
                600:{
                    items:4
                }
            }
        }
    );
});