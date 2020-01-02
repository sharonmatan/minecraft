
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
let trunck1Place = Math.floor(Math.random() * (248 - 241 + 1)) + 241;
let trunck2Place = Math.floor(Math.random() * (258 - 251 + 1)) + 250;

fullScreen.forEach(element => {
    if (element.id > 279) {
        makeMaterial(element,'dert',"dert","shovelId");
    }
    else if ((element.id == trunck1Place || element.id == (trunck1Place+20) || element.id == (trunck1Place+40)) || (element.id == trunck2Place || element.id == (trunck2Place+20) || element.id == (trunck2Place+40))) {
        makeMaterial(element,'trunk',"trunk","axeId")
    }
    else if (element.id == (trunck1Place-20) || element.id == (trunck1Place-21) || element.id == (trunck1Place-19) || element.id == (trunck1Place-40) || element.id == (trunck1Place-39) || element.id == (trunck1Place-41) || element.id == (trunck2Place-19) || element.id == (trunck2Place-20) || element.id == (trunck2Place-21) || element.id == (trunck2Place-39) || element.id == (trunck2Place-40) || element.id == (trunck2Place-41)) {
        makeMaterial(element,'tree',"tree","pickaxeId")
        
    }
});
