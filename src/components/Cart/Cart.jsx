import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Cart = ({cart,handleClearCart}) => {
    // const cart =props.cart; //option 1

    console.log(cart);
    let totalPrice = 0;
    let totalShippong = 0;
    let quantity = 0;
    for(const product of cart) {
        console.log(cart);
        // product.quantity = product.quantity || 1
        totalPrice += product.price * product.quantity;
        totalShippong += product.shipping * product.quantity;
        quantity += product.quantity;
    }
    const tax  = totalPrice*7 / 100;
    const grandTotal = totalPrice + totalShippong + tax;

    return (
        <div className="cart">
        <h4>Oreder summary</h4>
        <p>Selected Items: {quantity}</p>
        <p>Total price: ${totalPrice} </p>
        <p>Shipping Charge: ${totalShippong}</p>
        <p>Tax: ${tax.toFixed(2)} </p>
        <h6>Grand Total:
        ${grandTotal.toFixed(2)}</h6>
        <button onClick={handleClearCart} className='btn-clear-cart'>
       <span> Clear Cart</span>
        <FontAwesomeIcon icon ={faTrashAlt} />
        </button>
        </div>
    );
};

export default Cart;