$(document).ready(function () {
  $("#toggle").click(function () {
    $(this).toggleClass("open");
    $("#overlay").toggleClass("open");
    $("#header-fix").toggleClass("open");

    if ($("#overlay li").hasClass("open")) {
      $("#overlay li").removeClass("open");
    }
  });
  $("#overlay li a").on("click", function (e) {
    const overlayItems = $("#overlay li");
    const parentItem = $(this).parent();
    const overlay = $("#overlay");

    if (e.target.href.includes("javascript:void")) {
      if (!parentItem.hasClass("open")) {
        overlayItems.removeClass("open");
      }
      parentItem.toggleClass("open");
      return;
    }

    overlayItems.removeClass("open");
    overlay.toggleClass("open");
  });
  $(".owl-banner").owlCarousel({
    loop: true,
    center: true,
    margin: 20,
    nav: false,
    dots: true,
    // autoWidth:true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplaySpeed: 1500,
    items: 1,
  });

  // $(window).on("load scroll", function () {
  //   //現時点のスクロールの高さ取得
  //   const scrollPosition = $(window).scrollTop();
  //   if (scrollPosition > 109) {
  //     $("#header").css({
  //       background: "var(--c-gray-2)",
  //     });
  //   } else {
  //     $("#header").css({ background: "unset" });
  //   }
  // });
});
