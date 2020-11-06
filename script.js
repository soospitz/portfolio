//day and night

$(document).ready(function () {
  $("#moon").click(function () {
    $("body").addClass("day");
    $("body").removeClass("night");
  });
  $("#sun").click(function () {
    $("body").removeClass("day");
    $("body").addClass("night");
  });
});

$(function () {
  menu = $("nav ul");

  $("#toggle-button").on("click", function (e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();
    if (w > 580 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function (e) {
    var w = $(window).width();
    if (w < 580) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

// smooth scrolling

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });


//cards hover

$(".card").mouseenter(function(){
    $(this).find(".front").css('display','none')
    $(this).find(".back").css('display','block')
  }).mouseleave(function() {
    $(this).find(".front").css('display','block')
    $(this).find(".back").css('display','none')
  })

  $("#email").hover(
    function () {
      $(this).attr("src", function (index, attr) {
        return attr.replace("gemail.png", "email.png");
      });
    },
    function () {
      $(this).attr("src", function (index, attr) {
        return attr.replace("email.png", "gemail.png");
      });
    }
  );

// social icon hover

$("#email").hover(
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("gemail.png", "email.png");
    });
  },
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("email.png", "gemail.png");
    });
  }
);

$("#linkedin").hover(
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("glinkedin.png", "linkedin.png");
    });
  },
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("linkedin.png", "glinkedin.png");
    });
  }
);

$("#facebook").hover(
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("gfacebook.png", "facebook.png");
    });
  },
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("facebook.png", "gfacebook.png");
    });
  }
);

$("#instagram").hover(
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("ginstagram.png", "instagram.png");
    });
  },
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("instagram.png", "ginstagram.png");
    });
  }
);

$("#github").hover(
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("ggithub.png", "github.png");
    });
  },
  function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("github.png", "ggithub.png");
    });
  }
);
