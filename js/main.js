(function ($) {
  "use strict";

  // Sticky Header Js

  var windowOn = $(window);

  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 400) {
      $("#header-sticky").removeClass("header-sticky");
    } else {
      $("#header-sticky").addClass("header-sticky");
    }
  });

  //Header Search Form
  if ($(".search-trigger").length) {
    $(".search-trigger").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search, .search-back-drop").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Offcanvas menu
  $(".menu-trigger").on("click", function () {
    $(".extra-info,.offcanvas-overlay").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overlay").on("click", function () {
    $(".extra-info,.offcanvas-overlay").removeClass("active");
  });

  // Mini Cart Toggle

  if ($(".mini-cart").length) {
    var cartToggleBtn = $(".cart-toggle-btn");
    var cartContent = $(".mini-cart-content");
    var body = $("body");

    cartToggleBtn.on("click", function (e) {
      cartContent.toggleClass("mini-cart-content-toggle");
      e.stopPropagation();
    });

    body
      .on("click", function () {
        cartContent.removeClass("mini-cart-content-toggle");
      })
      .find(cartContent)
      .on("click", function (e) {
        e.stopPropagation();
      });
  }

  // data-backround

  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // Metis Menu

  $("#mobile-menu").metisMenu();

  $("#hamburger").on("click", function () {
    $(".mobile-nav").addClass("show");
    $(".overlay").addClass("active");
  });

  $(".close-nav").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });

  $(".overlay").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });

  // Hero Area Slider

  $(".homepage-slides").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: "fadeIn",
    smartSpeed: 2000,
    slideSpeed: 600,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 1,
      },
      1100: {
        items: 1,
      },
    },
  });

  $(".homepage-slides").on("translate.owl.carousel", function () {    
    $(".single-slide-item h1")
      .removeClass("animated fadeInDown")
      .css("opacity", "1");
    $(".single-slide-item p")
      .removeClass("animated fadeInUp")
      .css("opacity", "1");
    $(".single-slide-item .theme-btn")
      .removeClass("animated fadeInDown")
      .css("opacity", "1");
  });

  $(".homepage-slides").on("translated.owl.carousel", function () {    
    $(".single-slide-item h1")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
    $(".single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
    $(".single-slide-item .theme-btn")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
  });


  // Client Slider

  $(".client-wrap").owlCarousel({
    loop: true,
    items: 5,
    dots: true,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    touchDrag: true,
    mouseDrag: true,
    margin: 30,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false,
      },
      600: {
        items: 2,
        nav: false,
        dots: false,
      },
      768: {
        items: 3,
        nav: false,
        dots: false,
      },
      1100: {
        items: 5,
        nav: false,
        dots: true,
      },
    },
  });

  // Testimonial Slider

  $(".testimonial-wrapper").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    slideSpeed: 300,
    margin: 30,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],    
  });

  // Testimonial Two

  $(".testimonial-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    slideSpeed: 600,
    margin: 30,
    navText: [
      "<i class='la la-angle-left'></i>",
      "<i class='la la-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1100: {
        items: 3,
      },
    },
  });

  // Blog Carousel

  $(".blog-carousel").owlCarousel({
    items: 3,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 40,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      1200: {
        items: 3,
        nav: false,
        dots: true,
      },

      990: {
        items: 3,
        nav: false,
        dots: true,
      },

      767: {
        items: 2,
        nav: false,
        dots: true,
      },

      575: {
        items: 2,
        nav: false,
        dots: true,
      },

      0: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  });

  // Feature Slider

  $(".feature_item").slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });

  // Service Slider

  $(".service-slider").owlCarousel({
    items: 1,
    margin: 30,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },

      575: {
        items: 1,
        nav: false,
        dots: false,
      },

      767: {
        items: 2,
        nav: false,
        dots: false,
      },

      990: {
        items: 3,
        loop: true,
      },
      1200: {
        items: 3,
        dots: false,
        loop: true,
      },
    },
  });

  // Project Slider

  $(".project-slider").owlCarousel({
    items: 1,
    margin: 30,
    dots: false,
    nav: true,
    loop: false,
    autoplay: true,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      575: {
        items: 1,
        nav: false,
        dots: false,
      },

      767: {
        items: 2,
        nav: true,
        dots: false,
      },

      990: {
        items: 3,
        dots: true,
      },
      1200: {
        items: 3,
        dots: true,
      },
    },
  });

  $(".project-slider-2").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: true,
    loop: false,
    autoplay: true,
    responsiveClass: true,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      575: {
        items: 1,
        nav: false,
        dots: false,
      },

      767: {
        items: 2,
        dots: true,
      },

      990: {
        items: 3,
        dots: false,
      },
      1200: {
        items: 2,
        dots: false,
      },
    },
  });

  // Product Image Slider
  $(".product-image-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav-thumbnails",
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // Product Thumbnail Slider

  $(".slider-nav-thumbnails").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-image-slider",
    dots: false,
    arrows: false,
    //    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  //Progress Bar JS

  $("#bar1").barfiller({
    barColor: "#FA4729",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#FA4729",
    duration: 5000,
  });

  $("#bar3").barfiller({
    barColor: "#FA4729",
    duration: 5000,
  });

  //jQuery Animation
  new WOW().init();

  // Nice select
  $("select").niceSelect();

  //Counter Up

  $(".counter-number span").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".video-play-btn").magnificPopup({
    type: "iframe",
  });

  // Active Class

  $(".main-menu ul > li > ul li a").on("mouseover", function () {
    $(".main-menu ul > li > ul li a").removeClass("active");
    $(this).addClass("active");
  });

  // Odometer js

  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  //  Image zoom effect
  $(".zoom-image-hover").zoom();

  // Project Filter

  $(window).on("load", function () {
    var e = $(".project-filter"),
      a = $("#menu-filter");
    e.isotope({
      filter: "*",
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
      },
    }),
      a.find("a").on("click", function () {
        var o = $(this).attr("data-filter");
        return (
          a.find("a").removeClass("active"),
          $(this).addClass("active"),
          e.isotope({
            filter: o,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: !1,
            },
          }),
          !1
        );
      });
  });

  // Qty Plus Minus Button

  var QtyPlusMinus = $(".qty-plus-minus");
  QtyPlusMinus.prepend('<div class="dec gi-qtybtn">-</div>');
  QtyPlusMinus.append('<div class="inc gi-qtybtn">+</div>');

  $("body").on("click", ".gi-qtybtn", function () {
    var $qtybutton = $(this);
    var QtyoldValue = $qtybutton.parent().find("input").val();
    if ($qtybutton.text() === "+") {
      var QtynewVal = parseFloat(QtyoldValue) + 1;
    } else {
      if (QtyoldValue > 1) {
        var QtynewVal = parseFloat(QtyoldValue) - 1;
      } else {
        QtynewVal = 1;
      }
    }
    $qtybutton.parent().find("input").val(QtynewVal);
  });

  // Contact Form

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    var $action = $(this).prop("action");
    var $data = $(this).serialize();
    var $this = $(this);

    $this.prevAll(".alert").remove();

    $.post(
      $action,
      $data,
      function (data) {
        if (data.response == "error") {
          $this.before(
            '<div class="alert alert-danger">' + data.message + "</div>"
          );
        }

        if (data.response == "success") {
          $this.before(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
          $this.find("input, textarea").val("");
        }
      },
      "json"
    );
  });

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($("#loader").length) {
      $("#loader").delay(200).fadeOut(500);
    }
  }

  $(window).on("load", function () {
    handlePreloader();
  });

  // Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();
})(window.jQuery);
