$(document).ready(function () {
  $("#toggle").click(function () {
    $(this).toggleClass("open");
    $("#overlay").toggleClass("open");
    $("#header-fix").toggleClass("open");
  });
  $("#overlay li a").on("click", function () {
    $("#overlay").toggleClass("open");
    // $('#header-fix').toggleClass('open');
  });


  $(".owl-banner").owlCarousel({
    loop: true,
    center: true,
    margin: 400,
    nav: false,
    dots: false,
    // autoWidth:true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplaySpeed: 1500,
    items: 1,
  });

  $(window).on("load scroll", function () {
    //現時点のスクロールの高さ取得
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition > 109) {
      $("#header").css({
        background: "var(--c-gray-2)",
      });
    } else {
      $("#header").css({ background: "unset" });
    }
  });
});
