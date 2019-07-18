"use strict";


function Student(ad, soyad, yas){
    this.name = ad;
    this.surname = soyad;
    this.age = yas;
}

let s1 = new Student("Yaver", "Quliyev", 29);
let s2 = new Student("Aga", "Nurizade", 29);
let s3 = new Student("Cavid", "Dadashov", 21);

Student.prototype.email = "test@code.edu.az";

s2.__proto__.email = "email-s2";

console.log(s1.email);
console.log(s2);
console.log(s3.email);

