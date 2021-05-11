var about = document.getElementById("about");
var main = document.getElementsByClassName("Full-screen-video-container");
about.style.backgroundColor = "grey";
about.style.color = "white";
var reviews = document.getElementsByClassName("container");
for (var i = 0; i < reviews.length; i++) {
    reviews[i].style.backgroundColor = "cyan";
}

var button = document.createElement("BUTTON");
button.addEventListener("click", function(){
    console.log("button has been clicked!");
});
main[0].appendChild(button);

var players = 58;
for(var index = 0; index<= 58; index++){
    if(index%2==0){
        console.log("Blue team");
    }
    else console.log("red Team");
}