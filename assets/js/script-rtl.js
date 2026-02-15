// ========================== Hero Slider ==========================
$(document).ready(function() {
  if ($(".hero-slider").length) {
    $(".hero-slider").slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      fade: true,
      rtl: true,
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: false,
            autoplaySpeed: 3000
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            dots: false,
            autoplaySpeed: 3000
          }
        }
      ]
    });

    $(".hero-slider")
      .on("mouseenter", function() {
        $(this).slick("slickPause");
      })
      .on("mouseleave", function() {
        $(this).slick("slickPlay");
      });
  }
});

// ========================== Blog Slider ==========================
$(document).ready(function() {
  if ($(".blog-slider").length) {
    $(".blog-slider").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      rtl: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
});