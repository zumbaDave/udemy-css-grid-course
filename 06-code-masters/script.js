$(document).ready(function () {
    // toggle button
    $('.btn').click(function() {
        $('.nav-links').slideToggle(3000);
        $('.btn').toggleClass('change');
    });

    // transparent background
    $(window).scroll(function() {
        let position = $(window).scrollTop() // scrollTop is position of window

        if(position >= 100) {
            $('nav, nav-container').addClass('nav-background');
        } else {
            $('nav, nav-container').removeClass('nav-background');
        }
    });

    // smooth scroll
    $('.nav-links a').click(function(link) {
        link.preventDefault();
        
        let target = $(this).attr('href');
        // need stop any previous animations because if you do not, there can be too many animations in the cue and will stop working
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 3000);  
    });

    // owl team
    $('.team-center').owlCarousel({
        loop: true,
        margin: 10,
        smartSpeed: 4000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // owl customers
    $('.customers-center').owlCarousel({
        loop: true,
        margin: 10,
        smartSpeed: 4000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
})
