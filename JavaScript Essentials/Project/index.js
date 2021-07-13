let cards = [
    {
        image: "./images/naruto.jpg",
        value: 1,
        status: "closed",
    },
    {
        image: "./images/naruto.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "./images/sakura.jpg", 
        value: 2,
        status: "closed"
    },
    {
        image: "./images/sakura.jpg", 
        value: 2,
        status: "closed"
    },
    {
        image: "./images/lee.jpg", 
        value: 3,
        status: "closed"
    },
    {
        image: "./images/lee.jpg", 
        value: 3,
        status: "closed"
    },
    {
        image: "./images/saske.jpg", 
        value: 4,
        status: "closed"
    },
    {
        image: "./images/saske.jpg", 
        value: 4,
        status: "closed"
    },
    {
        image: "./images/kakashi.jpg", 
        value: 5,
        status: "closed"
    },
    {
        image: "./images/kakashi.jpg", 
        value: 5,
        status: "closed"
    }
]

// Shuffling algorithm.

for (let i=cards.length-1; i>=0; i--){
    let j = Math.floor(Math.random()*(i+1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}


// console.log(cards);

let val1=null, val2=null;
let cardCount=1;
let score = 0
const openCard = (indx) =>{
    cards[indx].status = "opned";
    if(cardCount === 1){
        val1 = cards[indx].value;
        cardCount++;
    }else if(cardCount === 2){
        val2 = cards[indx].value;
        cardCount++
        console.log(val1, val2)
        if(val1 === val2){
            score++;
            document.getElementById("score").innerHTML = score;

            // reset After one guess
            val1 =null;
            val2 = null;
            cardCount = 1;
        }else{

            alert("Game Over!!..");
            location.reload();
        }
    }

    displayCards(cards);
}


// Making the cards appear on the screen.

const displayCards = (data) => {
    let cardStr = "";

    data.map((ele,indx) => {
        cardStr += `<div class="card" style="background-image: url('${ele.image}')">
                        <div class = " overlay ${ele.status} "  onclick = "openCard(${indx})" > </div>
                    </div>\n`
    })
    document.getElementById("cards").innerHTML = cardStr;
}

displayCards(cards);
