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
    <section className="bg-sky-50 min-h-screen">
      <div className="container mx-auto py-5">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT SIDE */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-lg p-5 max-h-screen overflow-y-auto mt-13">
            <div className="flex justify-between items-center mb-5">
              <h1 className="font-bold text-indigo-600 text-3xl">
                Shopping Cart
              </h1>
              <p className="text-gray-500">{cart.length} items</p>
            </div>

            <hr className="my-4" />

            {cart.map((item) => (
              <React.Fragment key={item.cart_id}>
                <div className="flex flex-wrap items-center mb-4">

                  {/* Image */}
                  <div className="w-20">
                    <img
                      src={item.Product_Img}
                      alt={item.Product_Name}
                      className="rounded-lg w-full"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 px-4">
                    <h6>{item.Product_Name}</h6>
                    <h6 className="font-medium">{item.Brand_Name}</h6>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-2 text-white bg-indigo-600 rounded-md"
                      onClick={() => decreaseQty(item.cart_id)}
                    >
                      <FaMinus />
                    </button>

                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="w-14 border rounded text-center"
                    />

                    <button
                      className="p-2 text-white bg-indigo-600 rounded-md"
                      onClick={() => increaseQty(item.cart_id)}
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="w-24 text-right font-medium">
                    € {item.Discounted_Price}
                  </div>

                  {/* Remove */}
                  <button
                    className="text-gray-500 hover:text-red-500 ml-4"
                    onClick={() => handleRemove(item.cart_id)}
                  >
                    <FaTimes />
                  </button>
                </div>

                <hr className="my-4" />
              </React.Fragment>
            ))}

            <div className="pt-5">
              <button
                className="flex items-center text-gray-600"
                onClick={handleButton}
              >
                <FaArrowLeft className="mr-2" /> Back to shop
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/3 bg-gray-100 p-5 rounded-2xl mt-14">
            <h3 className="font-bold mb-5 text-indigo-600 text-2xl">
              Summary
            </h3>

            <hr className="my-4" />

            <div className="flex justify-between mb-4">
              <h5>Items {cart.length}</h5>
              <h5>€ {subtotal.toFixed(2)}</h5>
            </div>

            <h5 className="mb-3">Shipping</h5>
            <select
              className="p-2 rounded w-full"
              value={shipping}
              onChange={(e) => setShipping(Number(e.target.value))}
            >
              <option value={5}>Standard - €5</option>
              <option value={10}>Express - €10</option>
              <option value={0}>Free</option>
            </select>

            <hr className="my-4" />

            <div className="flex justify-between mb-5">
              <h5>Total</h5>
              <h5>€ {total.toFixed(2)}</h5>
            </div>

            <button className="bg-indigo-600 text-white w-full py-3 rounded-lg">
              Checkout
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AddToCart;