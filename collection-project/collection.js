
var emojis  = [
    {
        "date": "14",
        "day": "Tuesday",
        "emotions" : ["😊","😊","😊","😊","😊","😴","😴","😴","😕","😕","😕","😕","😴","😴","😴","😐","😔","😔","😔","😐","😐","😐","😊","😊"]
    },

    {
        "date": "15",
        "day": "Wednesday",
        "emotions" : ["😊","😊","😊","😊","😊","😊","😴","😴","😴","😴","😴","😴","😴","😴","😐","😐","😐","😐","😔","😔","😰","😰","😐","😐"]
    },
    {
        "date": "16",
        "day": "Thursday",
        "emotions": ["😐","😐","😐","😊","😊","😊","😴","😴","😴","😊","😊","😕","😕","😴","😴","😰","😰","😠","😠","😰","😰","😔","😔","😊"]
    },
    
    {
        "date": "17",
        "day": "Friday",
        "emotions": ["😊","😊","😊","😊","😊","😊","😊","😴","😴","😴","😴","😴","😴","😴","😴","😐","😐","😰","😕","😕","😠","😔","😔","😐"]
    },

    {
        "date": "18",
        "day": "Saturday",
        "emotions": ["😐","😐","😊","😊","😊","😊","😊","😴","😴","😴","😴","😴","😴","😴","😴","😐","😐","😊","😔","😔","😔","😐","😐","😐"]
    },
    {
        "date": "19",
        "day": "Sunday",
        "emotions": ["😐","😐","😐","😐","😐","😊","😊","😴","😴","😴","😴","😴","😴","😴","😴","😰","😰","😰","😐","😐","😐","😐","😔","😔"]
    },
    {
        "date": "20",
        "day": "Monday",
        "emotions": ["😔","😔","😔","😰","😰","😰","😰","😴","😴","😴","😴","😴","😴","😴","😐","😐","😐","😰","😰","😰","😕","😕","😕","😊"]
    },
    {
        "date": "21",
        "day": "Tuesday",
        "emotions": ["😊","😊","😊","😊","😊","😊","😊","😴","😴","😴","😴","😴","😴","😴","😴","😰","😔","😔","😐","😐","😐","😐","😐","😐"]
    },
    {
        "date": "22",
        "day": "Wednesday",
        "emotions": ["😐","😐","😐","😐","😊","😊","😴","😴","😴","😴","😴","😴","😴","😴","😔","😔","😰","😰","😕","😕","😕","😕","😕","😕"]
    },
    {
        "date": "23",
        "day": "Thursday",
        "emotions": ["😕","😕","😊","😊","😊","😕","😕","😕","😕","😕","😕","😕","😴","😴","😴","😴","😰","😰","😐","😐","😐","😕","😊","😊"]
    },
    {
        "date": "April 24",
        "day": "Friday",
        "emotions": ["😊","😐","😐","😐","😐","😕","😴","😴","😴","😴","😴","😴","😴","😴","😴","😐","😕","😰","😰"]
    }

]

// var emojis = [
// {
//     "date": "14",
//     "day": "Tuesday",
//     "emotions" : ["<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='meh'>&#128528;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>"]
// },
// {
//     "date": "15",
//     "day": "Wednesday",
//     "emotions" : ["<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>"]
// },
// {
//     "date": "16",
//     "day": "Thursday",
//     "emotions": ["<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='pissed'>&#128544;</div>","<div class='pissed'>&#128544;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='blush'>&#128522;</div>"]
// },
// {
//     "date": "17",
//     "day": "Friday",
//     "emotions": ["<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>",,"<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='sweat'>&#128560;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='pissed'>&#128544;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='meh'>&#128528;</div>"]
// },
// {
//     "date": "18",
//     "day": "Saturday",
//     "emotions": ["<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='blush'>&#128522;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>"]
// },
// {
//     "date": "19",
//     "day": "Sunday",
//     "emotions": ["<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>"]
// },
// {
//     "date": "20",
//     "day": "Monday",
//     "emotions": ["<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='blush'>&#128522;</div>"]
// },
// {
//     "date": "21",
//     "day": "Tuesday",
//     "emotions": ["<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='sweat'>&#128560;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>"]
// },
// {
//     "date": "22",
//     "day": "Wednesday",
//     "emotions": ["<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='sorry'>&#128532;</div>","<div class='sorry'>&#128532;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>"]
// },
// {
//     "date": "23",
//     "day": "Thursday",
//     "emotions" : ["<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='unsure'>&#128533;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='zzz'>&#128564;</div>","<div class='sweat'>&#128560;</div>","<div class='sweat'>&#128560;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='meh'>&#128528;</div>","<div class='unsure'>&#128533;</div>","<div class='blush'>&#128522;</div>","<div class='blush'>&#128522;</div>"]
// }]

console.log(emojis);
console.log(emojis[0].emotions);
for(var i = 0; i < emojis.length; i++ ) {
    $('.rows').append("<div class='row " + emojis[i].date + "' </div>")
     for(var j = 0; j < emojis[i].emotions.length; j++) {
        $('.row').append("<div>" + emojis[i].emotions[j] + "</div>")
    }
}

// $(emojis.emotions).hover(function() {
//     $(emojis[0].emotions)
// }


