$(document).ready(function() {
  $("#happy-text").click(function() {
    console.log("Happy text clicked!");
    addRandomShapes();
  });

  function addRandomShapes() {
    console.log("Adding random shapes");
    for (let i = 0; i < 1; i++) {
      var shape = $("<div class='random-shape'></div>");
      var randomSize = Math.floor(Math.random() * 50) + 20;

      var randomTop = Math.floor(Math.random() * ($("#poster-container").height() - randomSize));
      var randomLeft = Math.floor(Math.random() * ($("#poster-container").width() - randomSize));

      console.log("Top:", randomTop, "Left:", randomLeft);

      var randomColor = getRandomColor();

      shape.css({
        width: randomSize + "px",
        height: randomSize + "px",
        top: randomTop + "px",
        left: randomLeft + "px",
        background: randomColor,
        position: "absolute",
        "z-index": -1,
        "border-radius": "100%"
      });

      $("#poster-container").append(shape);
    }
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  $("#bottom-left-image").on("mouseenter",function() {
    $("#bottom-left-image").addClass("image-hover")
  });
  $("#bottom-left-image").on("mouseleave",function() {
    $("#bottom-left-image").removeClass("image-hover")
  })
  $("#bottom-left-image").click(function() {
    $("#popup-image").fadeIn(500).delay(5000).fadeOut(500)
  })
  
});
