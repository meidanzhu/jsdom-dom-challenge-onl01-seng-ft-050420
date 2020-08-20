const pauseButton = document.getElementById('pause')
const heartButton = document.getElementById('heart')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const submitButton = document.getElementById('submit')
let intervalID = setInterval(countUp, 1000);
let counter = document.querySelector('#counter')
let form = document.getElementById("comment-form")
let input = document.getElementById("comment-input")

plusButton.addEventListener('click', plusButtonClick)
    // add 1 everytime the + button is clicked
minusButton.addEventListener('click', minusButtonClick)
// subtract 1 everytime the - button is clicked
heartButton.addEventListener('click', heartButtonClick)
// like the number when the heart button is clicked
pauseButton.addEventListener('click', pauseButtonClick)
    // when button clicked, pause counter
    // buttons get grayed out
    // text change to resume 
form.addEventListener("submit", commentBox)
    // submit comment and display them

function countUp(){ 
    let num = parseInt(counter.innerText)
    counter.innerText = num + 1 
}

function plusButtonClick(event){
    let add = parseInt(counter.innerText)
    counter.innerText = add + 1
}

function minusButtonClick(event){
    let subtract = parseInt(counter.innerText)
    counter.innerText = subtract - 1
}

function pauseButtonClick(event){
    if (pauseButton.innerText === 'pause') {
        clearInterval(intervalID)
        heartButton.disabled = true
        plusButton.disabled = true
        minusButton.disabled = true
        submitButton.disabled = true
        pauseButton.innerText = 'resume'
    }
    else{
        intervalID = setInterval(countUp, 1000)
        heartButton.disabled = false
        plusButton.disabled = false
        minusButton.disabled = false
        submitButton.disabled = false
        pauseButton.innerText = 'pause'
    }
}

function heartButtonClick() {
    
}

function commentBox() {

}