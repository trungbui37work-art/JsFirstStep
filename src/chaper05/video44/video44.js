const person = {
    name: " hoi dan it",
    age: 29,
    email: "eam1@gmail.com",
    address: "Ha Noi"
}
// duyệt từng thuộc tính trong object person:
// for (let key in person) {
//     console.log(key, person[key]);
// } // recommend cho beginer
// Duyệt giá trị
// for (let valu of Object.values(person)) {
//     console.log(valu);
// }
// == Một kiểu lấy giá trị khác 
for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}