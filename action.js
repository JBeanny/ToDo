const timeDoc = document.querySelector(".timer");
const ongoing = JSON.parse(localStorage.getItem("Ongoing Task"));

const timer = ongoing?.timer.split(":") || ['0h','0mn','0s'];
const hour = Number(timer[0].split("h")[0]);
const minute = Number(timer[1].split("mn")[0]);
const second = Number(timer[2].split("s")[0]);

let myInterval = null;
let timeRemaining = 0;
let timerStart = 0;

const stopTimer = () => {
    clearInterval(myInterval);
}

const Timer = () => {
    myInterval = setInterval(() => {
        if(timerStart <= 0){
            const control = document.querySelector(".audio-timer")
            control.autoplay = true;
            control.load();
            clearInterval(myInterval)
        }
        const hour = Math.floor((timerStart / 3600));
        const minute = Math.floor(((timerStart % 3600) /60));
        const second = Math.floor(((timerStart % 3600) % 60));
        
        timeDoc.innerHTML = `${hour}h: ${minute}mn : ${second}s`
        timerStart -= 1;
        timeRemaining = timerStart;
    },1000)
}


const startTimer = () => {
    if(ongoing){
        timerStart = timeRemaining ? timeRemaining : hour*3600 + minute*60 + second;
        Timer();
    }
    else timeDoc.innerHTML = "You don't have ongoing task"
}

const cancelTask = () => {
    const control = document.querySelector(".audio-cancel")
    control.autoplay = true;
    control.load();
    localStorage.removeItem("Ongoing Task");

    setTimeout(()=>{
        window.location.reload();
    },1500)
}

const completeTask = () => {

    if(timeRemaining) clearInterval(myInterval);

    const completedTask = JSON.parse(localStorage.getItem("Completed")) || [];
    completedTask.push(ongoing);
    localStorage.setItem("Completed",JSON.stringify(completedTask));


    const control = document.querySelector(".audio-complete")
    control.autoplay = true;
    control.load();

    localStorage.removeItem("Ongoing Task");
    setTimeout(() => {
        window.location.reload();
    },1500)
}
