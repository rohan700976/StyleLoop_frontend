import React from 'react';
import Slider from 'react-slick';
import louis from '../assets/Logo/Louis.png';
import adidas from '../assets/Logo/Adidas.png';
import ck from '../assets/Logo/Ck.png';
import dior from '../assets/Logo/Dior.png';
import gucci from '../assets/Logo/Gucci.png';
import nike from '../assets/Logo/Nike.png';
import zara from '../assets/Logo/Zara.png';
import allen from '../assets/Logo/Allen.png'
import GradientText from '../Component/GradientText';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Brand() {
  const categories = [
    { label: "Louis Vuitton", img: louis },
    { label: "Adidas", img: adidas },
    { label: "Nike", img: nike },
    { label: "Dior", img: dior },
    { label: "Gucci", img: gucci },
    { label: "Ck", img: ck },
    { label: "Zara", img: zara },
    { label: "Grocery", img:allen},
  ];

  // Duplicate brands for smooth infinite effect
  const repeatedBrands = [...categories, ...categories];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <div className="flex justify-center text-center mt-5 font-semibold text-4xl md:text-6xl">
          Our Recommended Brands
        </div>
      </GradientText>

      <div className="py-10 px-4">
        <Slider {...settings}>
          {repeatedBrands.map((brand, index) => (
            <div key={index} className="px-2 group transition-transform duration-300 ease-in-out hover:scale-110 h-50 pt-10">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-blue-300 rounded-full p-4 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mx-auto transition-transform duration-300">
                  <img
                    src={brand.img}
                    alt={brand.label}
                    className="h-full object-contain"
                  />
                </div>
                <span className="text-sm text-center font-medium text-gray-800">
                  {brand.label}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Brand;
