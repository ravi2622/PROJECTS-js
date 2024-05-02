let loginPage = document.querySelector("#loginPage");
let username = document.querySelector("#username");
let id = document.querySelector("#id");

loginPage.addEventListener("submit", function(event) {
    if(username.value === "" || id.value === "") {
        event.preventDefault();
        alert("please Enter details!")
    }
});
