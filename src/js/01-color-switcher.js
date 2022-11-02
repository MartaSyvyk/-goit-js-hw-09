const refs = {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]'),
    bodyEl: document.querySelector('body')
}
let colorChangeTimer = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
function onStopClick () {

    clearInterval(colorChangeTimer);
   
    refs.startButton.removeAttribute ("disabled");
    refs.stopButton.setAttribute ("disabled", "true");
}
function onStartClick () {

    colorChangeTimer = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startButton.setAttribute ("disabled", "true");
    refs.stopButton.removeAttribute ("disabled");
   
}

refs.startButton.addEventListener('click', onStartClick);
 refs.stopButton.addEventListener('click', onStopClick);


