//collection of data with different types and it is fixed size;

type PersonInfo=readonly[string,number,boolean]

const person1:PersonInfo=["Sushil",29,true]
const person2:PersonInfo=["Abhi",29,false]

const PersonDetails=(person:PersonInfo)=>{
        const [name,age,license]=person;
        console.log(`${name},${age},${license?"yes has licence":"no dont have licence"}`)
}
PersonDetails(person1)
PersonDetails(person2)