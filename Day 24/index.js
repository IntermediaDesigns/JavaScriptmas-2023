/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 


let lights = document.getElementsByClassName('lights');

function switchLights() {
    for (let i = 0; i < lights.length; i++) {
        if (lights[i].classList.contains('lights-on')) {
            lights[i].classList.remove('lights-on');
        } else {
            lights[i].classList.add('lights-on');
        }
    }
}

setInterval(switchLights, 800);


function switchLightsAlternately() {
    var redLights = document.getElementsByClassName('red');
    var blueLights = document.getElementsByClassName('blue');

    for (var i = 0; i < redLights.length; i++) {
        if (redLights[i].classList.contains('lights-on')) {
            redLights[i].classList.remove('lights-on');
        } else {
            redLights[i].classList.add('lights-on');
        }
    }

    setTimeout(function() {
        for (var i = 0; i < blueLights.length; i++) {
            if (blueLights[i].classList.contains('lights-on')) {
                blueLights[i].classList.remove('lights-on');
            } else {
                blueLights[i].classList.add('lights-on');
            }
        }
    }, 400);
}

setInterval(switchLightsAlternately, 800);

