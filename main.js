var blockValue = 6;
var startGame = document.querySelector(".startGame");
var result = document.querySelector(".result");
var RGBcolorText = document.querySelector(".RGBcolor");

var easyGame = document.querySelector(".easyGame");
var hardGame = document.querySelector(".hardGame");

var blocks = document.querySelectorAll(".block");

var colors = GenerateRandomColors(blockValue);
var selectedColor = SelectOneRandColor();

// Buttons
startGame.addEventListener("click", function() {
    colors = GenerateRandomColors(blockValue);
    selectedColor = SelectOneRandColor();
    RGBcolorText.textContent = selectedColor;

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.background = colors[i];
    }
});

easyGame.addEventListener("click", function() {
    blockValue = 3;
    colors = GenerateRandomColors(blockValue);
    selectedColor = SelectOneRandColor();
    RGBcolorText.textContent = selectedColor;
    result.textContent = "Easy Mode";

    for (var i = 0; i < blocks.length; i++) {
        if (colors[i]) {
            blocks[i].style.background = colors[i];
        } else {
            blocks[i].style.display = "none";
        }
    }
});

hardGame.addEventListener("click", function() {
    blockValue = 6;
    colors = GenerateRandomColors(blockValue);
    selectedColor = SelectOneRandColor();
    RGBcolorText.textContent = selectedColor;
    result.textContent = "Hard Mode";

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.background = colors[i];
        blocks[i].style.display = "block";
    }
});

// Block
for (var i = 0; i < blocks.length; i++) {
    RGBcolorText.textContent = selectedColor;
    blocks[i].style.background = colors[i];
    blocks[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if (clickedColor === selectedColor) {
            result.textContent = "Nice Bro!";
            Congrats(clickedColor);
        } else {
            this.style.background = "darkslateblue"; //document.body.style.background;
            result.textContent = "Looser :)";
        }
    });
}

// Color Funcs
function Congrats(color) {
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.background = color;
    }
}

function SelectOneRandColor() {
    var index = Math.floor(Math.random() * colors.length)
    return colors[index];
}

function GenerateRandomColors(value) {
    var array = []
    for (var i = 0; i < value; i++) {
        array.push(RandomColor())
    }
    return array;
}

function RandomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}