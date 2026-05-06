import React, { useEffect, useState } from 'react'
import FilterSidebar from './FilterSidebar'
import ProductCard from '../Card/ProductCard'
import demo from '../assets/Rohan.jpg'
import axios from 'axios'

const Products = ({ details, detail, tableName, setDetails }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  const showLess = () => {
    setVisibleCount(8);
  };

  const currentList = detail != null ? detail : details;

  return (
    <div className="flex gap-4 p-6">
      {/* Sidebar */}
      <div className="w-full max-w-xs hidden sm:block">
        <FilterSidebar tableName={tableName} setDetails={setDetails} details={detail} />
      </div>

      {/* Cards Section */}
      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentList.slice(0, visibleCount).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-10 mb-4 flex justify-center">
          {currentList.length > visibleCount ? (
            <button
              onClick={loadMore}
              className="group flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95"
            >
              <span>View More</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : currentList.length > 8 ? (
            <button
              onClick={showLess}
              className="group flex items-center justify-center gap-2 bg-slate-50 text-slate-600 hover:bg-slate-200 px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95"
            >
              <span>Show Less</span>
              <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Products;