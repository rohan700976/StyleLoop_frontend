// App.jsx
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import React, { useState } from "react";
// import "./style.css";
import KidsGirlKurti from './kids/KidsGirlKurti.jsx';
import KidsGirlSkirt from './kids/KidsGirlSkirt.jsx';
import KidsGirlTop from './kids/KidsGirlTop.jsx';
import KidsJeans from './kids/KidsJeans.jsx';
import KidsShirt from './kids/KidsShirt.jsx';
import KidsTshirt from './kids/KidsTshirt.jsx';

import GirlShirt from './Women/GirlShirt.jsx';
import Tshirt from './Mens/Tshirt.jsx'
import Shirt from './Mens/Shirt.jsx'
import Jeans from './Mens/Jeans.jsx'
import Home from './Pages/Home.jsx'
import Layout from './Component/Layout.jsx'
import About from './Pages/About.jsx'
import Lehnga from './Women/Lehnga.jsx'
import GirlJeans from './Women/GirlJeans.jsx'
import Kurti from './Women/Kurti.jsx'
import ProductDetails from './Component/ProductDetails.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Login from './Auth/Login.jsx'
import Signup from './Auth/Signup.jsx'
import Auth from "./Auth/Auth.jsx"
import Wishlist from './Pages/Wishlist.jsx';
import AddToCart from './Pages/AddToCart.jsx';
import OtpVerify from './Auth/OtpVerify.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="men/tshirt" element={<Tshirt />} />
        <Route path="men/shirt" element={<Shirt />} />
        <Route path="men/jeans" element={<Jeans />} />

        <Route path="women/kurti" element={<Kurti />} />
        <Route path="women/lehnga" element={<Lehnga />} />
        <Route path="women/girljeans" element={<GirlJeans />} />
        <Route path="women/girlshirt" element={<GirlShirt />} />

        <Route path="kids/kidsGirlKurti" element={<KidsGirlKurti />} />
        <Route path="kids/kidsGirlSkirt" element={<KidsGirlSkirt />} />
        <Route path="kids/kidsGirTop" element={<KidsGirlTop />} />
        <Route path="kids/kidsJeans" element={<KidsJeans />} />
        <Route path="kids/kidsShirt" element={<KidsShirt />} />
        <Route path="kids/kidsTshirt" element={<KidsTshirt />} />

         <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<AddToCart />} />
        <Route path = "otp/verify" element={<OtpVerify />} />
      </Route>

      {/* Auth Routes */}
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Route>
  )
);


export default function App() {
  // const [type, setType] = useState("signIn");
  // const handleOnClick = text => {
  //   if (text !== type) {
  //     setType(text);
  //     return;
  //   }
  // };
  // const containerClass =
  //   "container " + (type === "signUp" ? "right-panel-active" : "");
  // return (
  //   <div className="App">
  //     <h2>Sign in/up Form</h2>
  //     <div className={containerClass} id="container">
  //       <Signup />
  //       <Login />
  //       <div className="overlay-container">
  //         <div className="overlay">
  //           <div className="overlay-panel overlay-left">
  //             <h1>Welcome Back!</h1>
  //             <p>
  //               To keep connected with us please login with your personal info
  //             </p>
  //             <button
  //               className="ghost"
  //               id="signIn"
  //               onClick={() => handleOnClick("signIn")}
  //             >
  //               Sign In
  //             </button>
  //           </div>
  //           <div className="overlay-panel overlay-right">
  //             <h1>Hello, Friend!</h1>
  //             <p>Enter your personal details and start journey with us</p>
  //             <button
  //               className="ghost "
  //               id="signUp"
  //               onClick={() => handleOnClick("signUp")}
  //             >
  //               Sign Up
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
 
  return <RouterProvider router={router} />
}
