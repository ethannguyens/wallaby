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