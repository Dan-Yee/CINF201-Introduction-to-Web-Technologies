/**
 * Function for all pages
 */

/*
Function that flips the page between light mode and dark mode by changing text colors and background colors.
*/
var lightMode = 0;                                              // lightMode 0 = dark mode, lightMode 1 = light mode
$("#switchMode").click(function() {
    if(lightMode == 0) {
        // switching to light mode

        // editing general CSS for all pages
        $(".page").css({"background-color": "white", "color": "black"});
        $(".nav .left ul a, .nav .right ul a").css({"color": "black"});
        $(".nav .farRight ul li").css({"border": "1px solid black"});

        // editing CSS for About Me page to switch to light mode
        $(".aboutme .professional img, .aboutme .casual img").css({"border": "3px solid black"});

        // editing CSS for Resume page to switch to light mode
        $(".resume .pdf a").css({"color": "black", "border": "1px solid black"});
        $(".arrow").css({"border": "solid black", "border-width": "0px 3px 3px 0px"});

        // editing CSS for Projects page to switch to light mode
        $(".projects .project .description a").css({"color": "black", "border": "1px solid black"});

        $(this).html("Dark Mode");
        lightMode = 1;
    } else if(lightMode == 1) {
        // switching to dark mode

        // editing general CSS for all pages
        $(".page").css({"background-color": "black", "color": "white"});
        $(".nav .left ul a, .nav .right ul a").css({"color": "white"});
        $(".nav .farRight ul li").css({"border": "1px solid white"});

        // editing CSS for About Me page to switch to dark mode
        $(".aboutme .professional img, .aboutme .casual img").css({"border": "none"});

        // editing CSS for Resume page to switch to dark mode
        $(".resume .pdf a").css({"color": "white", "border": "1px solid white"});
        $(".arrow").css({"border": "solid white", "border-width": "0px 3px 3px 0px"});

        // editing CSS for Projects page to switch to dark mode
        $(".projects .project .description a").css({"color": "white", "border": "1px solid white"});

        $(this).html("Light Mode");
        lightMode = 0;
    }
    return lightMode;
});

/**
 * Functions for Resume Page
 */

/* Function that hides all the content from Skills, Activities, and Experience sections */
$(document).ready(function() {
    $("#skillsSection").hide();
    $("#activitiesSection").hide();
    $("#experienceSection").hide();
});

/* Function that toggles visibility of Skills section and adjusts arrow image */
$("#skillsArrow").click(function() {
    if($(this).hasClass("rightArrow")) {
        $(this).removeClass("rightArrow").addClass("downArrow");
    } else {
        $(this).removeClass("downArrow").addClass("rightArrow");
    }
    $("#skillsSection").fadeToggle();
});

/* Function that toggles visibility of Activities section and adjusts arrow image */
$("#activitiesArrow").click(function() {
    if($(this).hasClass("rightArrow")) {
        $(this).removeClass("rightArrow").addClass("downArrow");
    } else {
        $(this).removeClass("downArrow").addClass("rightArrow");
    }
    $("#activitiesSection").fadeToggle();
});

/* Function that toggles visibility of Experience section and adjusts arrow image */
$("#experienceArrow").click(function() {
    if($(this).hasClass("rightArrow")) {
        $(this).removeClass("rightArrow").addClass("downArrow");
    } else {
        $(this).removeClass("downArrow").addClass("rightArrow");
    }
    $("#experienceSection").fadeToggle();
});

/**
 * Functions for Projects Page
 */
$(document).ready(function() {
    $("#blackjackSection").hide();
    $("#discordBotSection").hide();
    $("#interpreterSection").hide();
});

/* Show Blackjack Game project and hide other projects */
$("#blackjackArrow").click(function() {
    if($(this).hasClass("rightArrow")) {
        $(this).removeClass("rightArrow").addClass("downArrow");
    } else {
        $(this).removeClass("downArrow").addClass("rightArrow");
    }
    $("#blackjackSection").fadeToggle();
    $("#discordBotSection").hide();
    $("#interpreterSection").hide();

    // reset arrow positions of other projects that have been hidden
    $("#discordBotArrow").removeClass("downArrow").addClass("rightArrow");
    $("#interpreterArrow").removeClass("downArrow").addClass("rightArrow");
});

/* Show Discord Bot project and hide other projects */
$("#discordBotArrow").click(function() {
    if($(this).hasClass("rightArrow")) {
        $(this).removeClass("rightArrow").addClass("downArrow");
    } else {
        $(this).removeClass("downArrow").addClass("rightArrow");
    }
    $("#blackjackSection").hide();
    $("#discordBotSection").fadeToggle();
    $("#interpreterSection").hide();

    // reset arrow positions of other projects that have been hidden
    $("#blackjackArrow").removeClass("downArrow").addClass("rightArrow");
    $("#interpreterArrow").removeClass("downArrow").addClass("rightArrow");
});

/* Show BASIC Interpreter project and hide other projects */
$("#interpreterArrow").click(function() {
    if($(this).hasClass("rightArrow")) {
        $(this).removeClass("rightArrow").addClass("downArrow");
    } else {
        $(this).removeClass("downArrow").addClass("rightArrow");
    }
    $("#blackjackSection").hide();
    $("#discordBotSection").hide();
    $("#interpreterSection").fadeToggle();

    // reset arrow positions of other projects that have been hidden
    $("#blackjackArrow").removeClass("downArrow").addClass("rightArrow");
    $("#discordBotArrow").removeClass("downArrow").addClass("rightArrow"); 
});