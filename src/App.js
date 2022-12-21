import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import CartList from "./Components/CartList";
import Data from "./Data/data";
function App() {
  const [product] = useState(Data);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleCartRender = (value) =>{
    setShowCart(value);
  }
  return (
    <div>
      <Header count={cart.length} handleCartRender={handleCartRender}/>

      {showCart ? (
        <CartList cart={cart} />
      ) : (
        <ProductList product={product} addToCart={addToCart} />
      )}
    </div>
  );
}

export default App;
