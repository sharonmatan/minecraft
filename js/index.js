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
let g = 1
const sort = (num) => {
    fullScreen.forEach(element => {
        if (element.id > 319 || 299 < element.id && element.id < 320 || element.id == 294 - num || element.id == 295 - num || element.id == 275 - num) {
            makeMaterial(element, 'dert', "dert", "shovelId");
        } else if ((element.id == 282 - num || element.id == trunck1Place - num || element.id == (trunck1Place - num + 20) || element.id == (trunck1Place - num + 40))) { //|| (element.id == trunck2Place - num || element.id == (trunck2Place - num + 20) || element.id == (trunck2Place - num + 40))) { 
            makeMaterial(element, 'trunk', "trunk", "axeId")
        } else if (element.id == (trunck1Place - num - 20) || element.id == (trunck1Place - num - 21) || element.id == (trunck1Place - num - 19) || element.id == (trunck1Place - num - 40) || element.id == (trunck1Place - num - 39) || element.id == (trunck1Place - num - 41)) { //|| element.id == (trunck2Place - num - 19) || element.id == (trunck2Place - num - 20) || element.id == (trunck2Place - num - 21) || element.id == (trunck2Place - num - 39) || element.id == (trunck2Place - num - 40) || element.id == (trunck2Place - num - 41)) {
            makeMaterial(element, 'tree', "tree", "pickaxeId")
        } else if (element.id == (trunck3Place - num - 220)) {
            makeMaterial(element, 'cloud', "cloud")
        } else if (element.id == (trunck4Place - num - 200)) {
            makeMaterial(element, 'cloud', "cloud")
        } else if (hoverDiv.includes(parseInt(element.id)) && hoverDiv.indexOf(parseInt(element.id)) == 6 || hoverDiv.indexOf(parseInt(element.id)) == 7 || hoverDiv.indexOf(parseInt(element.id)) == 5) {
            element.classList.add("move")
            element.addEventListener("mouseover", removeChild2)
        } else if (hoverDiv.includes(parseInt(element.id)) && hoverDiv.indexOf(parseInt(element.id)) == 67 || hoverDiv.indexOf(parseInt(element.id)) == 66 || hoverDiv.indexOf(parseInt(element.id)) == 65) {
            element.classList.add("move")
            element.addEventListener("mouseover", removeChild)



        }
    });
}
sort(g)