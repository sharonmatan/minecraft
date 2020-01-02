
const backGame = document.querySelector(".backGame");
// backGame.appendChild(dert)
const matrix = [];
let k = 0
for (var i = 0; i < 20; i++) {
    matrix[i] = [];
    for (var j = 0; j < 20; j++) {
        let fullScreen = document.createElement("div");
        fullScreen.classList.add('fullscreen')
        fullScreen.addEventListener("click", bank.deploy)
        fullScreen.id = k
        k++
        backGame.appendChild(fullScreen)
        matrix[i][j] = j;
    }
}

fullScreen = document.querySelectorAll('.fullscreen');
fullScreen.forEach(element => {
    if (element.id > 279) {
        makeMaterial(element,'dert',"dert","shovelId")
    }
    else if (element.id == 277 || element.id == 267 || element.id == 227 || element.id == 237 || element.id == 247 || element.id == 257) {
        makeMaterial(element,'trunk',"trunk","axeId")
    }
    else if (element.id == 186 || element.id == 187 || element.id == 188 || element.id == 196 || element.id == 197 || element.id == 198 || element.id == 206 || element.id == 207 || element.id == 208 || element.id == 216 || element.id == 217 || element.id == 218) {
        makeMaterial(element,'tree',"tree","pickaxeId")
        
    }
});