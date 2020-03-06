$("head").append('<link href="https://fonts.googleapis.com/css?family=Bangers|Cinzel|Concert+One|Dancing+Script|Dosis|Nosifer|Orbitron|Pacifico|VT323&display=swap" rel="stylesheet">')

$("h1").mouseover(function(){
    $("body").css({"font-family":"'Orbitron', sans-serif"});
    $("body").css({"background-color":"#b7deb6"});
    $("body").css({"color":"white"})

})

$("h2").mouseover(function(){   
    $("body").css({"font-family":"'Nosifer', cursive"});
    $("body").css({"background-color":"red"});
    $("body").css({"color":"black"})
})

$("#p1").mouseover(function(){
    $("body").css({"font-family":"'VT323', monospace"});
    $("body").css({"background-color":"#84cddb"});
    $("body").css({"color":"black"})
})

$("blockquote").mouseover(function(){
    $("body").css({"font-family":"'Dancing Script', cursive"});
    $("body").css({"background-color":"#f5eac1"});
    $("body").css({"color":"black"})
})

$("#p2").mouseover(function(){
    $("body").css({"font-family":"'Bangers', cursive"});
    $("body").css({"background-color":"#1ff4ff"});
    $("body").css({"color":"#ffeb36"})
})

$("#p3").mouseover(function(){
    $("body").css({"font-family":"'Dosis', sans-serif"});
    $("body").css({"background-color":"#e6acbe"});
    $("body").css({"color":"#475c3a"})
})

$("#p4").mouseover(function(){
    $("h1").css({"transform":"rotate(20deg)","position":"absolute", "top":"400px","left":"100px"});
    $("h2").css({"transform":"skew(30deg, 35deg)","position":"absolute","top":"350px","left":"500px", "font-size":"200px"});
    $("blockquote").css({"transform":"skew(-20deg, -5deg)","position":"absolute","top":"450px"});
    $("#p1").css({"transform":"skew(-40deg, 5deg)","position":"absolute","top":"500px"});
    $("#p2").css({"transform":"skew(-20deg, -30deg)","position":"absolute","top":"520px","left":"700px"});
    $("#p3").css({"transform":"skew(-30deg, -10deg)","position":"absolute","top":"620px","left":"100px"});
    $("#p4").css({"transform":"skew(-30deg)","position":"absolute","top":"720px","left":"500px"});
})