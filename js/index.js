let dert = document.createElement("div");
dert.classList.add("dert");
const backGame = document.querySelector(".backGame");
backGame.appendChild(dert)
const matrix = [];
for(var i=0; i<10; i++) {
    matrix[i] = [];
    for(var j=0; j<10; j++) {
        matrix[i][j] = j;
    }
}
