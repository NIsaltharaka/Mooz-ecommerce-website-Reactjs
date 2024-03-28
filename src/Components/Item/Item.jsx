import React, { useState } from 'react';
import './Item.css';

const Item = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='item' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">
            ${props.new_price}.00
        </div>
        <nav className="item-price-old">
            ${props.old_price}.00
        </nav>
      </div>
      {hovered && (
        <button className="add-to-cart-btn">
          <span role="img" aria-label="shopping-cart">🛒</span> Add to Cart
        </button>
      )}
    </div>
  );
};

export default Item;
