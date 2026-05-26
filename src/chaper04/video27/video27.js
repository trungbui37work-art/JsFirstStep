console.log("video17 ")

// so sánh trực tiếp giá trị
const score = 7;

switch (score) {
    case 8:
        console.log("giỏi")
        break;
    case 7:
        console.log("khá")
        break;
    case 6:
        console.log("khá")
        break;
    case 5:
        console.log("trung bình ")
        break;
    default:
        console.log("yếu")

}
// So sánh khoảng giá trị => sử dụng boolean để so sánh 
switch (true) {
    case (score <= 10 && score >= 8): /// true === true
        console.log("Gioi");
        break;
    case (score > 8 && score >= 6.5):
        console.log("Kha");
        break;
    case (score < 6.5 && score >= 5):
        console.log("TB");
        break;
    default:
        console.log("Yeu");
}