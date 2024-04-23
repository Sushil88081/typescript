// abstract class is a way to define common properties and methods that multiple derived classes can share
// this premotes codereuse and helps establish common interface for related classes;
//abstract class can not be instantiated.


abstract class Shape{
    constructor( protected Color:string){

    }

    abstract calculateArea():number;
  
}

class Circle extends Shape{
    constructor( protected Color:string,protected radius:number){
        super(Color);
    }
    calculateArea(): number {
        return Math.PI*this.radius*this.radius
    }
    
   
}
const circle=new Circle("red",5);

console.log(circle.calculateArea());
