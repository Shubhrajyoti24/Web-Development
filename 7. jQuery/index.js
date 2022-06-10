//    $("h1").css("color","red");       if jquery cdn link is added at the end of body section

/*
$(document).ready(function(){
    $("h1").css("color","red");        if jquery cdn link is added in the head section
});
*/


$("h1").addClass("big-title margin-50");

//  $("h1").removeClass();

//  $("h1").hasClass("margin-50");

$("h2").text("I am Shubhrajyoti.");     // to change/manipulate the text

$("a").attr("href","https://www.yahoo.com");

// js code
/*
for(var i=0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h3").style.color = "purple";
    });
}
*/
// jquery code
$("button").click(function() {
    $("h3").css("color","green");
});

$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h4").text(event.key);
});

$("h5").on("mouseover", function() {
    $("h5").css("color","red");
});

$("button").on("click", function() {
    // $("h5").hide();
    //$("h5").toggle();
    //$("h5").slideUp();
    //$("h5").slideDown();
    //$("h5").slideToggle();
    //$("h5").fadeOut();
    //$("h5").fadeIn();
    //$("h5").fadeToggle();

    $("h2").animate({opacity: 0.5});
});