// App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout';
import CartContextProvider from "./context/CartContext";

function App() {
  // ...

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/details/:productId" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<HomeContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
