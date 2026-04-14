import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card2({ image, data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product', {
      state: {
        product: {
          ...data,
          image,
          name: data?.name || 'Stated Fit Jeans for Men',
          brand: data?.brand || 'Leotude',
          rating: data?.rating || 4.5,
          mrp: data?.mrp || 1099,
          price: data?.price || 499,
          sizes: data?.sizes || ['S', 'M', 'L', 'XL', '2XL', '3XL'],
          sizeChart: data?.sizeChart || {
            S: { Chest: 38, Length: 27, Shoulder: 15 },
            M: { Chest: 40, Length: 28, Shoulder: 16 },
            L: { Chest: 42, Length: 29, Shoulder: 17 },
            XL: { Chest: 44, Length: 30, Shoulder: 18 },
            '2XL': { Chest: 46, Length: 31, Shoulder: 19 },
            '3XL': { Chest: 48, Length: 31, Shoulder: 19 },
          },
        },
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="relative group w-[220px] rounded-md p-2 shadow hover:shadow-md transition h-[300px] flex flex-col justify-between cursor-pointer overflow-hidden"
    >
      <img src={image} alt="Product" className="w-full h-40 object-cover mb-2" />

      <h2 className="text-lg font-medium text-indigo-600 line-clamp-2">
        {data?.name || 'Stated Fit Jeans for Men'}
      </h2>

      <div className="text-red-600 text-[15px]">
        88% off <span className="text-[12px]">Limited time deal</span>
      </div>

      <div className="text-sm">
        <span className="text-indigo-600 font-bold text-[18px]">₹{data?.price || 499}</span>{' '}
        <span className="line-through text-gray-400 text-xs">₹{data?.mrp || 3999}</span>
      </div>

      <div className="text-[12px] text-gray-600">FREE Delivery by StyleLoop</div>

      {/* Slide-up Add to Cart button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents navigation
          console.log("Add to cart clicked");
        }}
        className="absolute bottom-0 left-0 w-full bg-indigo-600 text-white text-sm py-2 
                   transform translate-y-full opacity-0 
                   group-hover:translate-y-0 group-hover:opacity-100 
                   transition duration-500 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card2;
