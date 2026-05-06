import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMinus,
  FaPlus,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";
import axios from "axios";

function AddToCart() {

  const [shipping, setShipping] = useState(5);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const handleCart = async () => {
      const response = await axios.get(`${import.meta.env.VITE_URL}/cart/getdata`);

      if (response.status === 200) {
        // ✅ quantity add kar di
        setCart(
          response.data.map((item) => ({
            ...item,
            quantity: 1,
          }))
        );
      }
    };
    handleCart();
  }, []);

  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/");
  };

  // ✅ Increase Qty
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.cart_id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Decrease Qty
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.cart_id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ✅ Remove Item
  const handleRemove = async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_URL}/cart/delete/${id}`
    );

    if (response.status === 200) {
      setCart((prev) => prev.filter((item) => item.cart_id !== id));
    }
  };

  // ✅ Correct subtotal (string → number)
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + Number(item.Discounted_Price) * item.quantity,
    0
  );

  const total = subtotal + shipping;

  return (
    <section className="bg-slate-50 min-h-screen py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-8 sm:mb-10 text-center lg:text-left">
          Shopping Cart
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT SIDE: Cart Items */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="bg-white shadow-sm ring-1 ring-slate-200 sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold text-slate-900">Your Items</h2>
                 <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                   {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
                 </span>
              </div>
              <div className="divide-y divide-slate-200 border-t border-slate-200">
                {cart.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-slate-500 text-lg">Your cart is empty.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.cart_id} className="flex flex-col sm:flex-row py-6 gap-4 sm:gap-6 items-start sm:items-center">
                      {/* Image */}
                      <div className="w-full sm:w-24 shrink-0 aspect-square sm:aspect-auto sm:h-24 overflow-hidden rounded-xl bg-slate-100 border border-slate-100">
                        <img
                          src={item.Product_Img}
                          alt={item.Product_Name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      {/* Info & Controls */}
                      <div className="flex-1 flex flex-col justify-between w-full h-full">
                        <div className="flex justify-between w-full mb-1 gap-4">
                          <h3 className="text-base font-semibold text-slate-900 line-clamp-2">{item.Product_Name}</h3>
                          <p className="text-lg font-bold text-slate-900 whitespace-nowrap">€ {item.Discounted_Price}</p>
                        </div>
                        <p className="text-sm text-slate-500 mb-4">{item.Brand_Name}</p>
                        
                        <div className="flex justify-between items-center w-full mt-auto">
                           {/* Quantity Controls */}
                           <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-sm">
                            <button
                              className="p-2 w-10 h-10 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-600"
                              onClick={() => decreaseQty(item.cart_id)}
                              disabled={item.quantity <= 1}
                            >
                              <FaMinus size={12} />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              readOnly
                              className="w-12 h-10 text-center font-medium text-slate-900 border-x border-slate-300 focus:ring-0 sm:text-sm p-0 m-0 outline-none"
                            />
                            <button
                              className="p-2 w-10 h-10 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                              onClick={() => increaseQty(item.cart_id)}
                            >
                              <FaPlus size={12} />
                            </button>
                          </div>
                          
                          {/* Remove Button */}
                          <button
                            onClick={() => handleRemove(item.cart_id)}
                            className="text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-1.5 transition-colors p-2 -mr-2"
                          >
                            <FaTimes />
                            <span className="hidden sm:inline">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            {/* Back to shop */}
            <div>
              <button
                className="group flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors py-2"
                onClick={handleButton}
              >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
                Continue Shopping
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-sm ring-1 ring-slate-200 sm:rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex justify-between text-base">
                  <p>Subtotal</p>
                  <p className="font-medium text-slate-900">€ {subtotal.toFixed(2)}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-200">
                  <label className="block text-sm font-medium text-slate-900 mb-3">
                    Shipping Estimate
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full appearance-none rounded-lg border-0 py-3 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white shadow-sm cursor-pointer transition-shadow hover:ring-slate-400 outline-none"
                      value={shipping}
                      onChange={(e) => setShipping(Number(e.target.value))}
                    >
                      <option value={5}>Standard Delivery - €5.00</option>
                      <option value={10}>Express Delivery - €10.00</option>
                      <option value={0}>Free Pickup - €0.00</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-slate-200 mt-6">
                  <p className="text-lg font-bold text-slate-900">Total</p>
                  <p className="text-2xl font-black text-indigo-600">€ {total.toFixed(2)}</p>
                </div>
              </div>

              <button 
                className="mt-8 w-full rounded-xl bg-indigo-600 px-4 py-4 text-base font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 disabled:hover:shadow-none"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AddToCart;