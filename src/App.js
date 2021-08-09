import React from "react";
import {Switch, Route} from 'react-router-dom'
import Cart from "./pages/cart";
import Collection from "./pages/Furniture";
import Detail from "./pages/detail";
import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/notfound";
import About from "./pages/About Us";
import Contact from "./pages/Contact Us";
import Services from "./pages/Products";
import Project from "./pages/Our Project";
import Footer from './Components/footer/Footer'
import { ToastContainer } from "react-toastify";
import CartProvider from './helpers/CartProvider';
import Checkout from './pages/checkout';
import SimpleReactLightbox from 'simple-react-lightbox';

        

function App() {
  return (
    <>
    <div className="page_container">
      <div className="content_wrap">
      <SimpleReactLightbox>
      <ToastContainer />
      <CartProvider>
    
    
     <Switch>
    
              <Route exact path= "/"><Home/></Route>
              <Route  path= "/collection"><Collection/></Route>
              <Route  path= "/about"><About/></Route>
              <Route  path= "/contact"><Contact/></Route>
              <Route  path= "/services"><Services/></Route>
              <Route  path= "/ourProject"><Project/></Route>
              <Route path="/checkout"><Checkout/></Route>
              <Route  path= "/cart"><Cart/></Route>
              <Route  path= "/detail/:id"><Detail/></Route>
              <Route path="'/not-found'"><NotFound/></Route>
             <Route path="/*"><NotFound/></Route>
        </Switch>
      
      <Footer/>
      </CartProvider>
      </SimpleReactLightbox>
      </div>
    </div>
    </>
  )
}

export default App;
