let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetGame")
let newGameBtn = document.querySelector(".newGame")
let msg = document.querySelector(".msg")
let turn0 = true;
let count = 0
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame = () => {
    turn0 = true;
    enebledBoxes();
    msg.innerText = " "
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if(turn0 ) {
            box.innerText = "O";
            turn0 = false;
            count = count + 1
            box.style.backgroundColor = "white";
            box.style.color = "black";
        }else {
            box.innerText = "X";
            turn0 = true;
            count = count + 1
            box.style.backgroundColor = "white";
            box.style.color = "black";
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enebledBoxes = () => {
    for (let box of boxes) {
        box.enebled = true;
        box.innerHTML = ""
        box.disabled = false;
    }
}
function showWinner (winner) {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disabledBoxes();
}
const draw = () => {
    msg.innerText = `Match was a Draw,click on new game to start`;
    disabledBoxes();
}

 
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        let Draw = true
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                Draw = false
            }
            else if(count == 9 && Draw) {
                draw(); 
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

