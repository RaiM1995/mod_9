const trafficLightEl = document.querySelector(".wrapper");

const trafficLightEl1 = document.querySelector('#green');
const trafficLightEl2 = document.querySelector('#yellow');
const trafficLightEl3 = document.querySelector('#red');
trafficLightEl.addEventListener('click', makeGreen);

function makeGreen() {
    trafficLightEl3.style.background = ('black');

    trafficLightEl1.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
  //  trafficLightEl.addEventListener('click', makeYellow);


}

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
   

}

function makeRed() {
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
   

}