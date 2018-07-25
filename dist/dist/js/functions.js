$(document).ready(function() {
             $('.owl-carousel').owlCarousel({
               autoplay: true,
               autoplayTimeout: 3000,
               autoplayHoverPause: true,
               center: true,
               loop: true,
               responsiveClass: true,
               responsive: {
                 0: {
                   items: 1
                 },
                 650:{
                   items: 2
                 },
                 1000: {
                   items: 3
                 }
               }
             })
           })
