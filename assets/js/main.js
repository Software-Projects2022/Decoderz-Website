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
  // MOBILE MENU - Control mobile menu behavior
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
  // DROPDOWN MENU - Desktop hover behavior
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
  // DROPDOWN MENU - Mobile click behavior
  // ================================================================================================
  $(".nav-item.dropdown > .nav-link").on("click", function (e) {
    if ($(window).width() <= 991) {
      e.preventDefault();
      $(this).parent().toggleClass("show");
      $(this).siblings(".dropdown-menu").slideToggle(300);
    }
  });

  // ================================================================================================
  // HERO SLIDER - Slick slider initialization
  // ================================================================================================
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

  // ================================================================================================
  // AOS ANIMATION - Initialize and configure scroll animations
  // ================================================================================================
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 120,
      delay: 0,
      anchorPlacement: "top-bottom",
      disable: false,
    });

    window.addEventListener("load", function () {
      AOS.refresh();
    });

    let scrollTimeout;
    window.addEventListener("scroll", function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        AOS.refresh();
      }, 100);
    });
  }

  // ================================================================================================
  // AOS ANIMATIONS - Apply animations to elements dynamically
  // ================================================================================================
  $(".nav-item").each(function (index) {
    $(this).attr({
      "data-aos": "fade-down",
      "data-aos-delay": index * 50,
      "data-aos-duration": "800",
    });
  });

  $(".contact-form .form-group").each(function (index) {
    $(this).attr({
      "data-aos": "fade-up",
      "data-aos-delay": index * 80,
      "data-aos-duration": "600",
    });
  });

  $(".col_grid_process").each(function (index) {
    $(this).attr({
      "data-aos": "zoom-in",
      "data-aos-delay": index * 200,
      "data-aos-duration": "1000",
    });
  });

  $(".blog-card").each(function (index) {
    $(this).attr({
      "data-aos": "fade-up",
      "data-aos-delay": index * 100,
      "data-aos-duration": "800",
    });
  });

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

  if ($(".newsletter-section").length) {
    $(".newsletter-section").attr({
      "data-aos": "fade-right",
      "data-aos-duration": "1000",
    });
  }

  if (typeof AOS !== "undefined") {
    setTimeout(function () {
      AOS.refresh();
    }, 100);
  }

  // ================================================================================================
  // LENIS SMOOTH SCROLL - Smooth scrolling behavior
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
  // SCROLLREVEAL - Reveal elements on scroll
  // ================================================================================================
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal();
  }

}); // end document.ready

// ================================================================================================
// WINDOW LOAD EVENT - Runs after all assets are loaded
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
// WINDOW RESIZE EVENT - Handle layout changes on resize
// ================================================================================================
$(window).on("resize", function () {
  if ($(window).width() > 991) {
    $("body").css("overflow", "auto");
    $(".navbar-collapse").removeClass("show");
  }

  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
});

// ================================================================================================
// SIDEBAR PANEL - Open/close sidebar with overlay
// ================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle  = document.getElementById("sidebarToggle");
  const sidebarPanel   = document.getElementById("sidebarPanel");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarClose   = document.getElementById("sidebarClose");

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

  if (sidebarToggle)  sidebarToggle.addEventListener("click", openSidebar);
  if (sidebarClose)   sidebarClose.addEventListener("click", closeSidebar);
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
    sidebarPanel.addEventListener("wheel",     function (e) { e.stopPropagation(); }, { passive: true });
    sidebarPanel.addEventListener("touchmove", function (e) { e.stopPropagation(); }, { passive: true });
  }

  // Newsletter form submission
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
// COUNTER ANIMATION - Animate stat numbers from 0 to target
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
// INTERSECTION OBSERVER - Trigger counter animation when element enters viewport
// ================================================================================================
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
      entry.target.classList.add("counted");
      const numberText   = entry.target.textContent.replace("K", "");
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
// BLOG SLIDER & HERO SLIDER - Slick slider initialization
// ================================================================================================
$(document).ready(function () {

  // Blog slider
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
      rtl: false,
      responsive: [
        { breakpoint: 1600, settings: { slidesToShow: 3 } },
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 480,  settings: { slidesToShow: 1 } },
      ],
    });
  }

  // Hero slider (with mouse pause/play)
  if ($(".hero-slider").length) {
    if (!$(".hero-slider").hasClass("slick-initialized")) {
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
            settings: { arrows: false, dots: false, autoplaySpeed: 3000 },
          },
          {
            breakpoint: 576,
            settings: { arrows: false, dots: false, autoplaySpeed: 3000 },
          },
        ],
      });
    }

    $(".hero-slider")
      .on("mouseenter", function () { $(this).slick("slickPause"); })
      .on("mouseleave", function () { $(this).slick("slickPlay");  });
  }
});

// ================================================================================================
// BACK TO TOP BUTTON - Show/hide and scroll to top on click
// ================================================================================================
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ================================================================================================
// TAB SWITCHER - Switch between tab panels
// ================================================================================================
function switchTab(tabName) {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add("active");
  }

  if (event && event.target) {
    event.target.classList.add("active");
  }
}

// ================================================================================================
// CUSTOM SELECT DROPDOWN - Styled select with icons
// ================================================================================================
const wrap      = document.getElementById("csWrap");
const trigger   = document.getElementById("csTrigger");
const label     = document.getElementById("csLabel");
const leadIcon  = document.getElementById("csLeadIcon");
const leadIconI = document.getElementById("csLeadIconI");
const options   = document.querySelectorAll(".cs-option");

if (wrap && trigger && label && leadIcon && leadIconI) {

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    wrap.classList.toggle("open");
  });

  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      label.textContent = opt.dataset.label;
      label.classList.add("selected");
      leadIcon.style.background = opt.dataset.bg;
      leadIcon.style.color      = opt.dataset.color;
      leadIconI.className       = opt.dataset.icon;

      options.forEach((o) => o.classList.remove("active"));
      opt.classList.add("active");

      wrap.classList.remove("open");
    });
  });

  document.addEventListener("click", () => wrap.classList.remove("open"));
}

// ================================================================================================
// END OF FILE
// ================================================================================================