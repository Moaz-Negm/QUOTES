
var Queot =[
    {
        Queote : "It's not what happens to you, but how you react to it that matters.",
        author: "-Epictetus"
    },
    {
        Queote :"The best way to predict the future is to invent it.",
        author: "-Wayne Gretzy"
    },
    {
        Queote : "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "-Nelson Mandela"
    },
    {
        Queote : "Success usually comes to those who are too busy to be looking for it.",
        author: "-Henry David Thoreau"
    },
    {
        Queote : "So many books, so little time.",
        author: "-Frank Zappa"
    },
    {
        Queote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "-Albert Einstein"
    },
    {
        Queote : "A room without books is like a body without a soul.",
        author: "-Mae West"
    },
    {
        Queote : "Your time is limited, don’t waste it living someone else’s life.",
        author: "- Steve Jobs"
    },
    {
        Queote : "Do what you can, with what you have, where you are.",
        author: "-Stephen Chbosky"
    },
    
   
]

var same;

function changeQueotes() {

    var x = Math.floor(Math.random() * Queot.length);

    if (x == same) {

        x = Queot.length - same;

    }


    document.getElementById("Queot").innerHTML = `

        <q class="d-block mt-5 fs-2 fw-semibold" id="">${Queot[x].Queote}</q>

        <p class="fs-3 mt-3 fw-bold" id="author">${Queot[x].author}</p>

    `;
    same = x;
}
