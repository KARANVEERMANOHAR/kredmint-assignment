import React, { useEffect, useState } from "react";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const checkoutCart = () =>{
    alert("Order Placed")
  }
  return (
    <div className="cart-container">
        <div className="cart-heading"><h1>Cart</h1></div>
      {CART?.map((cartitem, cartIndex) => {
        return (
          <div className="cart-card">
            <div>
              <img src={cartitem.otherImages[0]} alt="" img width={"50px"} />
            </div>
            <h4>{cartitem.name}</h4>
            <div>
              <i>{cartitem.description}</i>
            </div>
            <div className="cart-quantity">
              <button className="quantity-btn" onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return (cartIndex === index
                      ? { ...item, quantity: item.quantity > 0 ? item.quantity- 1:0 }
                      : item);
                  });
                  setCART(_CART);
                }}>-</button>
              <span>{cartitem.quantity}</span>
              <button className="quantity-btn"
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return (cartIndex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item);
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
            </div>
            <div>
              {(cartitem.finalPrice
                ? "Rs." + cartitem.finalPrice * cartitem.quantity
                : " ") + " "}
            </div>
          </div>
        );
      })}

      <div className="amount-container">
        
        <span className="amount-span">
        Total Amount : 
          {CART.map((item) => item.finalPrice * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </span>

        <button className="checkout-btn" onClick={checkoutCart}>Checkout</button>
      </div>
    </div>
  );
}

export default CartList;
