const btnElement = document.getElementById("btn");
console.log(btnElement);
const dangKyElement = document.getElementById("dangKy");
// use old function (mix html and js)
// function submitForm() {
//     alert("You have been submited your request!");//=> với cách làm này thì cách viết bị phụ thuộc cả phần html => khó scale hệ thống lớn
// }
// cách dùng cho hệ thống hiện đại => dùng addEventListener
// Viết theo function cơ bản 
// btnElement.addEventListener("click", function () {
//     dangKyElement.style.color = "red";
//     alert("You have been submited your request!");
// })
// Viết theo arrow functiion
btnElement.addEventListener("click", () => {
    alert("Hello");
})