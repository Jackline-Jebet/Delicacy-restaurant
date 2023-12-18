// import React from 'react';

// const Cart = ({ cartItems, setCartItems, closeCart }) => {
//   return (
//     <div className='cart'>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>{item.label} - {item.label1}
//           <button onClick={() => setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem !== item))}>
//             remove
//           </button>
//           </li>
//         ))}
//       </ul>
//       <p>Cart: {cartItems ? cartItems.length : 0} items</p>
//       <button onClick={closeCart}>Close Cart</button>
//     </div>
//   );
// };

// export default Cart;

import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className='cart'>
      {/* <p>Cart: {cartItems ? cartItems.length : 0} items</p> */}
    </div>
  );
};

export default Cart;

