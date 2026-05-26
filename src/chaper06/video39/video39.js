const btnElemment = document.getElementById("btn");
const content = document.getElementById("content");
btnElemment.addEventListener("click", () => {
    ;
    content.style.backgroundColor = "yellow";
    content.style.color = "green";
    content.classList.add("hello-ichigo", "minato");
})