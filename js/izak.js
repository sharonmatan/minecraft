let bank = {}
bank.dert = 0
bank.tree = 0
bank.trunk = 0
bank.deploy = function(e){
    let material = e.target.classList.value
    if(material == "bankDert"){
        makeMaterial(e.target,'dert','dert','shovelId')
    }

}

const saveRemove = (e) => {
    if (tool == e.target.id) {
        e.target.style.display = "none";
    }
}
const moveToBank = (e) => {
    let element = e.target.classList.value
    if (element === "dert") {
        bank.dert++
    }
    else if (element === "tree") {
        bank.tree++
    }
    else if (element === "trunk") {
        bank.trunk++
    }
}
let makeMaterial = (element, material, mClass,tool) => {
    var material = document.createElement("div");
    material.addEventListener("click", (e) => { saveRemove(e); moveToBank(e) })
    material.setAttribute("id",tool)
    material.classList.add(mClass);
    element.appendChild(material)
}
