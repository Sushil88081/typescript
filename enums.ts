//enums, when a property has multiple values;
//Enums define roles where getting two property admin and user
enum Role{
    admin="admin",
    user="user",
}
type Property={
    name:string;
    age:number;
    address:{city:string;state:string;},
   role:Role;
}

const user1:Property={
     name:"John",
     age:25,
     address:{
         city:"bangalore",
         state:"karnataka"
     },
     role:Role.user,
}
const user2:Property={
    name:"sushil",
    age:25,
    address:{
        city:"chandauli",
        state:"UttarPradesh"
    },
    role:Role.admin,
}

const isAdmin=(user1:Property)=>{
    const {name, age, address,role} = user1;
      if (role==="admin") {
        return true;
      }
      else return false;
     
    
}
console.log(isAdmin(user1));

const IsAdmin=(user2:Property)=>{
    const {name, age, address,role} = user2;
    if (role==="admin") {
        return true;
    }else return false;
}

console.log("user2",IsAdmin(user2));