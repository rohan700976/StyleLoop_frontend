import React from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const navigate = useNavigate();

  // 👉 Open Product Detail Page
  const openProductDetail = () => {
    navigate(`/product/${product.Product_Id}`, {
      state: { product },
    });
  };

  // 👉 Wishlist
  const handleWishList = async (e) => {
    e.stopPropagation(); // prevent page navigation
    try {
      const {
        Brand_Name,
        Product_Name,
        Actual_Price,
        Discounted_Price,
        Image1,
      } = product;

      const response = await axios.post(
        `${import.meta.env.VITE_URL}/wishlist/insert/1`,
        {
          Brand_Name,
          Product_Name,
          Actual_Price,
          Discounted_Price,
          Product_Img: Image1,
        }
      );

      if (response.status === 200) {
        toast.success("item add to wishlist")
        // console.log("Added to Wishlist:", response.data);
      }
    } catch (error) {
      console.error("Error while adding to wishlist:", error);
    }
  };

  // 👉 Add to Cart
  const handleAddToCart = async (e) => {
    e.stopPropagation(); // prevent page navigation
    try {
      const {
        Brand_Name,
        Product_Name,
        Actual_Price,
        Discounted_Price,
        Image1,
      } = product;

      const response = await axios.post(
        `${import.meta.env.VITE_URL}/cart/insert/1`,
        {
          Brand_Name,
          Product_Name,
          Actual_Price,
          Discounted_Price,
          Product_Img: Image1,
        }
      );

      if (response.status === 200) {

        toast.success("item add to cart")
        // console.log("Added to Cart:", response.data);
      }
    } catch (error) {
      console.error("Error while adding to cart:", error);
    }
  };

  return (
    <div
      onClick={openProductDetail}
      className="w-40 sm:w-68 h-auto rounded-2xl overflow-hidden shadow-lg 
                 hover:shadow-2xl transition-all duration-300 bg-white 
                 relative group cursor-pointer"
    >
      {/* ❤️ Wishlist Icon */}
      <div
        onClick={handleWishList}
        className="absolute top-2 right-2 bg-white rounded-full p-2 
                   flex items-center justify-center z-10 shadow-md"
      >
        <FaHeart className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
      </div>

      {/* 🖼 Product Image */}
      <div className="w-full h-52 sm:h-60 bg-gray-100 overflow-hidden">
        <img
          src={product.Image1}
          alt={product.Product_Name}
          className="w-full h-full object-cover 
                     transform group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* ℹ Product Info */}
      <div className="p-3 space-y-1">
        <span className="text-sm sm:text-md font-bold text-pink-600 block">
          {product.Brand_Name}
        </span>

        <p className="text-xs sm:text-sm font-semibold text-green-600 line-clamp-2 min-h-[40px]">
          {product.Product_Name}
        </p>

        <div className="flex items-center gap-3">
          <span className="text-indigo-600 font-bold text-base sm:text-lg">
            ₹{product.Discounted_Price}
          </span>
          <span className="line-through text-pink-400 text-xs sm:text-sm">
            ₹{product.Actual_Price}
          </span>
        </div>
      </div>

      {/* 🛒 Buttons */}
      <div className="flex flex-col sm:flex-row justify-between px-3 pb-4 gap-2">
        <button
          onClick={handleAddToCart}
          className="w-full sm:flex-1 bg-indigo-600 text-white h-9 sm:h-11 
                     font-medium rounded-lg hover:bg-indigo-500 transition"
        >
          Add to Cart
        </button>

        <button
          onClick={(e) => e.stopPropagation()}
          className="w-full sm:flex-1 border-2 border-indigo-600 h-9 sm:h-11 
                     text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;