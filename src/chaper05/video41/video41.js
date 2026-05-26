// ========== Sử dụng filter ==============>
const numbers = [6, 8, 4, , 7, 9];
// Lọc các số lớn hơn 5
const numberAfter = numbers.filter((item, index) => {
    return item > 5;
})
console.log("numberAfter= ", numberAfter); // độ dài của mảng bị giảm , đánh lại số thứ tự 

