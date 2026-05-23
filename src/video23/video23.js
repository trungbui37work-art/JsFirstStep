const fullName = "Quoc Trung";
const birhYear = 2003;
const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
console.log("current year: ", currentYear)
const age = currentYear - birhYear;
let result = `              Tên: ${fullName}
              Tuổi: ${age}
              Sinh Viên: ${isStudent}`
if (age >= 18) {
    result += ", đã 18+";
}
console.log(result)