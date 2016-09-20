function RandomColorSequence(length) {
  this.items = [];
  for (var index = 0; index < length; index++) {
    var number = Math.floor(Math.random() * 4 + 1);
    var color = numberToColor(number);
    this.items.push(color);
  }
}

RandomColorSequence.numberToColor = numberToColor;

function numberToColor(number) {
  switch(number) {
    case(1) :
      return "red";
      break;
    case(2) :
      return "green";
      break;
    case(3) :
      return "blue";
      break;
    default:
      return "yellow";
  }
}

function Board(sequence) {

  var board = this;
  this.sequence = sequence;

  clearColors();
  $("#play").click(function() { play(); });

  this.show = show;
  function show(color) {
    clearColors();

    switch (color) {
      case "red":
        $('#red').css("background-color", "red");
        break;
      case "green":
        $('#green').css("background-color", "green");
        break;
      case "blue":
        $('#blue').css("background-color", "blue");
        break;
      case "yellow":
        $('#yellow').css("background-color", "yellow");
        break;
    }
  };

  function clearColors() {
    $('#red').css("background-color", "pink");
    $("#blue").css("background-color", "lightblue");
    $("#green").css("background-color", "lightgreen");
    $("#yellow").css("background-color", "lightyellow");
  }

  function play() {
    var currentColorShown = 0;

    flashColor();

    function flashColor() {
      var colorToShow = board.sequence.getItem(currentColorShown);
      show(colorToShow);
      currentColorShown++;
      setTimeout(hideColor, 500);
    }

    function hideColor() {
      var noColor = "";
      show(noColor);
      if (currentColorShown === board.sequence.items.length) {
        return;
      }
      setTimeout(flashColor, 250);
    }
  };
}