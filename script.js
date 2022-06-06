"use strict";

const persone = {
    name: "Alex",
    age: 23,

    get getAge(){
        return this.age;
    },

    set getAge(num){
        this.age = num;
    }
};

console.log(persone.getAge = 40);
console.log(persone.age);
