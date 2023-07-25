






//vars
var TextCircle = document.querySelector('.text-circle')
var Circle = document.querySelector('.circle')
//listeners 
Circle.addEventListener ('click', touch)
Circle.addEventListener ('mouseout', exit)
//functions
function touch() {
    TextCircle.innerText = 'It was clicked'
    TextCircle.style.color = 'yellow'
}

function exit() {
    TextCircle.innerText = 'It went out';
    TextCircle.style.color = 'rgb(300, 115, 94)';
}