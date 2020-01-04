let bank = {};
bank.dert = 0;
bank.tree = 0;
bank.trunk = 0;
bank.selected = "";
bank.deploy = function(e) {
    if (bank.selected == "bankDert" && bank.dert > 0) {
        makeMaterial(e.target, "dert", "dert", "shovelId");
        bank.dert--;
    } else if (bank.selected == "bankTrunk" && bank.trunk > 0) {
        makeMaterial(e.target, "trunk", "trunk", "axeId");
        bank.trunk--;
    } else if (bank.selected == "bankTree" && bank.tree > 0) {
        makeMaterial(e.target, "tree", "tree", "pickaxeId");
        bank.tree--;
    }
};

let bankMaterial = document.querySelectorAll(".elementBank img");
bankMaterial.forEach(material => {
    material.addEventListener('click', function(e) {
        bank.selected = e.target.classList.value
        backGame.setAttribute("id", `${e.target.classList.value}`)
        tool = ""
    })
});

const saveRemove = (e) => {
    if (tool == e.target.id) {
        e.target.style.display = "none";

    }
}
const moveToBank = (e) => {
    let element = e.target.classList.value
    if (element === "dert" && tool === "shovelId") {
        bank.dert++
    } else if (element === "tree" && tool === "pickaxeId") {
        bank.tree++
    } else if (element === "trunk" && tool === "axeId") {
        bank.trunk++
    }
}
let makeMaterial = (element, material, mClass, tool) => {
    var material = document.createElement("div");
    material.addEventListener("click", (e) => {
        saveRemove(e);
        moveToBank(e);
    })
    material.setAttribute("id", tool)
    material.classList.add(mClass);
    element.appendChild(material);
}

const removeChild = () => {
    fullscreen.forEach(element => {
        element.innerHTML = ""
    });
    g++
    if (trunck1Place - g < 240) {
        return g = 0, trunck1Place = 259, sort(g)

    }
    sort(g)



}
const removeChild2 = () => {
    fullscreen.forEach(element => {
        element.innerHTML = ""
    });
    g--
    if (trunck1Place - g > 259) {
        return g = 0, trunck1Place = 240, sort(g)

    }
    sort(g)



}