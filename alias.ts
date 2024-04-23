//alias of a object

type Product={
    name:string;
    price:number;
    quantity:number;
}
//create a object name products
const products:Product={
name:"laptop",
price:500,
    quantity:5,
}

//define a function to access the product

const Details =(products:Product)=>{
   return {
    name:products.name,
    price:products.price,
    quantity:products.quantity,
   }
}
console.log(Details(products));