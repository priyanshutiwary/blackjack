let playerdetail={
    name:"YOUR CHIPS",
    chips:200
}

let sumo=document.getElementById("sum");
let cardso=document.getElementById("cards-h");
let messageo=document.getElementById("message-h");
let playero=document.getElementById("player");
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

playero.textContent=playerdetail.name+":$"+playerdetail.chips;
function getrandomcard(){
    let randomnumber = Math.floor( Math.random()*13 )+1
    if(randomnumber>10){
        return 10
    }
    else if(randomnumber ===1){
        return 11
    }
    else{
        return randomnumber
    }
}
function startgame(){
   isAlive=true
   let firstcard=getrandomcard()
   let secondcard=getrandomcard()
   cards=[firstcard,secondcard]
   sum=firstcard+secondcard
   rendergame()
}
function rendergame(){
    cardso.textContent="cards:"
    for(i=0;i<cards.length;i++){
        cardso.textContent+=cards[i]+" "
    }
    sumo.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageo.textContent = message
}
function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getrandomcard()
        sum += card
        cards.push(card)
        rendergame()        
    }
}
