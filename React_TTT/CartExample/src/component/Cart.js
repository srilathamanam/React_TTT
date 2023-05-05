import React, { useState } from 'react';
import { useEffect } from 'react';

function Cart({items}) {
  const [cartItems, setCartItems] = useState([]);

  /// update cartItems state when component mounts
  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const handleCheckout = () => {
    setCartItems([]);
    alert('purchased Item!');
  };

    return (
        <div>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );    
  
  
}

export default Cart
