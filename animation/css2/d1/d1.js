$("#pepsicola").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("pepsicola.svg", "pepsicolablue.svg");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("pepsicolablue.svg", "pepsicola.svg");
    });
});

$("#open").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("open.svg", "oopen.svg");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("oopen.svg", "open.svg");
    });
});

$(document).ready(function(){
      $("#on").click(function(){
          $("body").addClass("night");
          $("body").removeClass("day");
      });
      $("#off").click(function(){
          $("body").removeClass("night");
          $("body").addClass("day");
      });
  });