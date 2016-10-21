var MAX = 6;    // max number of colors generated

// function to generate the colors
function generateColors(){
    var temp = [];
    var color;
    
    for(var i = 0; i < MAX - 1; i++){
        color = new Color();
        temp.push(color);
    }
    
    return temp;
}

// function to generate/update the document object models
function generateDOM(colors){
    var colorText = document.body.querySelector("h1 span"); // get element
    
    // assign randomly selected color to the element text content
    colorText.textContent = colors[Math.floor(Math.random() * (MAX - 1))].getColor();
}

// function to initialize the game
function play(){
    var colors = generateColors();  // generate colors
    generateDOM(colors);    // generate DOM
}

// start the game
play();
