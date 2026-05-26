let fruits = ["orange", "lemon", "apple"]
console.log(fruits);
// Truy cập các phần tử trong mảng
// truy cập theo index 
const names = ['hoa', 'nhat', 'thanh'];
console.log(names[0]); // in ra hoa
console.log(names[2]); // in ra thanh
// cập nhật giá trị 
names[2] = "updated";
console.log(names[2]);
// Thêm xóa phần tử
// Thêm phần tử 
// thêm vào đầu unshift()
names.unshift(true, "ha");
// Thêm vào cuối mảng push
names.push(false);
console.log(names);

// Xóa phần tử cuối mảng pop()
names.pop();

// Xõa phần tử dầu tiên 
names.shift();


console.log(names);