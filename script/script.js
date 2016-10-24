var boxes = document.body.querySelectorAll(".color-box");
var MAX = boxes.length;
var selected;   // selected random color

// function to check user choice, use browser old school alert style to response
function isColor(){
    if(this.style.backgroundColor === selected){
        alert("Wow! You are good!");
        var again = confirm("Do you want to play another game?");
        if(again)
            play();
    }
    else
        alert("Oops! Wrong choice!");
}

// function to create color boxes
function generateColorBox(colors){
    for(var i = 0; i < MAX; i++){
        boxes[i].style.backgroundColor = colors[i].getColor();
        boxes[i].addEventListener("click", isColor);
    }
}

// function to generate/update the document object models
function generateDOM(colors){
    var colorText = document.body.querySelector("h1 span"); // get element
    selected = colors[Math.floor(Math.random() * (MAX - 1))].getColor();
    
    // assign randomly selected color to the element text content
    colorText.textContent = selected;
    
    generateColorBox(colors);   // call function to generate boxes
}

// function to generate the colors
function generateColors(){
    var temp = [];
    var color;
    
    for(var i = 0; i < MAX; i++){
        color = new Color();
        temp.push(color);
    }
    
    return temp;
}

// function to initialize the game
function play(){
    var colors = generateColors();  // generate colors
    generateDOM(colors);    // generate DOM
}

// start the game
play();
