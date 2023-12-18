

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){
    
    if(!isRunning){
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
    }
    

}

function stop(){
    
    if(isRunning){
        isRunning = false;
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        
    }

}

function reset(){
    isRunning = false;
    clearInterval(timer)
    startTime = 0;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";

}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime/ (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/(1000)%60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    // if(hours<10){
    //     hours = "0" + hours;
    // }
    // if(minutes<10){
    //     minutes = "0" + minutes;
    // }
    // if(seconds<10){
    //     seconds = "0" + seconds;
    // }
    // if(miliseconds<10){
    //     miliseconds = "0" + miliseconds;
    // }
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    // display.textContent = "" + hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`

    
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        

        let ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})
