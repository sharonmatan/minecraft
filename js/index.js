
const backGame = document.querySelector(".backGame");
// backGame.appendChild(dert)
const matrix = [];
for (var i = 0; i < 10; i++) {
    matrix[i] = [];
    for (var j = 0; j < 10; j++) {
        let fullScreen = document.createElement("div");
        fullScreen.classList.add('fullscreen')
        fullScreen.id = [i] + [j]
        backGame.appendChild(fullScreen)
        matrix[i][j] = j;
    }
}
fullScreen = document.querySelectorAll('.fullscreen');
fullScreen.forEach(element => {
    if (element.id > 79) {
        let dert = document.createElement("div");
        dert.classList.add("dert");
        element.appendChild(dert)
    }
    else if (element.id == 77 || element.id == 67) {
        let trunk = document.createElement("div");
        trunk.classList.add("trunk");
        element.appendChild(trunk)
    }
    else if (element.id == 56 || element.id == 57 || element.id == 58 || element.id == 46 || element.id == 47 || element.id == 48) {
        let tree = document.createElement("div");
        tree.classList.add("tree");
        element.appendChild(tree)
    }
});
