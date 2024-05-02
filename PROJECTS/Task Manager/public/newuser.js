let taskclear = document.querySelector(".taskclear");
let tasklist = document.querySelector("#tasklist");
let ul = document.querySelector("ul");

taskclear.addEventListener("click", () => {
    let li = document.createElement("li");
    let newinput = document.createElement("input");
    
    newinput.setAttribute("type", "text");
    newinput.setAttribute("name", "tasklist");
    newinput.setAttribute("id", "tasklist");
    newinput.setAttribute("placeholder", "Enter New Task");
    li.appendChild(newinput);
    ul.appendChild(li);
});