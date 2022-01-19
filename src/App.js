import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ContextApi from "./ContextApi/ContextApi";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";


function App() {
  return (
    <>
      <ContextApi>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ContextApi>
    </>
  );
}

export default App;
