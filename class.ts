//class is a buleprint for creating object
//A class is likeblueprint for creating similiar things



//Defining a class
class Persons {
    name: string ="Sushil";
    age: number=22;
    hobbies:string[] = ["playingCricket","listeningMusic"];
}

//creating an instance of a class

const sushil = new Persons();
console.log("class data=",sushil.name)

class Student{
    name: string;
    age: number;
    hobbies:string[];
    //Creating a constructor
    constructor(name: string, age: number, hobbies:string[]){
        this.name=name;//assing the value for name
        this.age=age;
        this.hobbies=hobbies;
    }
}

const sushil2:Student = new Student("Sonu",20,["playingCricket","listening"]);
const sushil3:Student = new Student("Abhi",22,["playingCricket","listening"]);
const sushil4:Student = new Student("Ashish",30,["playingCricket","listening"]);
console.log(sushil2)
console.log(sushil3)
console.log(sushil4)
