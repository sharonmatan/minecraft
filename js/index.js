const backGame = document.querySelector(".backGame");
const matrix = [];
let k = 0
for (var i = 0; i < 20; i++) {
    matrix[i] = [];
    for (var j = 0; j < 20; j++) {
        let fullScreen = document.createElement("div");
        fullScreen.classList.add('fullscreen');
        fullScreen.addEventListener("click", bank.deploy);
        fullScreen.id = k;
        k++;
        backGame.appendChild(fullScreen);
        matrix[i][j] = j;
    }
}

fullScreen = document.querySelectorAll('.fullscreen');
let trunck1Place = Math.floor(Math.random() * (248 - 241 + 1)) + 241;
let trunck2Place = Math.floor(Math.random() * (258 - 251 + 1)) + 251;
let trunck3Place = Math.floor(Math.random() * (248 - 241 + 1)) + 241;
let trunck4Place = Math.floor(Math.random() * (258 - 252 + 1)) + 251;

let hoverDiv = []
let currnet = 0
for (let i = 1; i < 81; i++) {
    hoverDiv.push(currnet)
    currnet += 20
    if (i === 20) {
        currnet = 1
    } else if (i === 40) {
        currnet = 18
    } else if (i === 60) {
        currnet = 19
    }
}
let g = 0
const sort = (num) => {
    fullScreen.forEach(element => {
        if (element.id > 279) {
            makeMaterial(element, 'dert', "dert", "shovelId");
        } else if ((element.id == trunck1Place - num || element.id == (trunck1Place - num + 20) || element.id == (trunck1Place - num + 40))) { //|| (element.id == trunck2Place - num || element.id == (trunck2Place - num + 20) || element.id == (trunck2Place - num + 40))) { 
            makeMaterial(element, 'trunk', "trunk", "axeId")
        } else if (element.id == (trunck1Place - num - 20) || element.id == (trunck1Place - num - 21) || element.id == (trunck1Place - num - 19) || element.id == (trunck1Place - num - 40) || element.id == (trunck1Place - num - 39) || element.id == (trunck1Place - num - 41)) { //|| element.id == (trunck2Place - num - 19) || element.id == (trunck2Place - num - 20) || element.id == (trunck2Place - num - 21) || element.id == (trunck2Place - num - 39) || element.id == (trunck2Place - num - 40) || element.id == (trunck2Place - num - 41)) {
            makeMaterial(element, 'tree', "tree", "pickaxeId")
        } else if (element.id == (trunck3Place - 200)) {
            makeMaterial(element, 'cloud', "cloud")
        } else if (element.id == (trunck4Place - 200)) {
            makeMaterial(element, 'cloud', "cloud")
        } else if (hoverDiv.includes(parseInt(element.id))) {
            element.addEventListener("click", function() {
                removeChild()

            })
        }
    });
}
sort(g)