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

// social icon hover

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

//typewriter

function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = 20,
    tempTypeSpeed = 0;

  var type = function() {
    
      if (writingTag === true) {
          tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
              tagOpen = false;
              writingTag = true;
          } else {
              tag = "";
              tagOpen = true;
              writingTag = true;
              tag += HTML[cursorPosition];
          }
      }
      if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
              tempTypeSpeed = 0;
          }
          else {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          }
          t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          writingTag = false;
          if (tagOpen) {
              var newSpan = document.createElement("span");
              t.appendChild(newSpan);
              newSpan.innerHTML = tag;
              tag = newSpan.firstChild;
          }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
      }

  };

  return {
      type: type
  };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();