// ============ Lab 3 ==============
let pro1 = {
    name: "SamSungJFold",
    price: 1000,
    inStock: true
}
let pro2 = {
    name: "Iphên 15",
    price: 800,
    inStock: true
}
let pro3 = {
    name: "Iphone 14",
    price: 500,
    inStock: true
}
let pro4 = {
    name: "Iphone 4",
    price: 100,
    inStock: false
}
let pro5 = {
    name: "Oppo Reno 2",
    price: 1000,
    inStock: true
}
let products = [pro1, pro2, pro3, pro4, pro5];
// 1. In ra tên của sản phẩm đầu tiên
console.log("Tên của sản phẩm đầu tiên:", products[0].name);
// 2. Thay đổi giá sẳn phẩm thứ 2 và in ra danh sách tất cả sản phẩm
// thay đổi giá sản phẩm thứ 2 thành 150 
products[1].price = 150;
console.log(products);
// 3. Thêm một sản phẩm mới vào cuối mảng
// Tạo sản phẩm mới
// let pro6 = {
//     name: "Ipad M2",
//     price: 1000,
//     inStock: true
// }
// products.push(pro6);
// products.forEach((value, index) => {
//     console.log("name:", value.name);
//     console.log("price:", value.price);
//     console.log("isStock:", value.inStock);
// })
// 4. Xóa sản phẩm cuối cùng ra khỏi danh sách
products.pop();
products.forEach((value, index) => {
    console.log("name:", value.name); // in ra tên sản phẩm (mục 5)

})
// 6. Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm
let prices = products.map((value, index) => {
    return value.price;
})
console.log("mảng giá sản phẩm: ", prices);
// 7. Dùng Filter để lọc sản phẩm còn hàng
let enablePros = products.filter((value, index) => {
    return value.inStock;
})
console.log(enablePros);
// 8. Dùng For.. in để duyệt qua thuộc tính của phần từ đầu tiên 
for (let key in products[0]) {
    console.log(key, products[0][key]);
}
// việc modify thẳng trên mảng sẽ thay đôi luôn giá trị của
// tham chiếu nên khi in log ra thì nó chỉ hiện lên cái mới
// => để khắc phục điều này thì phải clone rồi thay đổi trên cái clone đó
// để có cái nhìn tương quan 
