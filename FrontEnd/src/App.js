import { useEffect } from "react";
import{ BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirm from "./scenes/checkout/Confirm";
import Navbar from "./scenes/gloabl/Navbar";
import CartMenu from "./scenes/gloabl/CartMenu";
import Footer from "./scenes/gloabl/Footer"

const ScrollToTop = () => {
const{ pathname } = useLocation();
useEffect(() => {
  window.scrollTo(0,0);
},[pathname])
return null;
}



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="item/:_id" element={<ItemDetails/>}></Route>
        <Route path="checkout" element={<Checkout/>}></Route>
        <Route path="checkout/confirm" element={<Confirm/>}></Route>
      </Routes>
      <CartMenu/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
