$(function () {
  function checkMediaQuery() {
    if (window.innerWidth < 800) {
      $("#btn").html(`<i class="fa-solid fa-bars"></i>`);
      $("#mid").removeClass("d-block").addClass("d-none");
      $("#right").removeClass("d-block").addClass("d-none");
      $("#left .text-dark").css({ "font-size": "40px" });
      $("#left").removeClass("col-8").addClass("col-12");
      $("#middle").removeClass("d-none").addClass("d-block");
      $("#middlecon").removeClass("d-block").addClass("d-none");
      $("#middle").css({
        width: "0px",
        height: "0px",
      });
    }
    if (window.innerWidth > 800) {
      $("#btn").text("Sign in");
      $("#mid").removeClass("d-none").addClass("d-block");
      $("#right").removeClass("d-none").addClass("d-block");
      $("#left .text-dark").css({ "font-size": "80px" });
      $("#left").removeClass("col-12").addClass("col-8");
    }
  }
  window.addEventListener("resize", checkMediaQuery);

  $("#btn").click(function () {
    if (window.innerWidth < 800) {
      $("#middle").css({
        width: "500px",
        height: "600px",
      });
      $("#middlecon").removeClass("d-none").addClass("d-block");
    }
  });

  $(".fa-solid.fa-xmark").click(function () {
    if (window.innerWidth < 800) {
      $("#middle").css({
        width: "0px",
        height: "0px",
      });
      $("#middlecon").removeClass("d-block").addClass("d-none");
    }
  });

  $("#products")
    .mouseenter(function () {
      $("#products #submenu").removeClass("d-none").addClass("d-block");
      $("#products .arrow").removeClass("d-none").addClass("d-block");
    })
    .mouseleave(function () {
      $("#products #submenu").removeClass("d-block").addClass("d-none");
      $("#products .arrow").removeClass("d-block").addClass("d-none");
    });

  $("#developers")
    .mouseenter(function () {
      $("#developers #submenu").removeClass("d-none").addClass("d-block");
      $("#developers .arrow").removeClass("d-none").addClass("d-block");
    })
    .mouseleave(function () {
      $("#developers #submenu").removeClass("d-block").addClass("d-none");
      $("#developers .arrow").removeClass("d-block").addClass("d-none");
    });

  $("#company")
    .mouseenter(function () {
      $("#company #submenu").removeClass("d-none").addClass("d-block");
      $("#company .arrow").removeClass("d-none").addClass("d-block");
    })
    .mouseleave(function () {
      $("#company #submenu").removeClass("d-block").addClass("d-none");
      $("#company .arrow").removeClass("d-block").addClass("d-none");
    });
});
