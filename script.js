'use strict'

const playEl = document.getElementById('play');
const matchEl = document.getElementById('match');
const introEl = document.getElementById('intro');
const clear = document.getElementById('clear');
const finish_clear = document.getElementById('finish_clear');
const player_option = document.querySelectorAll('.options button');
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const winnerEl = document.querySelector(".winner");
const playerscoreEl = document.querySelector('.player_score p');
const computerscoreEl = document.querySelector('.computer_score p');
const playerHandImageEl = document.querySelector('.player-hand');
const computerHandImageEl = document.querySelector('.computer-hand');
//computer options
const computerOptions = ["rock", "paper", "scissor"];

//player score to maintain player and computer score we are using a global variable to store the data

let player_score = 0;
let computer_score = 0;

//function to update score
function updatescore() {
    playerscoreEl.innerText = player_score;
    computerscoreEl.innerText = computer_score;

}


//comparing hands function

function CompareHands(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        winnerEl.textContent = `it's a tie`;
        return;
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            winnerEl.textContent = `computer wins`;
            computer_score++;
            updatescore();
            return;
        }
        else {
            winnerEl.textContent = `you win`;
            player_score++;
            updatescore();
            return;
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'scissor') {
            winnerEl.textContent = `computer wins`;
            computer_score++;
            updatescore();
            return;
        }
        else {
            winnerEl.textContent = `you win`;
            player_score++;
            updatescore();
            return;
        }
    }

    if (playerChoice === 'scissor') {
        if (computerChoice === 'rock') {
            winnerEl.textContent = `computer wins`;
            computer_score++;
            updatescore();
            return;
        }
        else {
            winnerEl.textContent = `you win`;
            player_score++;
            updatescore();
            return;
        }
    }


}

//player options
player_option.forEach(option => {
    option.addEventListener('click', function () {
        console.log(this.textContent); //textContent will give the text which is placed inside the element same like innerText

        //computer generated random value
        const computer_number = Math.floor(Math.random() * 3);
        const computer_choice = computerOptions[computer_number];

        // playerHandImageEl.innerHTML = `<img src="./image/${this.textContent}.png" alt='image'>`;
        // computerHandImageEl.innerHTML = `<img src="./image/${computer_choice}.png" alt='image'`;

        playerHandImageEl.src = `./image/${this.textContent}.png`;
        computerHandImageEl.src = `./image/${computer_choice}.png`;

        CompareHands(this.textContent, computer_choice);
    })
})

function init() {
    matchEl.classList.remove('fadeIn');
    matchEl.classList.add('fadeOut');
    introEl.classList.remove('fadeOut');
    introEl.classList.add('fadeIn');
    playerscoreEl.innerText = 0;
    computerscoreEl.innerText = 0;
    player_score = 0;
    computer_score = 0;
    document.getElementById('result').innerHTML = null;
}
playEl.addEventListener('click', () => {
    if (introEl.classList.contains('fadeIn'))
        introEl.classList.remove('fadeIn');
    introEl.classList.add('fadeOut');
    matchEl.classList.remove('fadeOut');
    matchEl.classList.add('fadeIn');

})

clear.addEventListener('click', () => {
    init();
})

finish_clear.addEventListener('click', () => {
    document.getElementById('result').innerHTML = computer_score > player_score ? `<h1>the overall winner is Computer</h1>` : `<h1>the overall winner is you</h1>`;
})

