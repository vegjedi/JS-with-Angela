// $("h1").addClass("big-title margin-50");

// $("h1").html("Good bye");

$("button").text("$$$$$");

$("h1").click(function(){
    $(this).css("color","blue");
});

$("input").keydown(function(event){
    $("h1").text(event.key);
})