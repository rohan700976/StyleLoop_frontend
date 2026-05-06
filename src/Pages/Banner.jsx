import React from 'react';
import saleImg from '../assets/SaleImg/sale.png';

function Banner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden bg-slate-950 group">
      {/* Background Image with Enhanced Contrast Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.meesho.com/images/marketing/1746425994914.webp"
          alt="banner"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
        />
        {/* Premium Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent lg:from-black/80 lg:via-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* Content Container - Centered on mobile, Left-aligned on Desktop */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-12 lg:px-24 max-w-[1400px] mx-auto w-full z-10 transition-all duration-500">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-4xl lg:text-7xl font-black mb-3 leading-[1.1] tracking-tight drop-shadow-2xl">
            Upgrade Your <br className="hidden xs:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Wardrobe
            </span>
          </h2>
          
          <p className="text-gray-200 text-xs sm:text-lg lg:text-xl font-medium mb-6 max-w-sm sm:max-w-md mx-auto md:mx-0 drop-shadow-md leading-relaxed">
            Trendy Styles • Affordable Prices • Fast Delivery
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button className="relative group/btn overflow-hidden bg-white text-black px-6 py-2.5 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Sale Image - Floating and Adaptive */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 lg:right-20 pointer-events-none z-20">
        <div className="relative animate-banner-float">
          <img 
            src={saleImg} 
            alt="Sale" 
            className="w-20 sm:w-48 md:w-64 lg:w-[450px] h-auto drop-shadow-[0_20px_60px_rgba(59,130,246,0.5)] transition-all duration-500 group-hover:rotate-6 group-hover:scale-105" 
          />
        </div>
      </div>



      {/* Decorative Aura Elements - Matching Hero Theme */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none hidden lg:block" />
      
      <style>
        {`
          @keyframes banner-float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
          .animate-banner-float {
            animation: banner-float 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Banner;


