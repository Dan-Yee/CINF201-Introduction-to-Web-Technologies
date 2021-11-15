// lightMode 0 = dark mode, lightMode 1 = light mode
var lightMode = 0;
$("#switchMode").click(function() {
    if(lightMode == 0) {
        // switching to light mode
        $(".page").css({"background-color": "white", "color": "black"});
        $(".nav .left ul a, .nav .right ul a").css({"color": "black"});
        $(".aboutme .professional img, .aboutme .casual img").css({"border": "3px solid black"});
        $(this).html("Dark Mode");
        lightMode = 1;
    } else if(lightMode == 1) {
        // switching to dark mode
        $(".page").css({"background-color": "black", "color": "white"});
        $(".nav .left ul a, .nav .right ul a").css({"color": "white"});
        $(".aboutme .professional img, .aboutme .casual img").css({"border": "none"});
        $(this).html("Light Mode");
        lightMode = 0;
    }
    return lightMode;
});