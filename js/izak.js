let bank = {}
bank.dert = 0
bank.tree = 0
bank.trunk = 0
// bank.deploy = function(){
// e.taget.
// }

const saveRemove = (e) => {
    e.target.style.display = "none";
}
const moveToBank=(e)=>{
    let element = e.target.classList.value
    if(element === "dert"){
        bank.dert++
    }
    else if(element === "tree"){
        bank.tree++
    }
   else if(element === "trunk"){
        bank.trunk++
    }
}
let makeDert=(element,material,mClass)=>{
    var material = document.createElement("div");
    material.addEventListener("click",  (e)=>{saveRemove(e); moveToBank(e)})
    material.classList.add(mClass);
        element.appendChild(material)
}