import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart,  setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // useEffect(() => {
    //     // console.log('products', products);
    //     const storedCart = getShoppingCart();
    //     // console.log(storedCart);
    //     // step1: get id
    //     for(const id in storedCart) {
    //         // console.log(id);

    //         //step2:get the product using id
    //         const addedProduct = products.find(product => product.id === id)
    //         console.log(addedProduct);

    //         //step3: get quantity of the product
    //         const quantity = storedCart[id];
    //         // console.log(quantity);
    //         addedProduct.quantity = quantity;
    //         console.log(addedProduct);
    //     }
    // }, [products])


    useEffect(() => {

        const storedCart = getShoppingCart();
        const savedCart = [];

        //step1: get id of the addedproduct
        for(const id in storedCart) {
            //step2: get  product from produtcs state by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
              //step3: add quantity
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;

              //step4: add the added product to the saved cart
              savedCart.push(addedProduct);
            }
        }
        //step5:  set the card
        setCart(savedCart)
    },[products])

    const handleAddToCart = (product) => {
        let newCart = [];
        
        // const newCart = [...cart, product];
        // if tproduct doesn't exist in the cart, then set quantity = 1;
        // if exist update by 1;

        const exists = cart.find(pd => pd.id === pd.id)

        if(!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== pd.id)
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
        
        }

        const handleClearCart = () =>{
            setCart([]);
            deleteShoppingCart();
        }

    return (
        <div className="shop-container">
        <div className="products-container">
       
        {
            products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
         
        
        }
        </div>

        <div className="card-container">
          <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
        </div>
        </div>
    );
};

export default Shop;