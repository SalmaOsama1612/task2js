
function randomQuote(){
    var quotes=[
        "Always forgive your enemies; nothing annoys them so much." ,
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "A friend is someone who knows all about you and still loves you.",
        "A thing is not necessarily true because a man dies for it.",
        "Try not to become a man of success. Rather become a man of value.",
        "It is better to fail in originality than to succeed in imitation.",
        "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "Don't spend time beating on a wall, hoping to transform it into a door."
];
    var quotesPerson=[
        "― Oscar Wilde",
        "― Mahatma Gandhi",
        "― Elbert Hubbard",
        "― Oscar Wilde",
        "― Albert Einstein",
        "― Herman Melville",
        "― Winston S. Churchill",
        "― Coco Chanel"
];
var randomNum=Math.floor(Math.random()*quotes.length)
document.getElementById("text").innerHTML=quotes[randomNum];
document.getElementById("person").innerHTML=quotesPerson[randomNum];
}
randomQuote()