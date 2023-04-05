import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Review = ({product, handleRemoveFromCart}) => {
    const {id, name, quantity, price, img} = product;
    return (
        <div className="review-item">
           <img src={img} alt="" />
           <div className="review-details"> 
           <p className="product-title">{name}</p>
           <p>Price: <span className="orange-text">${price}</span> </p>
           <p>Order Qunatity:  <span className='orange-text'>{quantity}</span> </p>
           </div>
           <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>
           <FontAwesomeIcon icon ={faTrashAlt} />
           </button>
        </div>
    );
};

export default Review;