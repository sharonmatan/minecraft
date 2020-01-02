const toolsBox = document.querySelectorAll(".toolsBox");
const fullscreen = document.querySelectorAll(".fullscreen");
let tool = ""
for (let i = 0; i < toolsBox.length; i++) {
  toolsBox[i].addEventListener("mousedown", function() {
    backGame.setAttribute("id", `${toolsBox[i].alt}`),
    tool = toolsBox[i].id ;
    return tool
  });
}

// function clickEffect(e) {
//   var d = document.createElement("div");
//   d.className = "animation";
//   d.style.top = e.clientY + "px";
//   d.style.left = e.clientX + "px";
//   document.body.appendChild(d);
//   d.addEventListener(
//     "animationend",
//     function() {
//       d.parentElement.removeChild(d);
//     }.bind(this)
//   );
// }
// document.addEventListener("mousedown", clickEffect);

// for (let j = 0; j < fullscreen.length; j++) {
//   console.log(`#${toolsBox[j].alt}`);
//   let x = document.querySelector(`#${toolsBox[j].alt}`);
//   console.log(x);

//   });
//
