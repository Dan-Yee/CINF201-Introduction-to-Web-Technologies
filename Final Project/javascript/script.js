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
$("#skillsDropdown").click(function() {
    if($(".skillArrow").hasClass("rightArrow")) {
        $(this).removeClass("rightArrow").addClass("downArrow");
    } else {
        $(this).removeClass("downArrow").addClass("rightArrow");
    }
    $("#skillsSection").fadeToggle();
});

/* Function that toggles visibility of Activities section and adjusts arrow image */
$("#activitiesDropdown").click(function() {
    if($(".activitiesArrow").hasClass("rightArrow")) {
        $(this).removeClass("rightArrow").addClass("downArrow");
    } else {
        $(this).removeClass("downArrow").addClass("rightArrow");
    }
    $("#activitiesSection").fadeToggle();
});

/* Function that toggles visibility of Experience section and adjusts arrow image */
$("#experienceDropdown").click(function() {
    if($(".experienceArrow").hasClass("rightArrow")) {
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
$("#blackjackGame").click(function() {
    if(!$(this).hasClass("selected")) {
        $(this).addClass("selected");                           // block ability to click same project name again
        $("#discordBot").removeClass("selected");
        $("#basicInterpreter").removeClass("selected");

        $("#blackjackSection").fadeToggle();
        $("#discordBotSection").hide();
        $("#interpreterSection").hide();
    }
});

/* Show Discord Bot project and hide other projects */
$("#discordBot").click(function() {
    if(!$(this).hasClass("selected")) {
        $(this).addClass("selected");                           // block ability to click same project name again
        $("#blackjackGame").removeClass("selected");
        $("#basicInterpreter").removeClass("selected");

        $("#blackjackSection").hide();
        $("#discordBotSection").fadeToggle();
        $("#interpreterSection").hide();
    }
});

/* Show BASIC Interpreter project and hide other projects */
$("#basicInterpreter").click(function() {
    if(!$(this).hasClass("selected")) {
        $(this).addClass("selected");                           // block ability to click same project name again
        $("#blackjackGame").removeClass("selected");
        $("#discordBot").removeClass("selected");

        $("#blackjackSection").hide();
        $("#discordBotSection").hide();
        $("#interpreterSection").fadeToggle();
    }
});