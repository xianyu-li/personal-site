// var emojis  = [
//     {
//         "name": "happy",
//         "emoji": "😊",
//     },
//     {
//         "name": "sad",
//         "emoji": "😔"
//     },
//     {
//         "name": "sleep",
//         "emoji": "😴"
//     },
//     {
//         "name": "meh",
//         "emoji": "😐"
//     },
//     {
//         "name": "anxious",
//         "emoji": "😰"
//     },
//     {
//         "name": "angry",
//         "emoji": "😠"
//     },
//     {
//         "name": "confused",
//         "emoji": "😕"
//     },
// ]

var emojis  = [
    {
        "date": "14",
        "day": "Tuesday",
        "emotions": "😊😊😊😊😊😴😴😴😕😕😕😕😴😴😴😐😔😔😔😐😐😐😊😊"
    },

    {
        "date": "15",
        "day": "Wednesday",
        "emotions": "😊😊😊😊😊😊😴😴😴😴😴😴😴😴😐😐😐😐😔😔😰😰😐😐"
    },
    {
        "date": "16",
        "day": "Thursday",
        "emotions": "😐😐😐😊😊😊😴😴😴😊😊😕😕😴😴😰😰😠😠😰😰😔😔😊"
    },
    
    {
        "date": "17",
        "day": "Friday",
        "emotions": "[,😊,😊,😊,😊,😊,😊,😊,😴,😴,😴,😴,😴,😴,😴,😴,😐,😐,😰,😕,😕,😠,😔,😔,😐]"
    },

    {
        "date": "18",
        "day": "Saturday",
        "emotions": "😐😐😊😊😊😊😊😴😴😴😴😴😴😴😴😐😐😊😔😔😔😐😐😐"
    },
    {
        "date": "19",
        "day": "Sunday",
        "emotions": "[😐,😐,😐,😐,😐,😊,😊,😴,😴,😴,😴,😴,😴,😴,😴,😰,😰,😰,😐,😐,😐,😐,😔,😔]"
    },
    {
        "date": "20",
        "day": "Monday",
        "emotions": "[😔,😔,😔,😰,😰,😰,😰,😴,😴,😴,😴,😴,😴,😴,😐,😐,😐,😰,😰,😰,😕,😕,😕,😊]"
    },
    {
        "date": "April 21",
        "day": "Tuesday",
        "emotions": "[😊,😊,😊,😊,😊,😊,😊,😴,😴,😴,😴,😴,😴,😴,😴,😰,😔,😔,😐,😐,😐,😐,😐,😐]"
    },
    {
        "date": "April 22",
        "day": "Wednesday",
        emotions: "[&#128528;,&#128528;,&#128528;,&#128528;,&#128522;,&#128522;,&#128564;,&#128564;,&#128564;,&#128564;,&#128564;,&#128564;,&#128564;,&#128564;,&#128532;,&#128532;,&#128560;,&#128560;,&#128533;,&#128533;,&#128533;,&#128533;,&#128533;,&#128533;]"
    },
    {
        "date": "April 23",
        "day": "Thursday",
        emotions: "[😕,😕,😊,😊,😊,😕,😕,😕,😕,😕,😕,😕,😴,😴,😴,😴,😰,😰,😐,😐,😐,😕,😊,😊]"
    }]
//     {
//         "date": "April 24",
//         "day": "Friday",
//         "emotions": "😊😐"
//     }

// ]

console.log(emojis);
console.log(emojis[0].emotions);
for(var i = 0; i < emojis.length; i++ ) {
    $('.rows').append("<div class='row'></div>")
     for(var j = 0; j < emojis[i].emotions.length; j++) {
        $('.row').append("<div>" + emojis[i].emotions[j] + "</div>")
    }
}




