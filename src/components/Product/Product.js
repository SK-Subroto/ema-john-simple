import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    // emptySymbol="far fa-star icon-color"
                    // fullSymbol="fas fa-star icon-color"
                    emptySymbol={<FontAwesomeIcon icon={farFaStar} className="icon-color"/>}
                    fullSymbol={<FontAwesomeIcon icon={fasFaStar} className="icon-color"/>}
                    readonly
                />
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)} 
                    className="btn-regular">
                    <FontAwesomeIcon icon={faShoppingCart}/> Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;