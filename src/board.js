function Board(sequence) {

    var board = this;
    this.sequence = sequence;

    clearColors();
    $("#play").click(function() { play(); });
    ["red", "green", "blue", "yellow"].forEach(function (color) {
        $("#" + color).click(function () { board.click(color); });
    });


    this.clicked = [];
    this.click = function (color) {
        this.clicked.push(color);
        for (var index = 0; index < board.clicked.length; index++) {
            if (board.clicked[index] !== board.sequence.items[index]) {
                $("#status").text("FAIL");
                return;
            }
        }

        if (board.clicked.length === board.sequence.items.length) {
            $("#status").text("WIN");
        }

    }


    this.show = show;

    function show(color) {
        clearColors();

        switch (color) {
        case "red":
        case "green":
        case "blue":
        case "yellow":
            $('#' + color).css("background-color", color);
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