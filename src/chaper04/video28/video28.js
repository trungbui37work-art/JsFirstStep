console.log("================= Video 28,29 ==================");
// nội dụng vòng lặp for, while, do-while, 
// break, continue

// for (let i = 0; i < 10; i++) {
//     console.log("i= ", i);
// }
// let dem = 10;
// while (dem > 0) {
//     console.log("dem=", dem);
//     dem--;
// }

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("i=", i);
}
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log("check=", i);
}