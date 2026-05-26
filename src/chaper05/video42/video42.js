let person1 = {
    name: "Hải",
    age: 19,
    address: {
        city: "Hà Nội",
        country: "Việt Nam"
    }
}
let person2 = {
    name: "Hải Triều",
    age: 19,
    address: {
        city: "Thanh Hóa",
        country: "Việt Nam"
    }
}
let person3 = {
    name: "Tuấn",
    age: 19,
    address: {
        city: "Hà Nội",
        country: "Việt Nam"
    }
}
let person4 = {
    name: "Nam",
    age: 19,
    address: {
        city: "Nam Định",
        country: "Việt Nam"
    }
}
// Thêm thuộc tính mới cho person1 
person1.phoneNumber = "032030";
person1.birthYear = 2006;

// Xóa thuộc tính điểm của person2 
delete person2.age;
const persons = [person1, person2, person3, person4];
let names = [];
console.log("persons: ", persons);
persons.forEach((item, index) => {
    names.push(item.name);
})
console.log("Name=", names);
// một cách khác để lấy lại thuộc tính 
console.log("tên của person1: ", person1["name"]);
// console.log("Tỉnh của person1: ", person1.address.city);

console.log("Tỉnh của person1: ", person1["address"]["city"]);