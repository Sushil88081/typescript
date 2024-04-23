//Generics is allow to create reusable components or function that can work with multiple data types


const generator=<T>(values:T,num:T,bool:T)=>{
console.log(values,num,bool);
}

generator<boolean>(true,false,true);
generator<string>("generator","yo","yo");
generator<number>(5,6,7);

//generatics with multiple parameters

const printNumber=<T,U,V>(a:T,b:U,c:V)=>{
console.log(a,b,c);
}
printNumber("s",5,true);

