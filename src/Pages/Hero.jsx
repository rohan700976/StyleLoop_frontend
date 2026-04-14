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

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg overflow-hidden"
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
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="  mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt- grid-rows-4 gap-4
     h-[400px] sm:h-[500px] md:h-[600px] w-full">
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
      className="w-full h-screen  px-4 sm:px-6 md:px-12 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-gray-200"
    >
      <div className="space-y-4 text-center md:text-left">
        <TrueFocus
          className="block mb-4 text-2xl sm:text-3xl md:text-4xl font-medium"
          style={{ color: "rgb(30, 229, 233)" }}
          sentence="Style Meets Comfort"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={0}
        />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Affordable Fashion for Every Occasion
          </h3>
        </GradientText>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 my-4 md:my-6">
          Discover the latest arrivals in men's and women's fashion. From everyday essentials to standout statement pieces — redefine your style effortlessly.
        </p>
      </div>

      <div className="w-full">
        <ShuffleGrid />
      </div>
    </motion.section>
  );
};

export default Hero;
