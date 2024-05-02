let removeBtn = document.querySelectorAll(".remove");
let complate = false;

removeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn);
            btn.classList.toggle("green");
    });
});