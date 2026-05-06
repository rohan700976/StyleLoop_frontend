import React from 'react';
import premiumImg from '../assets/chooseUsIcon/premium.png';
import transactionImg from '../assets/chooseUsIcon/transaction.png';
import returnImg from '../assets/chooseUsIcon/return.png';
import secureImg from '../assets/chooseUsIcon/secure.png';
import chooseImg from '../assets/chooseUsIcon/chooseImg.jpg';

const FeatureCard = ({ icon, title, description, className = "" }) => (
  <div className={`group relative bg-white border border-slate-200 p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] hover:border-blue-400/50 ${className}`}>
    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 mx-auto md:mx-0 flex items-center justify-center p-3 bg-blue-50 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-3 text-center md:text-left tracking-tight">{title}</h3>
    <p className="text-slate-500 text-sm sm:text-base leading-relaxed text-center md:text-left font-medium">
      {description}
    </p>
  </div>
);


function Choose() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Our Philosophy</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-slate-900">
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700">Choose Us?</span>
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-6 shadow-[0_4px_15px_rgba(37,99,235,0.3)]" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Features Grid */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={premiumImg}
                title="Premium Quality"
                description="We use high-grade fabrics and fine craftsmanship to ensure every piece feels as good as it looks."
              />

              <FeatureCard 
                icon={transactionImg}
                title="Affordable Pricing"
                description="Style shouldn't break the bank. We offer trendy clothing at prices that finally make sense."
              />

              <FeatureCard 
                icon={returnImg}
                title="Easy Returns"
                description="Changed your mind? No worries! Enjoy a hassle-free 30-day return policy designed for your convenience."
                className="md:col-span-2"
              />
            </div>

            {/* Secure Payments Section - Light Mode Professional */}
            <div className="relative group overflow-hidden bg-white border border-slate-200 p-8 sm:p-10 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] -mr-32 -mt-32" />
              
              <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-blue-50 rounded-[2rem] flex items-center justify-center p-6 border border-blue-100">
                  <img src={secureImg} alt="Secure" className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 text-slate-900 uppercase tracking-tight">Secure & Flexible Payments</h3>
                    <p className="text-slate-500 font-medium">Your transactions are safe with us, protected by industry-standard encryption.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Cash on Delivery", desc: "Pay when it arrives." },
                      { label: "UPI Payments", desc: "GPay, PhonePe, Paytm." },
                      { label: "Cards", desc: "Visa, Mastercard, & more." },
                      { label: "Net Banking", desc: "Direct bank transfers." }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-default">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{item.label}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Showcase Image Section */}
          <div className="lg:col-span-4 order-1 lg:order-2 group">
            <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[3/4] rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl transition-transform duration-700 hover:translate-y-[-8px]">
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={chooseImg} 
                alt="Our Style" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-20" />
              <div className="absolute bottom-10 left-10 right-10 z-30">
                <blockquote className="text-2xl font-serif italic text-white/90 leading-tight">
                  "Redefining fashion for the modern era."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Choose;

