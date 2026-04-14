import React from 'react';
import { FaHeart, FaWhatsapp } from 'react-icons/fa';

function Card(props) {
  return (
    <div className="relative h-[275px] w-[255px] rounded-xl overflow-hidden shadow-lg">
      <img
        src={props.image}
        alt="User"
        className="h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

      {/* Like and Share Icons */}
      <div className="absolute bottom-3 right-3 flex gap-2 z-10">
        {/* Like Button */}
        <div className="flex flex-col items-center text-white">
          <button className="bg-white p-1.5 rounded-full shadow hover:scale-105 transition">
            <FaHeart className="text-pink-600 text-sm" />
          </button>
          <span className="text-xs mt-1">{props.likes}</span>
        </div>

        {/* Share Button */}
        <div className="flex flex-col items-center text-white">
          <button className="bg-white p-1.5 rounded-full shadow hover:scale-105 transition">
            <FaWhatsapp className="text-green-600 text-sm" />
          </button>
          <span className="text-xs mt-1">Share</span>
        </div>
      </div>

      {/* User Info */}
      <div className="absolute bottom-16 left-4 text-left">
    
        <p className="mt-1 text-xs text-blue-50">
          {props.content}
        </p>
      </div>

      {/* Action Button (smaller) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="px-3 py-1 rounded-md bg-white/20 text-xs font-semibold text-white backdrop-blur-md hover:bg-white/30 transition">
          {props.btnTxt}
        </button>
      </div>
    </div>
  );
}

export default Card;
