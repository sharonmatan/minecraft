let bank = {}
bank.dert = 0
bank.tree = 0
bank.trunk = 0
bank.selected = ""
bank.deploy = function(e) {
    if (bank.selected == "bankDert") {
        makeMaterial(e.target, 'dert', 'dert', 'shovelId')
    } else if (bank.selected == "bankTrunk") {
        makeMaterial(e.target, 'trunk', 'trunk', 'axeId')
    } else if (bank.selected == "bankTree") {
        makeMaterial(e.target, 'tree', 'tree', 'pickaxeId')
    }

}
let bankMaterial = document.querySelectorAll('.elementBank img')
bankMaterial.forEach(material => {
    material.addEventListener('click', function(e) {
        bank.selected = e.target.classList.value
        backGame.setAttribute("id", `${e.target.classList.value}`)
    })
});

const saveRemove = (e) => {
    if (tool == e.target.id) {
        e.target.style.display = "none";
    }
}
const moveToBank = (e) => {
    let element = e.target.classList.value
    if (element === "dert") {
        bank.dert++
    } else if (element === "tree") {
        bank.tree++
    } else if (element === "trunk") {
        bank.trunk++
    }
}
let makeMaterial = (element, material, mClass, tool) => {
    var material = document.createElement("div");
    material.addEventListener("click", (e) => {
        saveRemove(e);
        moveToBank(e)
    })
    material.setAttribute("id", tool)
    material.classList.add(mClass);
    element.appendChild(material)
}