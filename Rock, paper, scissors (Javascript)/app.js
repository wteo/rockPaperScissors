const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const figure = document.querySelector("figure");
const images = document.querySelectorAll(".image");


function border() {
    const images = document.querySelectorAll(".image");
    for (let image of images) {
        image.addEventListener("mouseover", function() {
            image.style.border = "3px solid black";
            });
        image.addEventListener("mouseout", function() {
            image.style.border = "";
            });
        }
    }

function random() {
    const choices = [rock, paper, scissors];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
    }

for (let playerTurn of images) {
    playerTurn.addEventListener("click", function() {
        const computerTurn = random();
        if (playerTurn === computerTurn) {
            figure.innerHTML = "It's a tie!";
            console.log(playerTurn);
            console.log(computerTurn);
            } else if (playerTurn === rock && computerTurn === scissors || playerTurn === paper && computerTurn === rock ||
            playerTurn === scissors && computerTurn === paper) {
            figure.innerHTML = "You win!";
            console.log(playerTurn);
            console.log(computerTurn);
            } else {
            figure.innerHTML = "Sorry, you lose. :-( Please try again.";
            console.log(playerTurn);
            console.log(computerTurn); 
            }
        })
    }

border();
