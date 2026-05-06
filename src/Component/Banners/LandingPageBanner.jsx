import React from 'react'

// import tshirt from "../../assets/t3.jpg";
// import tshirt2 from "../../assets/t4.jpg";
// import tshirt3 from "../../assets/t5.jpg";

function LandingPageBanner(props) {
  return (
    // <div className='border border-amber-400'>`
    <div className={`w-[95%] md:w-[98%] min-h-[350px] md:h-[400px] grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 py-10 md:py-0 ${props.bgcolor} rounded-3xl shadow-xl mx-auto my-4 transition-all duration-300`}>
      {/* Text Content */}
      <div className="flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6">
        <h3 className="text-white text-lg md:text-2xl font-medium tracking-wide opacity-90">
          # Big Fashion Sale
        </h3>

        <div className="space-y-2">
          <h1 className="text-black font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Limited Time Offer!
          </h1>
          <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl">
            Up TO 50% OFF!
          </h2>
        </div>

        <p className="text-white/90 text-sm md:text-xl font-medium italic">
          Redefine Your Everyday Style
        </p>
      </div>

      {/* Image Content */}
      <div className="flex items-center justify-center relative h-[250px] md:h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={props.img} 
            alt="Promotion"
            className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105" 
          />
        </div>
      </div>
    </div>

    // </div>

  )
}

export default LandingPageBanner