console.log("Video 40 ")
const province = ["Hà Nội", "Hồ Chí Minh", "Thái Bình", 'Ninh Bình'];
province.forEach((item, index) => {
    // item = "Thành Phố " + item;// Không thay đôi được do Item chỉ là một giá trị đưuọc gán từ province[index]
    province[index] = "Thành phố " + province[index];

})
province.forEach((item, index) => {
    console.log("index =", index, "value = ", item);
})

// Modify bằng  hàm map 
const scores = [10, 8, 9, 7, 8.5];
// const scoresX2 = scores.map((item, index) => {
//     return item * 2;
// })
const scoresX2 = scores.map((item, índex) => item * 2);
const scoreMu2 = scores.map((item, index) => {
    return item ** 2;
})
console.log("scorex2= ", scoresX2);
console.log("ScoreBinh= ", scoreMu2);