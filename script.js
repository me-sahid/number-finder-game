createBubble = () => {
    let bubbles = "";

    for (i = 1; i <= 112; i++) {
        let randomNums = Math.floor(Math.random() * 10)
        bubbles += ` <div class="gameBox-bubbles">${randomNums}</div>`
    }

    let newBubbles = document.querySelector(".gameBox").innerHTML = bubbles;
}

let time = 60;
document.querySelector("#timerFunc").textContent = time;

setTimer = () => {

    setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timerFunc").textContent = time;
        }
        else {
            clearInterval(time)
            document.querySelector(".gameBox").innerHTML = `<h1>Game Over</h1> <button>Restart</button>`
        }
    }, 1000);
}

let hitrandomNum;

gethitValue = () => {
    hitrandomNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = hitrandomNum;
}

let score = 0;
getscoreValue = () => {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

document.querySelector(".gameBox").addEventListener("click", function (clickedDetails) {
    let checkedNum = Number(clickedDetails.target.textContent);
    if (checkedNum === hitrandomNum) {
        getscoreValue();
        gethitValue();
        createBubble();
    }
})


gethitValue();
setTimer();
createBubble();
