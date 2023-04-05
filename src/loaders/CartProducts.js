import { Await } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
     const loadedPriducts = await  fetch('products.json');
     const products =await loadedPriducts.json();
     //if cart  data is in database, you have to async await;

     const storedCart = getShoppingCart();
     const savedCart =[];
     for(const id in storedCart){
           const addedProduct = products.find(pd => pd.id === id);
           console.log(addedProduct);
           if(addedProduct){
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;
              savedCart.push(addedProduct);
           }
     } 
     //if you need to  send two things
    //  return[products, savedCart]; 1ta system
    //another option:
    //   return {products, savedCart};

    return savedCart;
}

export default cartProductsLoader;