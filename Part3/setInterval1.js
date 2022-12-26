
// we are changing the body background color for every 1sec using setInterval().

const body = document.body;
const startButton = document.querySelector(".start");
console.log(startButton);

const stopButton = document.createElement("button");
stopButton.classList.add("btn");
stopButton.classList.add("stop");
body.append(stopButton);
stopButton.textContent = "stop colors changing"
stopButton.style.display = "none";

let setIntervalId = null;

startButton.addEventListener("click", () => {
    setIntervalId = setInterval(() => {
        const red = Math.floor(Math.random() * 266);
        const green = Math.floor(Math.random() * 266);
        const blue = Math.floor(Math.random() * 266);
        const rgb = `rgb(${red},${green},${blue})`;
        body.style.background = rgb;
    }, 1000)
    startButton.style.display = "none";
    stopButton.style.display = "block";
    console.log(setIntervalId);
})

stopButton.addEventListener("click", () => {
    clearInterval(setIntervalId);
    stopButton.style.display="none";
    startButton.style.display="block";
})