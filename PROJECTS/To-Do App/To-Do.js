let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let body = document.querySelector("body");

function events() {
btn.addEventListener("click", () => {
    console.log(inp.value);

    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);

    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("del");
    li.appendChild(delBtn);

    inp.value = "";
});
};

btn.addEventListener("click", () => {
    events();
});

body.addEventListener("keypress", (event) => {
    // console.log(event);
    if (event.key == "Enter") {
        events();
    }
});

ul.addEventListener("click", (event) => {
    console.log(event);
    let targets = event.target;
    let targetNode = targets.nodeName;;

    let par = targets.parentElement;

    if (targetNode == "BUTTON") {
        par.remove();
    }
});