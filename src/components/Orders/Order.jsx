import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../ReviewItem/Review';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    const[cart, setCart] =useState(savedCart)

     const handleRemoveFromCart = (id) =>{

        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id);
     }

     const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()
     }

    console.log(savedCart);
    return (
        <div className="shop-container">
        <div className="review-container ">
      
        {
            cart.map(product => <Review key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></Review>)
        }
        </div>
      <div className="cart-container">
          <Cart  cart={cart} handleClearCart={handleClearCart}> </Cart>
      </div>
        </div>
    );
};

export default Order;