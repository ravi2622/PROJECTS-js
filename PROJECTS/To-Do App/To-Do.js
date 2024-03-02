let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

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

ul.addEventListener("click", (event) => {
    console.log(event);
    let targets = event.target;
    let targetNode = targets.nodeName;;

    let par = targets.parentElement;

    if(targetNode == "BUTTON") {
        par.remove();
    }
});