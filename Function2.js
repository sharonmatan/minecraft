const toolsBox = document.querySelectorAll(".toolsBox");
const fullscreen = document.querySelectorAll(".fullscreen");
let tool = "";
for (let i = 0; i < toolsBox.length; i++) {
    toolsBox[i].addEventListener("mousedown", function() {
        backGame.setAttribute("id", `${toolsBox[i].alt}`), (tool = toolsBox[i].id);
        bank.selected = "";
        return tool;
    });
}

function newGame() {
    const newGame = document.querySelector("#newGame");
    newGame.addEventListener("click", function() {
        location.reload();
    });
}

newGame();