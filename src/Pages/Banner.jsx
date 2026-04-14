import React from 'react';
import saleImg from '../assets/SaleImg/sale.png';

function Banner() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Banner Image */}
      <img
        src="https://images.meesho.com/images/marketing/1746425994914.webp"
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Text Block - Keep original layout */}
      <div className="absolute inset-0 flex flex-col justify-center items-end px-8  mr-[210px]">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">Upgrade Your Wardrobe</h2>
        <p className="text-white text-lg md:text-xl">Trendy Styles • Affordable Prices • Fast Delivery</p>
        <div>
          <button className="mr-[120px] mt-8 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Sale Image - independently positioned in top-right corner */}
      <div className="absolute top-0 right-0">
        <img src={saleImg} alt="Sale" className="w-[350px] h-[250px]" />
      </div>
    </div>
  );
}

export default Banner;
