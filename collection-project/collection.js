
var emojis  = [
    {
        "date": "14",
        "day": "Tuesday",
        "emotions" : ["<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='neutral'>😐</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>"]
    },

    {
        "date": "15",
        "day": "Wednesday",
        "emotions" : ["<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>"]
    },
    {
        "date": "16",
        "day": "Thursday",
        "emotions": ["<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class='angry'>😠</div>","<div class='angry'>😠</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class='happy'>😊</div>"]
    },
    
    {
        "date": "17",
        "day": "Friday",
        "emotions": ["<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class ='anxious'>😰</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='angry'>😠</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class='neutral'>😐</div>"]
    },

    {
        "date": "18",
        "day": "Saturday",
        "emotions": ["<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='happy'>😊</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>"]
    },
    {
        "date": "19",
        "day": "Sunday",
        "emotions": ["<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>"]
    },
    {
        "date": "20",
        "day": "Monday",
        "emotions": ["<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='happy'>😊</div>"]
    },
    {
        "date": "21",
        "day": "Tuesday",
        "emotions": ["<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class ='anxious'>😰</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>"]
    },
    {
        "date": "22",
        "day": "Wednesday",
        "emotions": ["<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sad'>😔</div>","<div class='sad'>😔</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>"]
    },
    {
        "date": "23",
        "day": "Thursday",
        "emotions": ["<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='confused'>😵</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='confused'>😵</div>","<div class='happy'>😊</div>","<div class='happy'>😊</div>"]
    },
    {
        "date": "April 24",
        "day": "Friday",
        "emotions": ["<div class='happy'>😊</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='neutral'>😐</div>","<div class='confused'>😵</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='sleep'>😴</div>","<div class='neutral'>😐</div>","<div class='confused'>😵</div>","<div class ='anxious'>😰</div>","<div class ='anxious'>😰</div>"]
    }

]

console.log(emojis);
console.log(emojis[0].emotions);
for (var i = 0; i < emojis.length-1; i++ ) {
    $('.rows').append("<div class='row" + i + "'></div><br/>")
        for(var j = 0; j < emojis[i].emotions.length; j++) {
        $('.row' + i).append("<span>" + emojis[i].emotions[j] + "</span>")
        .css({
            "font-size" : "40px", 
            "display":"flex",
            "flex-direction": "row nonwrap",
            "letter-spacing":"20px"
        })
    }
}


$('.happy').data('clicked',false).click(function(){
    if($('.happy').data('clicked') === false){
        $('.happy').css({"background-color":"#ffea61"})
        $('.happy').data('clicked',true)
    }
    else{
        $('.happy').css({"background-color":"white"})
        $('.happy').data('clicked',false)
    }
})

$('.sad').data('clicked',false).click(function(){
    if($('.sad').data('clicked') === false){
        $('.sad').css({"background-color":"#abb3ff"})
        $('.sad').data('clicked',true)
    }
    else{
        $('.sad').css({"background-color":"white"})
        $('.sad').data('clicked',false)
    }
})


$('.sleep').data('clicked',false).click(function(){
    if($('.sleep').data('clicked') === false){
        $('.sleep').css({"background-color":"#ffb8ee"})
        $('.sleep').data('clicked',true)
    }
    else{
        $('.sleep').css({"background-color":"white"})
        $('.sleep').data('clicked',false)
    }
})

$('.angry').data('clicked',false).click(function(){
    if($('.angry').data('clicked') === false){
        $('.angry').css({"background-color":"#ff5768"})
        $('.angry').data('clicked',true)
    }
    else{
        $('.angry').css({"background-color":"white"})
        $('.angry').data('clicked',false)
    }
})

$('.anxious').data('clicked',false).click(function(){
    if($('.anxious').data('clicked') === false){
        $('.anxious').css({"background-color":"#ffb7ab"})
        $('.anxious').data('clicked',true)
    }
    else{
        $('.anxious').css({"background-color":"white"})
        $('.anxious').data('clicked',false)
    }
})

$('.confused').data('clicked',false).click(function(){
    if($('.confused').data('clicked') === false){
        $('.confused').css({"background-color":"#c2ffc5"})
        $('.confused').data('clicked',true)
    }
    else{
        $('.confused').css({"background-color":"white"})
        $('.confused').data('clicked',false)
    }
})

$('.neutral').data('clicked',false).click(function(){
    if($('.neutral').data('clicked') === false){
        $('.neutral').css({"background-color":"#d4c6a3"})
        $('.neutral').data('clicked',true)
    }
    else{
        $('.neutral').css({"background-color":"white"})
        $('.neutral').data('clicked',false)
    }
})

