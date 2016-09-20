chai.should();

describe("My first wallaby test", function() {
  it("should track it length", function() {
    var sequence = new RandomColorSequence(4);
    sequence.items.length.should.equal(4);
  })

  var colors = ['red', 'green', 'blue', 'yellow'];
  it("should contain random items", function() {
    var sequence = new RandomColorSequence(4);

    colors.should.contain(sequence.items[0]);
    colors.should.contain(sequence.items[1]);
    colors.should.contain(sequence.items[2]);
    colors.should.contain(sequence.items[3]);
  })

  it("should return color for number", function() {
    RandomColorSequence.numberToColor(1).should.equal("red");
    RandomColorSequence.numberToColor(2).should.equal("green");
    RandomColorSequence.numberToColor(3).should.equal("blue");
    RandomColorSequence.numberToColor(4).should.equal("yellow");
  })
});