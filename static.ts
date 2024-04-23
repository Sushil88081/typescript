// static methods and properties belonging to the class itself rather than to instances of class. by making
//methods and properties static,we can access them directly from the class without needing to create an instance of the class


class MathmeticalOperations {
    static add(x:number,y:number){
        return x+y;
    }
    static subtract(x:number,y:number){
        return x-y;
    }
}
console.log(MathmeticalOperations.add(3,4))
console.log(MathmeticalOperations.subtract(3,4))