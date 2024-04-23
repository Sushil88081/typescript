// inheritence is allow a class to reuse the functionality of an existing class without rewriting it.
class Person{
    name: string;
    age: number;
    hobbies:string[];
    //Creating a constructor
    constructor(name: string, age: number, hobbies:string[]){
        this.name=name;//assing the value for name
        this.age=age;
        this.hobbies=hobbies;
    }
    introduce(){
        console.log(`hii this is ${this.name} and my age is ${this.age} and myobbies is ${this.hobbies}`);
    }
}

// const sushil = new Person("sushil",22,["cricket","hocky"]);
// console.log(sushil.name);
//Stuent class is inherit property of Person Class or use
class Student extends Person{
    grade: number;

    constructor(name: string, age: number, hobbies:string[],grade: number){
        super(name, age, hobbies);//superkeyword is used to access the property of parent class
        this.grade=grade;
    }
    introduce(){
        console.log(`${super.introduce()} and my grade is ${this.grade}`);
    }
}
const student=new Student("sushil",25,["cricket","football"],1);
console.log("student",student.introduce())
