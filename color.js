function Color(){
    this.generateColors();
}

Color.prototype.generateColors = function(){
    function generateColorValue() {
        return Math.floor(Math.random() * 255);
    }
    var r = generateColorValue();
    var g = generateColorValue();
    var b = generateColorValue();
    
    this.color = "rgb("+r+","+g+","+b+")";
};

Color.prototype.getColor = function(){
    return this.color;
};