import React from 'react'

// import tshirt from "../../assets/t3.jpg";
// import tshirt2 from "../../assets/t4.jpg";
// import tshirt3 from "../../assets/t5.jpg";

function LandingPageBanner(props) {
  return (
    // <div className='border border-amber-400'>`
      <div className={`w-[98%] h-[400px]  grid grid-cols-2  px-10 ${props.bgcolor} rounded-2xl shadow-lg ml-4`}>
        <div className='w-full h-[400px] px-30 py-20'>
          <div className=' space-y-4 space-x-10'>
            <h3 className='text-white text-2xl'># Big Fashion Sale</h3>


            <div className=' space-y-2 '>
              <h1 className='text-black font-bold text-5xl'>Limited Time Offer!</h1>
              <h1 className='text-black font-bold text-5xl'>Up TO 50% OFF!</h1>
            </div>

            <span className='text-white text-2xl'>Redefine Your Everyday Style</span>
          </div>
        </div>

        <div className='w-full h-[450]  flex m-auto pl-10'>
          <div >
            <img src={props.img}
              className='w-full h-full '
            />
          </div>
          {/* <div className='z-0'>
                    <img src={tshirt2} 
                      className='w-[200px] h-[200px] -rotate-10 '
                      />
                </div>
                <div className='z-10'>
                    <img src={tshirt3} 
                      className='w-[200px] h-[200px] rotate-30 '
                      />
                </div> */}
        </div>

      </div>
    // </div>

  )
}

export default LandingPageBanner