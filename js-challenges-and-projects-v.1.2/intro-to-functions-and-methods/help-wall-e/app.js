const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.
var position = 0;

function moveRobot() {
    //add code here
    // robot.style.transform = "translate(50%)"
    position +=50
    robot.style.left = position;
}

robot.addEventListener('click', moveRobot)