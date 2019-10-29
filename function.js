const userScore=0;
const pcScore=0;
const userScoreSpan=document.getElementById("user-score");
const userPcScoreSpan=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board")
const result_div=document.querySelector(".result");
const pedra_div = document.getElementById("pedra");
const papel_div = document.getElementById("papel");
const tesoura_div= document.getElementById("tesoura");
const lizard_div= document.getElementById("lizard");
const spock_div= document.getElementById("spock");

function game1(userChoice){
    const computerChoice=getComputerChoice_One();
}

function game2(userChoice){
    const computerChoice=getComputerChoice_Two();
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
        game("pedra");
    })

    papel_div.addEventListener('click',function(){
        game("papel");
    })

    tesoura_div.addEventListener('click',function(){
        game("tesoura");
    })

    lizard_div.addEventListener('click',function(){
        game("lizard");
    })

    spock_div.addEventListener('click',function(){
        game("spock");
    })

}

main();