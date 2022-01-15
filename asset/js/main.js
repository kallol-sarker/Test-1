var isMenuOpen = false;

  $(".logo i").click(function () {
    if (isMenuOpen == false) {
      $(".menu").slideDown("1000");
      $(".logo i").removeClass("fa-bars").addClass("fa-times");
      isMenuOpen = true;
    } else {
      $(".menu").slideUp("1000");
      $(".logo i").removeClass("fa-times").addClass("fa-bars");
      isMenuOpen = false;
    }
  });

  