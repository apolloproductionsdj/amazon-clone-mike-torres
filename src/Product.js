import React from 'react';
import './Product.css';
import Emoji from 'react-emoji-render';


function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_price">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <Emoji text=" :star: "/>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;