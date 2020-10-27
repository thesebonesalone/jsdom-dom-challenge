paused = false
timer_increment = window.setInterval((paused === false ? incrementTimer : false), 1000);
timer = document.getElementById('counter')
function incrementTimer() {
    timer.innerText = (String(parseInt(timer.innerText) + 1));
}
function decrementTimer() {
    timer.innerText = (String(parseInt(timer.innerText) - 1));
}
function togglePause() {
    if (paused === false){
        paused = true
        window.clearInterval(timer_increment)
    } else {
        paused = false
        timer_increment = window.setInterval((paused === false ? incrementTimer : false), 1000);
    }
}




document.getElementById('minus').onclick = function() {
    decrementTimer();
}

document.getElementById('plus').onclick = function() {
    incrementTimer();
}

document.getElementById('pause').onclick = function() {
    togglePause();
    console.log(paused)
}

document.getElementById('heart').onclick = function() {
    var ul = document.getElementsByClassName('likes')[0];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(`❤️ ${timer.innerText}`));
    ul.appendChild(li);
}

document.getElementById('submit').onclick = function() {
    console.log(document.getElementById('comment-input').innerHTML)
}