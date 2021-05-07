document.addEventListener('DOMContentLoaded' , () => {

let color = ['red', 'green', 'blue'];
let text = ['RED', 'GREEN','BLUE'];
let playButton = document.querySelector('.play-btn');
let dynamicWord = document.getElementById('dynamic-id');
let redButton = document.getElementById('red-btn');
let blueButton = document.getElementById('blue-btn');
let greenButton = document.getElementById('green-btn');
let timer = 10;
let timer_display = document.querySelector('.timer');
let score = document.getElementById('score-id');
let scorecount = 0;
let game = false;

playButton.addEventListener('click', triggerTimer);
redButton.addEventListener('click', scorePoint);
blueButton.addEventListener('click', scorePoint);
greenButton.addEventListener('click', scorePoint);


function triggerTimer() {
    game = true;
    playButton.style.display = 'none';

    let runTimer = setInterval(function(){
        if (timer > 0) {
            timer-= 1
            timer_display.innerHTML = timer
        } else {
            clearInterval(runTimer)
            game = false
        };
    }, 1000);
}

function getRandomElement() {
    return Math.floor(Math.random() * 3)
}

function scorePoint(e) {
    let button = e.currentTarget

    if (game == true) {
        if (button.value === dynamicWord.style.color) {
            scorecount++;
        } else {
            scorecount = 0;
        }
       dynamicWord.style.color = color[getRandomElement()];
       dynamicWord.innerHTML = text[getRandomElement()];
       score.innerHTML = scorecount
    } else {
        // do nothing
    }
}

});