// Write a “person” class to hold all the details.

class person {
    constructor(name, age, height, gender, weight, qualification) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.gender = gender;
        this.weight = weight;
        this.qualification = qualification;
    }

}
let personDet = new person("Bharathi", "16", "5.10", "Female", "50", "IAS");
let personDet1 = new person("Yaswathi", "20", "5.7", "Female", "55", "BE");
let personDet2 = new person("Karthi", "26", "5.10", "Male", "70", "B.Tech");

console.log("Detalis of personDet :", personDet);
console.log("Detalis of personDet1 :", personDet1);
console.log("Detalis of personDet2 :", personDet2);
