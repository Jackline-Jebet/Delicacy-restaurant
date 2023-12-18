import React, { useState } from 'react'
import '../styles/MenuItem.css'
// import Cart from './Cart';

const MenuItem = ({ item, addToCart, removeFromCart, setCartItems, handleRemoveFromCart, closeCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    if (!isAddedToCart) {
      addToCart(item);
      setIsAddedToCart(true);
    } else {
      removeFromCart(item);
      setIsAddedToCart(false);
      handleRemoveFromCart(item);
    }
  };

return (
   <div className='menu-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={item.image} alt={`${item.label} - ${item.label1}`} />
      <p className='label'>{item.label}</p>
      <p className='label1'>{item.label1}</p>
      {isHovered && (
        <button className='cart-button' onClick={handleButtonClick}>
          {isAddedToCart ? 'Remove Cart' : 'Add to Cart'}
        </button>
      )}
     
   </div>
  );
};

export default MenuItem;
