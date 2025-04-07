$(document).keydown(function (e) { 
    $("h1").text(e.key);
});

$("button").click(function (e) { 
    e.preventDefault();
    alert("i am clicked");
});