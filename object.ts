
//This is the alias which is defined the type of the object which is reusable in the file
//syntax :=  type AliasName={}
type MyObject={
    name:string;
    age:number;
    address:{city:string;state:string;}
}
const myObj:MyObject={
    name:"sushil",
    age:25,
    address:{
        city:"bangalore",
        state:"karnataka"
    }
}

const myObj1:MyObject={
    name:"sushil",
    age:25,
    address:{
        city:"bangalore",
        state:"karnataka"
    }
}
const myObj2:MyObject={
    name:"sushil",
    age:25,
    address:{
        city:"bangalore",
        state:"karnataka"
    }
}
console.log(myObj.address)
console.log("name: " + myObj.name)
console.log(myObj1.address)
console.log("name: " + myObj1.name)
console.log(myObj1.address)
console.log("name: " + myObj1.name)