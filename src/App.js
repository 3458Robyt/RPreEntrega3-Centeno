import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer";

function App() {
  document.title = "E-commerce";

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route
            exact
            path="/details/:productId"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/:categoryId" element={<HomeContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
