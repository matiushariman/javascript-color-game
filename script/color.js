/*This is a color object class*/

// Color constructor
function Color(){
    this.generateColor();
}

Color.prototype = function() {
	// function to generate color
	var generateColor = function() {
	    function generateColorValue() {
	        return Math.floor(Math.random() * 255);
	    }
	    var r = generateColorValue();   // get red value
	    var g = generateColorValue();   // get green value
	    var b = generateColorValue();   // get blue value
	    
	    this.color = "rgb("+r+", "+g+", "+b+")";
	};
	// function to fetch the color
	var getColor = function() {
		return this.color;
	};

	return {
		generateColor : generateColor,
		getColor : getColor
	}
}();