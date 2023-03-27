import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart =props.cart; //option 1
    const {cart} = props;  //option 2

    console.log(cart);
    let totalPrice = 0;
    let totalShippong = 0;
    for(const product of cart) {
        totalPrice += product.price;
        totalShippong += product.shipping
    }
    const tax  = totalPrice*7 / 100;
    const grandTotal = totalPrice + totalShippong + tax;

    return (
        <div className="cart">
        <h4>Oreder summary</h4>
        <p>Selected Items: {cart.length}</p>
        <p>Total price: ${totalPrice} </p>
        <p>Shipping Charge: ${totalShippong}</p>
        <p>Tax: ${tax.toFixed(2)} </p>
        <h6>Grand Total:
        ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;