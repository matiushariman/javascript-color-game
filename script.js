var MAX = 6;

function generateColors(){
    var temp = [];
    var color;
    
    for(var i = 0; i < MAX - 1; i++){
        color = new Color();
        temp.push(color);
    }
    
    return temp;
}

// function to initialize the game
function play(){
    var colors = generateColors();
}

play();
