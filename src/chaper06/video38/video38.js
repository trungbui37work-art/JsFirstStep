const btnElement = document.getElementById("btn");
const chaoMung = document.getElementById("chaoMung");
const quayLaiBtn = document.getElementById("btn2");
// btnElement.addEventListener("click", () => {
//     chaoMung.innerText = "Bạn đã chuyển hướng";
//     alert("Chuyển hướng thành công!");
// })
quayLaiBtn.addEventListener("click", () => {
    chaoMung.innerText = "Chào mừng bạn đến với trang web của chúng tôi";
})
btnElement.addEventListener("click", () => {
    chaoMung.innerHTML = `Chào bạn đến với <i> Trang Web </i>`;
})
