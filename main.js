// openbtn
$(".openbtn").click(function () {
    $(this).toggleClass('active');
    if ($(".mask_menu").is(":visible")) {
        $(".mask_menu").slideUp();
    } else {
        $(".mask_menu").slideDown();
    }
});

$(".mask_menu a").click(function () {
    $(".openbtn").toggleClass('active');
    $(".mask_menu").slideUp();
});

// slider
$(function () {
    $(".slider")
        .slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            autoplay: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        // arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        // arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
});