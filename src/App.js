import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import ContextApi from "./ContextApi/ContextApi";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductPage from "./pages/ProductPage/ProductPage";
import Products from "./pages/Products/Products";
import Registration from "./pages/Registration/Registration";
import SingleProduct from "./pages/SingleProduct/SingleProduct";


function App() {
  return (
    <>
      <ContextApi>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path='login' element={<Login></Login>} />
            <Route path='registration' element={<Registration></Registration>} />
            <Route path="cart" element={
              <PrivetRoute>
                <Cart />
              </PrivetRoute>
            } />
            <Route path='*' element={<NotFound></NotFound>} />
          </Routes>



        </BrowserRouter>
      </ContextApi>
    </>
  );
}

export default App;
