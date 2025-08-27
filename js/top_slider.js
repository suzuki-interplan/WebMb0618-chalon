$('.slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: '30%',
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 10000,
    responsive: [
        {
            breakpoint: 519,
            settings: {
                centerPadding: '16px'
            }
        }
    ]
});