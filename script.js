// var DOMmanipulation = window.addEventListener();

// var window.onload = function() {
//   var heading = window.getElementById("change_heading");
//   heading.innerText = "Hello World!"
// }

window.onload = function() {
  var section = document.querySelector("section");
  section.addEventListener("mouseover", function(event) {
    debugger
    var selectedColor = document.querySelector(".selected");
    selectedColor.innerText = event.target.className;
  })
}



// window.addEventListener('load', function(){
  
// })

// window.onload = function(){

// }


var newDiv = document.createElement("div");
newDiv.setAttribute("class", "purple");  // this overwrites whatever's in classlist already 
// newDiv.className = "purple"  -- this overwrites whatever's in classlist already
// newDiv.className += "purple"
// newDiv.classList.add("purple")
newDiv.style.backgroundColor = "purple";
// var section = document.querySelector("section"); -- this line already exists above
section.appendChild(newDiv);