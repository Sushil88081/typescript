//union represents by | (pipe)operator
//Intersection represents by & (And)operator


//union
const inputValues=(values:number|boolean|string)=>{
console.log(values)
}
inputValues("suhshil");
inputValues(true);
inputValues(25)

//intersection

type Person={
    name:string;
    age:number;
}
type Employee={
    Emp_id:number;
    Department:string;
}

type EmpleyeeType=Person&Employee;
const EmployeeDetails:EmpleyeeType={
        name:"Suhsil",
        age:24,
        Emp_id:1,
        Department:"IT"
 
}
const information=(EmployeeDetails:EmpleyeeType)=>{
    const {name, age,Department} = EmployeeDetails;
console.log(name, age, Department);
}
information(EmployeeDetails)

