// ================================================================================================
// Wait for DOM to be fully loaded before executing any code
// ================================================================================================
$(document).ready(function () {
  // ================================================================================================
  // STICKY HEADER - Make header sticky on scroll
  // ================================================================================================
  function handleStickyHeader() {
    const scrollTop = $(window).scrollTop();

    if (scrollTop > 50) {
      $(".main-header").addClass("sticky");
      $(".top-bar").fadeOut(200);
      $("body").addClass("scrolled");
    } else {
      $(".main-header").removeClass("sticky");
      $(".top-bar").fadeIn(200);
      $("body").removeClass("scrolled");
    }
  }

  $(window).scroll(handleStickyHeader);
  handleStickyHeader();

  // ================================================================================================
  // 📱 MOBILE MENU - Control mobile menu behavior
  // ================================================================================================
  function closeMobileMenu() {
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-toggler").trigger("click");
    }
  }

  if ($(window).width() <= 991) {
    $(document).on("click", function (e) {
      if (!$(e.target).closest(".navbar-collapse, .navbar-toggler").length) {
        closeMobileMenu();
      }
    });

    $(".navbar-collapse").on("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.right + 40;
      const y = e.clientY - rect.top;

      if (x > -60 && x < 0 && y > 0 && y < 60) {
        closeMobileMenu();
      }
    });
  }

  $(".navbar-toggler").on("click", function () {
    setTimeout(function () {
      if ($(".navbar-collapse").hasClass("show")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "auto");
      }
    }, 50);
  });

  // ================================================================================================
  // DROPDOWN MENU (DESKTOP)
  // ================================================================================================
  if ($(window).width() > 991) {
    $(".nav-item.dropdown").on("mouseenter", function () {
      $(this).find(".dropdown-menu").stop(true, true).css({
        opacity: "1",
        visibility: "visible",
        transform: "translateY(0)",
      });
    });

    $(".nav-item.dropdown").on("mouseleave", function () {
      $(this).find(".dropdown-menu").stop(true, true).css({
        opacity: "0",
        visibility: "hidden",
        transform: "translateY(-15px)",
      });
    });
  }

  // ================================================================================================
  // DROPDOWN MENU (MOBILE)
  // ================================================================================================
  $(".nav-item.dropdown > .nav-link").on("click", function (e) {
    if ($(window).width() <= 991) {
      e.preventDefault();
      $(this).parent().toggleClass("show");
      $(this).siblings(".dropdown-menu").slideToggle(300);
    }
  });

  // ================================================================================================
  //  HERO SLIDER
  // ================================================================================================
  $(document).ready(function () {
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
        rtl: false,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: false,
              autoplaySpeed: 3000,
            },
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              dots: false,
              autoplaySpeed: 3000,
            },
          },
        ],
      });
    }
  });
  // ================================================================================================
  // ✨ ENHANCED AOS ANIMATION CONFIGURATION
  // ================================================================================================
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing type
      once: false, // Animation repeats on scroll
      mirror: true, // Animate on scroll up
      offset: 120, // Offset from trigger point
      delay: 0, // No global delay
      anchorPlacement: "top-bottom",
      disable: false, // Enable on all devices
    });

    // Refresh AOS on dynamic content changes
    window.addEventListener("load", function () {
      AOS.refresh();
    });

    // Refresh on scroll
    let scrollTimeout;
    window.addEventListener("scroll", function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        AOS.refresh();
      }, 100);
    });
  }

  // ================================================================================================
  // 🎨 ADVANCED AOS ANIMATIONS - Add to elements dynamically
  // ================================================================================================

  // Animate navigation items on page load
  $(".nav-item").each(function (index) {
    $(this).attr({
      "data-aos": "fade-down",
      "data-aos-delay": index * 50,
      "data-aos-duration": "800",
    });
  });

  // Animate contact form fields
  $(".contact-form .form-group").each(function (index) {
    $(this).attr({
      "data-aos": "fade-up",
      "data-aos-delay": index * 80,
      "data-aos-duration": "600",
    });
  });

  // Animate work process cards
  $(".col_grid_process").each(function (index) {
    $(this).attr({
      "data-aos": "zoom-in",
      "data-aos-delay": index * 200,
      "data-aos-duration": "1000",
    });
  });

  // Animate blog cards
  $(".blog-card").each(function (index) {
    $(this).attr({
      "data-aos": "fade-up",
      "data-aos-delay": index * 100,
      "data-aos-duration": "800",
    });
  });

  // Animate map section
  if ($(".map-section").length) {
    $(".map-section").attr({
      "data-aos": "fade-right",
      "data-aos-duration": "1200",
    });
  }

  if ($(".info-section").length) {
    $(".info-section").attr({
      "data-aos": "fade-left",
      "data-aos-duration": "1200",
    });
  }

  // Animate newsletter section
  if ($(".newsletter-section").length) {
    $(".newsletter-section").attr({
      "data-aos": "fade-right",
      "data-aos-duration": "1000",
    });
  }

  // Animate section headers

  // Refresh AOS after adding all animations
  if (typeof AOS !== "undefined") {
    setTimeout(function () {
      AOS.refresh();
    }, 100);
  }

  // ================================================================================================
  // LENIS SMOOTH SCROLL
  // ================================================================================================
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      const target = $(this.getAttribute("href"));
      if (target.length) {
        lenis.scrollTo(target[0], {
          offset: -100,
          duration: 1.5,
        });
      }
    });
  }

  // ================================================================================================
  //  SCROLLREVEAL
  // ================================================================================================
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal();
  }
});

// ================================================================================================
// WINDOW LOAD EVENT
// ================================================================================================
$(window).on("load", function () {
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }

  if (
    $(".hero-slider").length &&
    $(".hero-slider").hasClass("slick-initialized")
  ) {
    $(".hero-slider").slick("refresh");
  }
});

// ================================================================================================
// WINDOW RESIZE EVENT
// ================================================================================================
$(window).on("resize", function () {
  if ($(window).width() > 991) {
    $("body").css("overflow", "auto");
    $(".navbar-collapse").removeClass("show");
  }

  // Refresh AOS on resize
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
});

// ================================================================================================
// SIDEBAR PANEL
// ================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarPanel = document.getElementById("sidebarPanel");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarClose = document.getElementById("sidebarClose");

  function openSidebar() {
    sidebarPanel.classList.add("active");
    sidebarOverlay.classList.add("active");
    document.body.classList.add("sidebar-open");
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
  }

  function closeSidebar() {
    sidebarPanel.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    document.body.classList.remove("sidebar-open");
    const scrollY = document.body.style.top;
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  if (sidebarToggle) sidebarToggle.addEventListener("click", openSidebar);
  if (sidebarClose) sidebarClose.addEventListener("click", closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      sidebarPanel &&
      sidebarPanel.classList.contains("active")
    ) {
      closeSidebar();
    }
  });

  if (sidebarPanel) {
    sidebarPanel.addEventListener(
      "wheel",
      function (e) {
        e.stopPropagation();
      },
      { passive: true },
    );

    sidebarPanel.addEventListener(
      "touchmove",
      function (e) {
        e.stopPropagation();
      },
      { passive: true },
    );
  }

  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      alert("Thank you for subscribing with: " + email);
      this.reset();
    });
  }
});

// ================================================================================================
//  COUNTER ANIMATION
// ================================================================================================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const isDecimal = target.toString().includes(".");

  const timer = setInterval(() => {
    start += increment;

    if (start >= target) {
      clearInterval(timer);
      start = target;
    }

    if (isDecimal) {
      element.textContent = start.toFixed(1) + "K";
    } else {
      element.textContent = Math.floor(start) + "K";
    }
  }, 16);
}

// ================================================================================================
// INTERSECTION OBSERVER
// ================================================================================================
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
      entry.target.classList.add("counted");
      const numberText = entry.target.textContent.replace("K", "");
      const targetNumber = parseFloat(numberText);
      animateCounter(entry.target, targetNumber);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((number) => {
    observer.observe(number);
  });
});

// ================================================================================================
// BLOG SLIDER
// ================================================================================================
$(document).ready(function () {
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
      rtl: false, // إنجليزي
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

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
      rtl: false, // إنجليزي
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      pauseOnHover: true,
      pauseOnFocus: true,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: false,
            autoplaySpeed: 3000,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            dots: false,
            autoplaySpeed: 3000,
          },
        },
      ],
    });

    $(".hero-slider")
      .on("mouseenter", function () {
        $(this).slick("slickPause");
      })
      .on("mouseleave", function () {
        $(this).slick("slickPlay");
      });
  }
});


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ================================================================================================
// tab-content
// ================================================================================================

function switchTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to clicked button
  event.target.classList.add("active");
}

// ================================================================================================
//  END OF FILE
// ================================================================================================
