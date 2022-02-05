// Your code here

const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
};

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

function moveDodgerRight() {

    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    const rightEdge = left + 40;

    const right = 400 - rightEdge;

    //const widthNumbers = dodger.style.width.replace("px","");
    //const rightEdge = left + parseInt(widthNumbers,10);

    //const gameWidth = game.style.width.replace("px","");

    //const right = parseInt(gameWidth) - rightEdge;

    if (rightEdge < 400) {
        dodger.style.left = `${left+1}px`;
    }
};

document.addEventListener("keydown",function (e) {
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});
