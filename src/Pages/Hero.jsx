import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GradientText from '../Component/GradientText'
import TrueFocus from '../Component/TrueFocus';

import kurti from '../assets/womenImg/k1.jpg'
import lehnga from '../assets/womenImg/l1.jpg'
import jeans from '../assets/J1.jpg'
import girlJeans from '../assets/girlJeansImg/g1.jpg'
import tshirt from '../assets/t1.jpg'
import shirt from '../assets/shirt1.jpg'
import lehnga2 from '../assets/womenImg/l2.jpg'
import tshirt2 from '../assets/t2.jpg'
import girlJeans2 from '../assets/girlJeansImg/g3.jpg'
import tshirt3 from '../assets/t3.jpg'
import lehnga3 from '../assets/womenImg/l5.jpg'
import tshirt4 from '../assets/t6.jpg'
import girlJeans3 from '../assets/girlJeansImg/g5.jpg'

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const squareData = [
  { id: 1, src: kurti }, { id: 2, src: lehnga }, { id: 3, src: tshirt }, { id: 4, src: jeans },
  { id: 5, src: shirt }, { id: 6, src: girlJeans }, { id: 7, src: lehnga2 }, { id: 8, src: tshirt2 },
  { id: 9, src: tshirt3 }, { id: 10, src: girlJeans3 }, { id: 11, src: girlJeans2 }, { id: 12, src: lehnga3 },
  { id: 13, src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" },
  { id: 14, src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80" },
  { id: 15, src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&auto=format&fit=crop&w=681&q=80" },
  { id: 16, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1820&q=80" },
];

const generateSquares = (count = 16) => {
  return shuffle([...squareData]).slice(0, count).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-2xl overflow-hidden shadow-sm"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardCount = () => {
    if (windowWidth < 640) return 6;
    if (windowWidth < 1024) return 12;
    return 16;
  };

  useEffect(() => {
    setSquares(generateSquares(getCardCount()));
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, [windowWidth]);

  const shuffleSquares = () => {
    setSquares(generateSquares(getCardCount()));
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className={`grid gap-3 sm:gap-4 w-full max-w-full lg:max-w-5xl mx-auto mt-10 lg:mt-0 px-2 sm:px-4
      ${windowWidth < 640 
        ? "grid-cols-2 grid-rows-3 h-[320px]" 
        : windowWidth < 1024
          ? "grid-cols-3 grid-rows-4 h-[420px]"
          : "grid-cols-4 grid-rows-4 h-[550px]"}`}>
      {squares}
    </div>
  );
};

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative w-full min-h-screen lg:h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center px-6 sm:px-16 lg:px-24 py-20 lg:py-0 gap-12 lg:gap-24 text-gray-200 overflow-x-hidden"
    >
      <div className="space-y-6 lg:space-y-8 text-center lg:text-left z-10 max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
        <TrueFocus
          className="inline-block text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight"
          style={{ color: "rgb(30, 229, 233)" }}
          sentence="Style Meets Comfort"
          manualMode={false}
          blurAmount={5}
          borderColor="rgb(30, 229, 233)"
          animationDuration={2}
          pauseBetweenAnimations={0}
        />
        
        <div className="relative">
          <GradientText
            colors={["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C", "#13FFAA"]}
            animationSpeed={5}
            showBorder={false}
            className="leading-none"
          >
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter">
              Affordable Fashion <br className="hidden sm:block" /> For Every Occasion
            </h1>
          </GradientText>
        </div>

        <p className="text-sm sm:text-lg lg:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Step into StyleLoop's premium collection. Where high-end quality meets ultimate comfort. Discover your own definition of style today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-95">
            Shop Collection
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-sm transition-all active:scale-95">
            View Lookbook
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center lg:h-full">
        <ShuffleGrid />
      </div>

      {/* Decorative Elements - Contain strictly to stop "shaking" */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-600/5 rounded-full blur-[120px]"></div>
      </div>
    </motion.section>
  );
};

export default Hero;
