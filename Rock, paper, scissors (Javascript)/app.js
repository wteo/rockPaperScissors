const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const figure = document.querySelector("figure");
const images = document.querySelectorAll(".image");

function random() {
    const choices = [rock, paper, scissors];
    const randomization = choices[Math.floor(Math.random() * choices.length)];
    return randomization;
    }

function resize() {
    for (let image of images) {
        image.style.width = "100px";
        image.style.height = "100px";
        }
    }

function getResults(chosenImage, statement) {
    const p = document.createElement("p");
    const br = document.createElement("br");
    p.innerText = statement;
    figure.append(p);
    p.append(br);
    p.append(chosenImage);
    }

function playerInput() {
    for (let player of images) {
        player.addEventListener("click", function() {
            const computer = random();
            if (player === computer) {
                    figure.innerText = "It's a tie!";
                    getResults(player, "Both you and your computer chose:");
                    resize();
               } else if (player === rock && computer === scissors || player === paper && computer === rock ||
                player === scissors && computer === paper) {
                    figure.innerText = "You win!";
                    getResults(player, "You chose:");
                    getResults(computer, "Your computer chose:");
                    resize();
                } else {
                figure.innerText = "Sorry, you lose. :-( Please try again.";
                getResults(player, "You chose:");
                getResults(computer, "Your computer chose:");
                resize();
                }
            })
        }
    }

playerInput();
