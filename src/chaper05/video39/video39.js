const sdt = [2, 3, 1, 5, 7];
console.log(sdt, sdt.length)
for (let i = 0; i < sdt.length; i++) {
    console.log("vị trí", i, "có giá trị: ", sdt[i]);
}

// Duyệt bằng vòng lặp foreach
const fruits = ["lemon", "strawberry", "orange", "banana", "apple"];
// fruits.forEach(function (val, index) {
//     console.log("Gía trị ", val, "vị trí:", index);
// })
// duyệt foreach sử dụng arrow function
fruits.forEach((val, index) => {
    console.log("Gía trị:", val, "- vị trí:", index);
});