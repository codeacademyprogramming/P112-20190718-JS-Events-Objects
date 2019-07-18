"use strict";


// let student1 = {
//     name: "Vasif",
//     surname: "Elesgerzade",
//     age: 22
// };
// console.log(student1);

// let student2 = student1;
// console.log(student2);

// student1.age = 23;
// student2.name = "Teymur";

// let student3 = student2;

// student3.surname = "Farhadov";


// student1.email = "teymurff@code.edu.az";


// console.log("Student 1 = ", student1);
// console.log("Student 2 = " , student2);
// console.log("Student 3 = " , student3);

let student4 = {
    name: "Gunel",
    surname: "Huseynova",
    age: 15,
    get adSoyad(){
        return this.name.toUpperCase() + " " + this.surname.toLocaleUpperCase();
    },
    set firstname(ad){

        this.name = ad;
    }
}; 

student4.phone = "055-555-55-55";
student4.firstname = "Cavid";

console.log(student4.adSoyad);
console.log(student4.firstname);
console.log(student4);

// delete student4.age;

// for (let prop in student4) {
//    console.log(prop)
//    console.log(student4[prop]);
// }
