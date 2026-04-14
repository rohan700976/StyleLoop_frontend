import React, { useState } from "react";
import axios from 'axios';

export default function FilterSidebar({ tableName, details, setDetails }) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openFabric, setOpenFabric] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [openOccasion, setOpenOccasion] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openAvailability, setOpenAvailability] = useState(false);


  const [priceToogle, setPriceToogle] = useState(false);
  const [brandToogle, setBrandToogle] = useState(false);
  const [fabricToogle, setFabricToogle] = useState(false);
  const [occasionToogle, setOccasionToogle] = useState(false);
  const [ratingToogle, setRatingToogle] = useState(false);
  const [sizeToogle, setSizeToogle] = useState(false);

  const handleFabric = async (event) => {
    const selectedFabric = event.target.value;

    try {
      if (priceToogle || occasionToogle || brandToogle || ratingToogle || sizeToogle) {
        const filtered = details.filter(item => item.Fabric === selectedFabric);
        console.log(filtered);
        setDetails(filtered);
      } else {
        const res = await axios.get(`${import.meta.env.VITE_URL}/filter/${tableName}/fabric/${selectedFabric}`);
        setDetails(res.data);
      }
      setFabricToogle(true);
    } catch (err) {
      console.error("Fabric filter error:", err);
    }
  };

    const handleSize = async (event) => {
    const selectedSize = event.target.value;

    try {
      if (priceToogle || occasionToogle || brandToogle || ratingToogle || fabricToogle) {
        const filtered = details.filter(item => item.Size === selectedSize);
        console.log(filtered);
        setDetails(filtered);
      } else {
        const res = await axios.get(`${import.meta.env.VITE_URL}/filter/${tableName}/size/${selectedSize}`);
        setDetails(res.data);
      }
      setSizeToogle(true);
    } catch (error) {
      console.error("Size filter error:", error);
    }
  };

    const handleBrand = async (event) => {
    const selectedBrand = event.target.value;
    try {
      if (priceToogle || occasionToogle || fabricToogle || ratingToogle || sizeToogle) {
        const filtered = details.filter(item => item.Brand === selectedBrand);
        console.log(filtered);
        setDetails(filtered);
      } else {
        const res = await axios.get(`${import.meta.env.VITE_URL}/filter/${tableName}/brand/${selectedBrand}`);
        setDetails(res.data);
      }
      setBrandToogle(true);
    } catch (error) {
      console.error("Brand filter error:", error);
    }
  };

  const handlePrice = async (event) => {
    const selectedPrice = event.target.value;

    const [p1, p2] = selectedPrice.replace(/₹/g, '').split('-').map(p => parseInt(p.trim()));

    try {
      if (fabricToogle || occasionToogle || ratingToogle || brandToogle || sizeToogle) {
        const filtered = details.filter(item =>
          item.Discounted_Price >= p1 && item.Discounted_Price <= p2
        );
        console.log(filtered);
        setDetails(filtered);
      } else {
        const res = await axios.get(`${import.meta.env.VITE_URL}/filter/${tableName}/price/${p1}/${p2}`);
        setDetails(res.data);
      }
      setPriceToogle(true);
    } catch (error) {
      console.error("Price filter error:", error);
    }
  };

  const handleRating = async (event) => {
    const selectedRating = event.target.value;
    const rating = parseInt(selectedRating);

    try {
      if (priceToogle || occasionToogle || brandToogle || fabricToogle || sizeToogle) {
        const filtered = details.filter(item => item.Rating == rating);
        console.log(filtered);
        setDetails(filtered);
      } else {
        const res = await axios.get(`${import.meta.env.VITE_URL}/filter/${tableName}/rating/${selectedRating}`);
        setDetails(res.data);
      }
      setRatingToogle(true);
    } catch (error) {
      console.error("Rating filter error:", error);
    }
  };

    const handleOccasion = async (event) => {
    const selectedOccasion = event.target.value;
    try {
      if (priceToogle || brandToogle || fabricToogle || ratingToogle || sizeToogle) {
        const filtered = details.filter(item => item.Occasion === selectedOccasion);
        console.log(filtered);
        setDetails(filtered);
      } else {
        const res = await axios.get(`${import.meta.env.VITE_URL}/filter/${tableName}/occasion/${selectedOccasion}`);
        setDetails(res.data);
      }
      setOccasionToogle(true);
    } catch (error) {
      console.error("Occasion filter error:", error);
    }
  };

    const handleCategory = async (event) => {
    const selectedCategory = event.target.value;
    try {
      const res = await axios.get(`${import.meta.env.VITE_URL}/women/${selectedCategory}`);
      setDetails(res.data);
    } catch (error) {
      console.error("Category filter error:", error);
    }
  };


  const handleFilter = () => {
    console.log("Handle availability filter here");
  };
  return (
    <div className="w-full max-w-xs p-4 borderbg-[#F2F2F2] rounded-lg shadow-sm">
      {/* <Products classname='display-none' fabric /> */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-600">FILTERS</h2>
        <p className="text-xs text-gray-500">1000+ Products</p>
      </div>
      <hr className="mb-4" />

      {/* Category */}
      <div className="mb-4">
        <button onClick={() => setOpenCategory(!openCategory)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Category</span>
          <span className="text-xl">{openCategory ? "▲" : "▼"}</span>
        </button>
        {openCategory && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["womanlehenga", "womanjeans", "womenkurtas", "menstshirt", "menshirt", "mensjeans"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onChange={handleCategory}
                  value={opt}
                  className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Price */}
      <div className="mb-4">
        <button onClick={() => setOpenPrice(!openPrice)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Price</span>
          <span className="text-xl">{openPrice ? "▲" : "▼"}</span>
        </button>
        {openPrice && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["Below ₹100", "₹100 - ₹200", "₹200 - ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "₹2000 - ₹5000"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onClick={handlePrice}
                  value={opt}
                  className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Fabric */}
      <div className="mb-4">
        <button onClick={() => setOpenFabric(!openFabric)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Fabric</span>
          <span className="text-xl">{openFabric ? "▲" : "▼"}</span>
        </button>
        {openFabric && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["Cotton Blend", "Polyester", "Silk", "Linen", "Denim", "Wool", "Rayon", "Nylon", "Georgette", "Chiffon"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={opt}
                  onChange={handleFabric}
                  className="accent-indigo-600"
                />

                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <button onClick={() => setOpenRating(!openRating)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Rating</span>
          <span className="text-xl">{openRating ? "▲" : "▼"}</span>
        </button>
        {openRating && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onClick={handleRating}
                  value={opt}
                  className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Occasion */}
      <div className="mb-4">
        <button onClick={() => setOpenOccasion(!openOccasion)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Occasion</span>
          <span className="text-xl">{openOccasion ? "▲" : "▼"}</span>
        </button>
        {openOccasion && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["Casual", "Formal", "Party", "Wedding", "Ethnic"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onChange={handleOccasion}
                  value={opt}
                  className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Size */}
      <div className="mb-4">
        <button onClick={() => setOpenSize(!openSize)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Size</span>
          <span className="text-xl">{openSize ? "▲" : "▼"}</span>
        </button>
        {openSize && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["Free Size", "S", "M", "L", "XL", "XXL"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onChange={handleSize}
                  value={opt}
                  className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Brand */}
      <div className="mb-4">
        <button onClick={() => setOpenBrand(!openBrand)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Brand</span>
          <span className="text-xl">{openBrand ? "▲" : "▼"}</span>
        </button>
        {openBrand && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["BURDY", "SAVON", "Nike", "Adidas", "Zara", "Puma", "Levi's"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onChange={handleBrand}
                  value={opt}
                  className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Availability */}
      <div className="mb-4">
        <button onClick={() => setOpenAvailability(!openAvailability)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Availability</span>
          <span className="text-xl">{openAvailability ? "▲" : "▼"}</span>
        </button>
        {openAvailability && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" onClick={handleFilter} className="accent-indigo-600" /> In Stock
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" onClick={handleFilter} className="accent-indigo-600" /> Out of Stock
            </label>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
}