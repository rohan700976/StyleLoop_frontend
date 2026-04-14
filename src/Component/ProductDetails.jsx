import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../Card/ProductCard";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();

  // agar state se product aaya ho to use first render pe use karenge
  const initialProduct = location.state?.product || null;

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState(initialProduct?.Image1 || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);

  const sizes = ["M", "L", "XL", "XXL"];
  console.log(selectedProduct.Discription);

  // 👉 Single Product Fetch by ID (refresh-safe)
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);

        // अगर state me product already hai aur id same hai to direct use kar lo
        if (initialProduct && String(initialProduct.Product_Id) === String(id)) {
          setSelectedProduct(initialProduct);
          setMainImage(initialProduct.Image1);
          setLoading(false);
          return;
        }

        // API se saare shirts lao aur id ke hisaab se filter karo
        // (Best practice: agar backend me single product API ho to usko use karna)
        const res = await axios.get(`${import.meta.env.VITE_URL}/menshirt/shirt`);

        const foundProduct = res.data.find(
          (item) => String(item.Product_Id) === String(id)
        );

        if (foundProduct) {
          setSelectedProduct(foundProduct);
          setMainImage(foundProduct.Image1);
        } else {
          setSelectedProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setSelectedProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProduct();
    window.scrollTo(0, 0);
  }, [id]);

  // 👉 Related Products Fetch
  useEffect(() => {
    if (!selectedProduct) return;

    const fetchRelatedProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/menshirt/shirt`);

        const filtered = res.data.filter(
          (item) => item.Product_Id !== selectedProduct.Product_Id
        );

        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchRelatedProducts();
  }, [selectedProduct]);

  // 👉 Add to Cart
  const handleAddToCart = async (e) => {
    e.stopPropagation();
    try {
      const {
        Brand_Name,
        Product_Name,
        Actual_Price,
        Discounted_Price,
        Image1,
      } = selectedProduct;

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
        console.log("Added to Cart:", response.data);
        toast.success("item add to cart");
        
      }
    } catch (error) {
      console.error("Error while adding to cart:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading product...
      </div>
    );
  }

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <>
      {/* 🔹 PRODUCT DETAILS */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-25">
        {/* LEFT - Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {[selectedProduct.Image1, selectedProduct.Image1, selectedProduct.Image1]
              .filter(Boolean)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMainImage(img);
                  }}
                  className={`w-20 h-24 object-cover border rounded-lg cursor-pointer transition
                    ${
                      mainImage === img
                        ? "border-indigo-600 ring-2 ring-indigo-200"
                        : "hover:border-gray-400"
                    }
                  `}
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="w-full h-[450px] overflow-hidden rounded-2xl shadow-lg bg-gray-100">
            <img
              src={mainImage}
              alt={selectedProduct.Product_Name}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* RIGHT - Details */}
        <div className="space-y-4">
          <p className="text-lg font-semibold text-gray-700">
            {selectedProduct.Discription}
          </p>

          <h2 className="text-2xl font-bold text-pink-600">
            {selectedProduct.Brand_Name}
          </h2>

          <p className="text-lg font-semibold text-gray-800">
            {selectedProduct.Product_Name}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-indigo-600">
              ₹{selectedProduct.Discounted_Price}
            </span>
            <span className="line-through text-gray-400">
              ₹{selectedProduct.Actual_Price}
            </span>
          </div>

          <p className="text-sm text-gray-600">⭐ {selectedProduct.Rating} Ratings</p>

          {/* Size */}
          <div>
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex gap-3 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 rounded-lg transition
                    ${
                      selectedSize === size
                        ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                        : "hover:border-indigo-600"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-500 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button className="flex-1 border-2 border-indigo-600 text-indigo-600 py-3 rounded-xl hover:bg-indigo-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 RELATED PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 mt-20 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          More Shirts You May Like
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <ProductCard key={item.Product_Id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;