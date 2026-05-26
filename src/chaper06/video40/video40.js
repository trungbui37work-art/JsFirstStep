const nameElement = document.getElementById("nameInput");
const yourName = document.getElementById("yourName");
const oldName = document.getElementById("old");

oldName.innerHTML = localStorage.getItem("customerName");
nameElement.addEventListener("change", () => {
    yourName.innerHTML = `<b>${nameElement.value}</b>`;
    localStorage.setItem("customerName", nameElement.value);
})
