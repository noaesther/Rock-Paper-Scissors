let computerHand = Math.floor(Math.random()*3);
if ( computerHand = 0 ) {
    computerHand = "rock"
} else if ( computerHand = 1){
    computerHand="paper"
}else if ( computerHand=2){
    computerHand="scissors"
}

function playGame(playerHand) { 
    document.getElementById('playerChoice').innerHTML="You chose " + playerHand;
    document.getElementById('computerChoice').innerHTML="Computer chose "+ computerHand;
    if ( playerHand == computerHand) {
        document.getElementById('winner').innerHTML="Nobody wins"
    } else if ( playerHand=="rock" && computerHand=="scissors") { 
        document.getElementById('winner').innerHTML="You win Dalton"
    }else if ( playerHand=="paper" && computerHand=="rock"){
        document.getElementById('winner').innerHTML="You win Dalton"
    }else if (playerHand=="scissors" && computerHand=="paper"){
        document.getElementById('winner').innerHTML="You win Dalton"
    }else{
        document.getElementById('winner').innerHTML="Computer wins"
    }
}



