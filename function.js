let userScore=0;
let pcScore=0;
const userScoreSpan=document.getElementById("user-score");
const userPcScoreSpan=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board")
const result_div=document.querySelector(".result");
const pedra_div = document.getElementById("pedra");
const papel_div = document.getElementById("papel");
const tesoura_div= document.getElementById("tesoura");
const lizard_div= document.getElementById("lizard");
const spock_div= document.getElementById("spock");


function win(){
console.log("Você Venceu");
userScore++;
userScoreSpan.innerHTML=userScore;
userPcScoreSpan.innerHTML=pcScore;
}

function lose(){
    console.log("Você perdeu");
     pcScore++;
     userScoreSpan.innerHTML=userScore;
    userPcScoreSpan.innerHTML=pcScore;
}

function empate(){
    console.log("Empatou,jogue novamente");
    userScoreSpan.innerHTML=userScore;
    userPcScoreSpan.innerHTML=pcScore;
}

function game1(userChoice){
    const computerChoice=getComputerChoice_One();
    console.log("No game 1 o Usuario escolheu " + userChoice);
    console.log("No game 1 o PC escolheu " + computerChoice);
    switch(userChoice + computerChoice){
        case "pedratesoura":
        case "papelpedra":
        case "tesourapapel":
            win();
            break;
        case "tesourapedra":
        case "pedrapapel":
        case "papeltesoura":
           lose();
            break;
        case "pedrapedra":
        case "papelpapel":
        case "tesouratesoura":
            empate();
            break;
    }
}

function game2(userChoice){
    const computerChoice=getComputerChoice_Two();
    console.log("No game 2 o Usuario escolheu " + userChoice);
    console.log("No game 2 o PC escolheu " + computerChoice);
    switch(userChoice + computerChoice){
        case "pedratesoura":
        case "pedralizard":
        case "papelpedra":
        case "papelspock":
        case "tesourapapel":
        case "tesouralizard":
        case "lizardpapel":
        case "lizardspock":
        case "spocktesoura":
        case "spockpedra":
            win();
            break;
        case "tesourapedra":
        case "lizardpedra":
        case "pedrapapel":
        case "spockpapel":
        case "papeltesoura":
        case "lizardtesoura":
        case "papellizard":
        case "spocklizard":
        case "tesouraspock":
        case "pedraspock":
            lose();
            break;
        case "pedrapedra":
        case "papelpapel":
        case "tesouratesoura":
        case "lizardlizard":
        case "lizardlizard":
            empate();
            break;
    }

}

function getComputerChoice_One() {
    const choices=["pedra","papel","tesoura"]
    const randomNumber= Math.floor(Math.random()*3);
    return choices[randomNumber];

}
 
function getComputerChoice_Two() {
    const choices=["pedra","papel","tesoura","lizard","spock"]
    const randomNumber= Math.floor(Math.random()*5);
    return choices[randomNumber];

}

function main(){
  

    pedra_div.addEventListener('click',function(){
        game1("pedra");
    })

    papel_div.addEventListener('click',function(){
        game1("papel");
    })

    tesoura_div.addEventListener('click',function(){
        game1("tesoura");
    })

    lizard_div.addEventListener('click',function(){
        game2("lizard");
    })

    spock_div.addEventListener('click',function(){
        game2("spock");
    })

}

main();
