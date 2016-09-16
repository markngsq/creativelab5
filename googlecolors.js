

function getGoogleColors (color) {
    var base_colors=["4285F4","34A853","FBBC05","EA4235"];

    //I totally stackoverflow-ed this and then hacked it for my purposes ;)

    //Convert to RGB, then R, G, B
    var color_rgb = hex2rgb(color);
    var color_r = color_rgb.split(',')[0];
    var color_g = color_rgb.split(',')[1];
    var color_b = color_rgb.split(',')[2];

    //Create an empty array for the difference between the colors
    var differenceArray=[];

    //Function to find the smallest value in an array
    Array.min = function( array ){
           return Math.min.apply( Math, array );
    };


    //Convert the HEX color in the array to RGB colors, split them up to R-G-B, then find out the difference between the "color" and the colors in the array
    $.each(base_colors, function(index, value) {
        var base_color_rgb = hex2rgb(value);
        var base_colors_r = base_color_rgb.split(',')[0];
        var base_colors_g = base_color_rgb.split(',')[1];
        var base_colors_b = base_color_rgb.split(',')[2];

        //Add the difference to the differenceArray
        differenceArray.push(Math.sqrt((color_r-base_colors_r)*(color_r-base_colors_r)+(color_g-base_colors_g)*(color_g-base_colors_g)+(color_b-base_colors_b)*(color_b-base_colors_b)));
    });

    //Get the lowest number from the differenceArray
    var lowest = Array.min(differenceArray);

    //Get the index for that lowest number
    var index = differenceArray.indexOf(lowest);

    //Function to convert HEX to RGB
    function hex2rgb( color ) {
        var r,g,b;
        if ( color.charAt(0) == '#' ) {
            color = color.substr(1);
        }

        r = color.charAt(0) + color.charAt(1);
        g = color.charAt(2) + color.charAt(3);
        b = color.charAt(4) + color.charAt(5);

        r = parseInt( r,16 );
        g = parseInt( g,16 );
        b = parseInt( b ,16);
        return r+','+g+','+b;
    }

    //Return the HEX code
    return "#" + base_colors[index];
}
