console.log("=========Video 34 ==============")
const diemToan = 9;
const diemVan = 8;
const diemAnh = 9;
const average = (a, b, c) => (a + b + c) / 3;
function xepLoai(diem) {
    if (diem >= 9 && diem <= 10) {
        return "Xuat Sac";
    } else if (diem >= 8 && diem < 9) {
        return "Gioi";
    } else if (diem >= 6.5 && diem < 8) {
        return "Kha";
    } else if (diem >= 5 && diem < 6.5) {
        return "Trung Binh";
    } else {
        return "Yeu";
    }
}
console.log(`
    Diem trung binh ${average(diemToan, diemAnh, diemVan)}
    Xếp loại: ${xepLoai(average(diemToan, diemAnh, diemVan))}
    `)