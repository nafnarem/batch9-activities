var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

var newList = document.getElementById('league');

for (var i = 0; i < justiceLeague.length; i++) {
    var newLi= document.createElement('li');
    newLi.textContent = justiceLeague[i].name + ": "+ justiceLeague[i].superpower;
    newList.append(newLi);
}

var button = document.createElement("BUTTON");   
button.innerHTML = "CLICK ME";                   
document.body.appendChild(button);  
button.addEventListener("click", function() {
    console.log("The button was clicked!");
})    

function myFunction(e) {
    var x = e.key;
    document.getElementById("log").innerHTML = "The pressed key was: " + x;
   
}

document.addEventListener('keypress', logKey);
let log = document.getElementById('log2');

function logKey(e) {
    log.textContent += e.key;
  }