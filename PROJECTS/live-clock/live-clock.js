let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");


setInterval(() => {
    let currentTime = new Date(); 
    console.log(Date());
    console.log(currentTime);
    console.dir(currentTime);

    // hrs.innerHTML = currentTime.getHours();
    // min.innerHTML = currentTime.getMinutes();
    // sec.innerHTML = currentTime.getSeconds();

    // hrs.innerHTML = ((new Date().getHours() < 10) ? "0": "") + new Date().getHours();
    hrs.innerHTML = (( currentTime.getHours() < 10) ? "0": "") + currentTime.getHours();
    min.innerHTML = ((currentTime.getMinutes() < 10) ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = ((currentTime.getSeconds() < 10) ? "0" : "") + currentTime.getSeconds();
}, 1000);