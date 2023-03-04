//include jQuery script at the end of the website
// $("h1").css("color", "red");

//TO check if the document is ready,

// $(document).ready(function(){
//     $("h1").css("color", "red");
// });


//Getting the value of a css element
//$("h1").css("color")

//setting the value of a css element
// $("h1").css("color", "red");

//To add a class to our jQuery,
// $("h1").addClass("big-title");

//To add Multiple classes
// $("h1").addClass("big-title margin-50");

//To see if an element has a particular class
//$("h1").hasClass("margin-50")

//To remove class
// $("h1").removeClass("big-title");


//console.log($("h1").css("color"));

// Change Text using jQuery
// $("h1").text("Bye");
// $("button").text("Dont Click Me");

// $("button").html("<em>Hey</em>");

//get and set attributes
// console.log($("img").attr("src"));
//$("h1").attr("class");

//set the value of the attribute
$("a").attr("href", "http://www.yahoo.com");

//adding event listeners with javascript
// for(let i = 0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     })
// }

//adding event listeners with j Query
//    $("button").click (function(){
//         $("h1").css ("color", "purple");
//     })




// $("h1").click(function(){
//     $("h1").css("color", "pink");
// });


$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});


$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
})

//adding and removing documents with jQuery
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

// $("button").remove();


//Animation
// $("button").click (function(){
//     $("h1").toggle();
// });

// $("button").click (function(){
//     $("h1").fadeOut();
// });

// $("button").click (function(){
//         $("h1").fadeToggle();
//     });

// $("button").click (function(){
//     $("h1").slideUp();
// });


// $("button").click (function(){
//     $("h1").slideToggle();
// });

// $("h1").slideDown();

// $("h1").fadein();


// $("h1").show();


// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5})
// })


$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})


// In anaimate, you only add CSS rule that have a numeric value.
