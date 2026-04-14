import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import menImg from '../assets/AboutUsImg/men.png';
import womenImg from '../assets/AboutUsImg/woman.png';
import kidImg from '../assets/AboutUsImg/boy.png';
import GradientText from '../Component/GradientText';

function About() {
  return (
    <div className="bg-blend-soft-light px-4 py-10">
      <h1 className="text-5xl font-bold text-center text-indigo-500 mb-10">About Us</h1>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Content Section */}
        <div className="w-full lg:w-[60%]">
          {/* Gradient Paragraph */}
          <div className="mb-10">
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <p className="font-bold text-2xl text-center">
               <p className='text-4xl '> Welcome to StyleLoop </p>
           your one-stop destination <br />for trendy,
                affordable, and <br /> quality fashion for Men, Women, and Kids.
                <p className='text-4xl'>
                   We believe that</p> 
                style is a way to express yourself—and <br />everyone
                deserves to look and feel <br />their best, no matter their age.
              </p>
            </GradientText>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Men's Card */}
            <div className="group transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-green-300 rounded-2xl border p-4 cursor-pointer hover:ring-2 hover:ring-blue-400">
              <div className="flex justify-center mb-4">
                <img src={menImg} alt="Men" className="h-20 w-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Men's Collection</h2>
              <p className="text-center text-gray-700">
                Versatile and sharp—featuring tees,<br />
                shirts, jeans, and more designed for<br />
                modern men on the move.
              </p>
            </div>

            {/* Women's Card */}
            <div className="group transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-[linear-gradient(287deg,_rgba(98,193,245,1)_0%,_rgba(242,251,252,1)_0%,_rgba(182,172,250,1)_0%,_rgba(204,240,192,1)_28%,_rgba(15,245,229,1)_47%,_rgba(15,245,229,1)_63%,_rgba(182,172,250,1)_100%)]  rounded-2xl border p-4 cursor-pointer hover:ring-2 hover:ring-pink-400">
              <div className="flex justify-center mb-4">
                <img src={womenImg} alt="Women" className="h-20 w-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Women's Collection</h2>
              <p className="text-center text-gray-700">
                Elegant and bold—ranging from ethnic<br />
                wear to western styles that embrace<br />
                individuality.
              </p>
            </div>

            {/* Kids' Card */}
            <div className="group transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-green-300 rounded-2xl border p-4 cursor-pointer hover:ring-2 hover:ring-yellow-400">
              <div className="flex justify-center mb-4">
                <img src={kidImg} alt="Kids" className="h-20 w-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Kids' Collection</h2>
              <p className="text-center text-gray-700">
                Fun, playful, and comfy—crafted<br />
                for little ones with big personalities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Lottie Animation */}
        <div className="w-full h-130 lg:w-[35%] mt-10 lg:mt-0">
          <DotLottieReact
            src="https://lottie.host/73018ec4-c020-455d-874b-acf8ce5c6b2a/43T6Zr65fa.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default About;
