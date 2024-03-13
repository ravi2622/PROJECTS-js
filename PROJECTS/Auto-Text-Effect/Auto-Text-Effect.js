let speedval = document.querySelector("#text");
let textEffect = document.querySelector(".text")

let text = "Hello, My name is Ravi. i am a developer."
let speed = 300;
let indexval = 1;

effect();

function effect() {
    console.log(textEffect.innerText);
    console.log(speedval.value)
    console.log(speed);

    indexval++;

    if (indexval > text.length) {
        indexval = 1;
    }
    else {
        speed = 300 / speedval.value;
        textEffect.innerText = text.slice(0, indexval);
    }

    setTimeout(effect, speed);


}