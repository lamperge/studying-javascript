//dom
var Num1Inpt = document.querySelector ('#inpt1')
var Num2Inpt = document.querySelector ('#inpt2')
var r = document.querySelector ('.result')

//functions
function add() {
var value1 = Number (Num1Inpt.value)
var value2 = Number (Num2Inpt.value)
r.innerHTML = value1 + value2
}
function sub() {
    var value1 = Number (Num1Inpt.value)
    var value2 = Number (Num2Inpt.value)
    r.innerHTML = value1 - value2
    }
function mult() {
        var value1 = Number (Num1Inpt.value)
        var value2 = Number (Num2Inpt.value)
        r.innerHTML = value1 * value2
        }
function division() {
            var value1 = Number (Num1Inpt.value)
            var value2 = Number (Num2Inpt.value)
            r.innerHTML = value1 / value2
            }

//listeners, buttons working
var btn1 = document.querySelector('.add')
btn1.addEventListener('click', add)
var btn2 = document.querySelector('.sub')
btn2.addEventListener('click', sub)
var btn3 = document.querySelector('.mult')
btn3.addEventListener('click', mult)
var btn4 = document.querySelector('.division')
btn4.addEventListener('click', division)