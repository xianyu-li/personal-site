
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

//filter//

var happytimes = document.getElementsByClassName('happy')
$('.one').data('clicked',false).click(function(){
        if($('.one').data('clicked') === false){
            $('.sad').hide()
            $('.angry').hide()
            $('.anxious').hide()
            $('.confused').hide()
            $('.sleep').hide()
            $('.neutral').hide()
            $('.text').append("I've been happy " + happytimes.length + " times" ).css({"font-family": "'PT Mono', monospace"})
            $('.one').data('clicked',true)
        }
        else{
            $('.sad').show()
            $('.angry').show()
            $('.anxious').show()
            $('.confused').show()
            $('.sleep').show()
            $('.neutral').show()
            $('.text').remove()
            $('.one').data('clicked',false)
        }
    }    
)
var sadtimes = document.getElementsByClassName('sad')
$('.two').data('clicked',false).click(function(){
    if($('.two').data('clicked') === false){
        $('.happy').hide()
        $('.angry').hide()
        $('.anxious').hide()
        $('.confused').hide()
        $('.sleep').hide()
        $('.neutral').hide()
        $('.text').append("I've been sad " + sadtimes.length + " times" ).css({"font-family": "'PT Mono', monospace"})
        $('.two').data('clicked',true)
    }
    else{
        $('.two').show()
        $('.happy').show()
        $('.angry').show()
        $('.anxious').show()
        $('.confused').show()
        $('.sleep').show()
        $('.neutral').show()
        $('.text').remove()
        $('.two').data('clicked',false)
    }
}    
)
var angrytimes = document.getElementsByClassName('angry')
$('.three').data('clicked',false).click(function(){
    if($('.three').data('clicked') === false){
        $('.happy').hide()
        $('.sad').hide()
        $('.anxious').hide()
        $('.confused').hide()
        $('.sleep').hide()
        $('.neutral').hide()
        $('.text').append("I've been angry " + angrytimes.length + " times" ).css({"font-family": "'PT Mono', monospace"})
        $('.three').data('clicked',true)
    }
    else{
        $('.two').show()
        $('.happy').show()
        $('.sad').show()
        $('.anxious').show()
        $('.confused').show()
        $('.sleep').show()
        $('.neutral').show()
        $('.text').remove()
        $('.three').data('clicked',false)
    }
}    
)
var anxioustimes = document.getElementsByClassName('anxious')
$('.four').data('clicked',false).click(function(){
    if($('.four').data('clicked') === false){
        $('.happy').hide()
        $('.sad').hide()
        $('.angry').hide()
        $('.confused').hide()
        $('.sleep').hide()
        $('.neutral').hide()
        $('.text').append("I've been anxious " + anxioustimes.length + " times" ).css({"font-family": "'PT Mono', monospace"})
        $('.four').data('clicked',true)
    }
    else{
        $('.two').show()
        $('.happy').show()
        $('.sad').show()
        $('.angry').show()
        $('.confused').show()
        $('.sleep').show()
        $('.neutral').show()
        $('.text').remove()
        $('.four').data('clicked',false)
    }
}    
)
var confusedtimes = document.getElementsByClassName('confused')
$('.five').data('clicked',false).click(function(){
    if($('.five').data('clicked') === false){
        $('.happy').hide()
        $('.sad').hide()
        $('.angry').hide()
        $('.anxious').hide()
        $('.sleep').hide()
        $('.neutral').hide()
        $('.text').append("I've been confused " + confusedtimes.length + " times" ).css({"font-family": "'PT Mono', monospace"})
        $('.five').data('clicked',true)
    }
    else{
        $('.two').show()
        $('.happy').show()
        $('.sad').show()
        $('.angry').show()
        $('.anxious').show()
        $('.sleep').show()
        $('.neutral').show()
        $('.text').remove()
        $('.five').data('clicked',false)
    }
}    
)
var neutraltimes = document.getElementsByClassName('neutral')
$('.six').data('clicked',false).click(function(){
    if($('.six').data('clicked') === false){
        $('.happy').hide()
        $('.sad').hide()
        $('.angry').hide()
        $('.anxious').hide()
        $('.sleep').hide()
        $('.confused').hide()
        $('.text').append("I've been okay about things " + neutraltimes.length + " times" ).css({"font-family": "'PT Mono', monospace"})
        $('.six').data('clicked',true)
    }
    else{
        $('.two').show()
        $('.happy').show()
        $('.sad').show()
        $('.angry').show()
        $('.anxious').show()
        $('.sleep').show()
        $('.confused').show()
        $('.text').remove()
        $('.six').data('clicked',false)
    }
}    
)
var sleeptimes = document.getElementsByClassName('sleep')
$('.seven').data('clicked',false).click(function(){
    if($('.seven').data('clicked') === false){
        $('.happy').hide()
        $('.sad').hide()
        $('.angry').hide()
        $('.anxious').hide()
        $('.neutral').hide()
        $('.confused').hide()
        $('.text').append("I've slept for " + sleeptimes.length + " hours" ).css({"font-family": "'PT Mono', monospace"})
        $('.seven').data('clicked',true)
    }
    else{
        $('.two').show()
        $('.happy').show()
        $('.sad').show()
        $('.angry').show()
        $('.anxious').show()
        $('.neutral').show()
        $('.confused').show()
        $('.text').remove()
        $('.seven').data('clicked',false)
    }
}    
)