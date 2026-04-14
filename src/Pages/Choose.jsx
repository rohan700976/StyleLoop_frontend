import React from 'react';
import premiumImg from '../assets/chooseUsIcon/premium.png';
import transactionImg from '../assets/chooseUsIcon/transaction.png';
import returnImg from '../assets/chooseUsIcon/return.png';
import secureImg from '../assets/chooseUsIcon/secure.png';
import chooseImg from '../assets/chooseUsIcon/chooseImg.jpg';

function Choose() {
  return (
    <div className='w-full px-4 sm:px-6 lg:px-8'>
      {/* Title */}
      <div className='flex justify-center '>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl animate-bounce text-indigo-600 text-center'>
          Why Choose Us!
        </h1>
      </div>

      {/* Main content layout */}
      <div className='flex flex-col lg:flex-row gap-2 mt-8'>
        {/* Left: Grid section */}
        <div className='lg:w-[65%] w-full sm:h-132  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 '>

          {/* Premium Quality */}
          <div className='bg-[#7df6e7aa] transition-transform duration-300 p-4 rounded 
            hover:opacity-90 hover:text-black hover:shadow-xl hover:scale-[1.02] sm:h-65 sm:w-72 ml-2'>
            <div className='h-12 w-14 m-auto'><img src={premiumImg} alt="Premium Quality" /></div>
            <h1 className='font-bold text-xl sm:text-2xl text-center mt-2'>Premium Quality</h1>
            <p className='text-center mt-2 text-sm'>
              We use high-grade fabrics and fine craftsmanship to ensure every piece feels as good as it looks.
            </p>
          </div>

          {/* Affordable Pricing */}
          <div className='bg-[#7df6e7aa] transition-transform duration-300 rounded py-4
            hover:opacity-90 hover:text-black hover:shadow-xl hover:scale-[1.02] sm:h-65 sm:w-72 '>
            <div className='h-10 w-12 m-auto'><img src={transactionImg} alt="Affordable Pricing" /></div>
            <h1 className='font-bold text-xl sm:text-2xl text-center mt-4'>Affordable Pricing</h1>
            <p className='text-center mt-2 text-sm'>
              Style shouldn’t break the bank. We offer trendy clothing at prices that make sense.
            </p>
          </div>

          {/* Easy Returns (spans two columns on large screens) */}
          <div className='bg-[#7df6e7aa] transition-transform duration-300 p-2 rounded col-span-1 sm:col-span-2 lg:col-span-2
            hover:opacity-90 hover:text-black hover:shadow-xl hover:scale-[1.02]  sm:h-63 sm:mt-2 sm:w-150 ml-2'>
            <div className='h-12 w-14 m-auto'><img src={returnImg} alt="Easy Returns" /></div>
            <h1 className='font-bold text-xl sm:text-2xl text-center mt-4'>Easy Returns</h1>
            <p className='text-center mt-4 text-sm'>
              Changed your mind? No worries! Enjoy a hassle-free return and exchange policy designed for your ease.
            </p>
          </div>

           {/* 7. Secure Payments */}
          <div className='row-start-1 row-end-3  bg-[#7df6e7aa] hidden sm:block  border-b-blue-500 transition-transform duration-400
           hover:shadow-xl hover:scale-[1.02] hover:bg-[#7df6e7aa] hover:opacity-90 hover:text-black sm:h-132'>
            <div className='h-14 w-16 mt-4 m-auto'><img src={secureImg} alt="Secure Payments" /></div>
            <h1 className='text-2xl font-bold flex justify-center mt-4'>Secure Payments</h1>
            <p className='flex justify-center mt-3 text-center'>
              Your transactions are safe <br />
              with us, thanks to trusted and <br />
              encrypted payment gateways.
            </p>
            <h4 className='text-left pl-10 pt-2 text-[18px] font-bold'>Cash on Delivery:
              <p className='font-normal text-[13px]'>Pay when your order arrives at your doorstep.</p>
            </h4>
            <h4 className='text-left pl-10 pt-2 text-[18px] font-bold'>Credit/Debit Cards:
              <p className='font-normal text-[13px]'>Fast, reliable payments using Visa, MasterCard & more.</p>
            </h4>
            <h4 className='text-left pl-10 pt-2 text-[18px] font-bold'>Net Banking:
              <p className='font-normal text-[13px]'>Direct bank transfers with top Indian banks.</p>
            </h4>
            <h4 className='text-left pl-10 pt-2 text-[18px] font-bold'>UPI:
              <p className='font-normal text-[13px]'>Simple, instant payments using your UPI ID (Google Pay, PhonePe, Paytm).</p>
            </h4>
          </div>

          {/* Secure Payments (spans full height on large screens)  mobile*/}
          <div className='bg-[#7df6e7aa] block sm:hidden transition-transform duration-300 p-4 rounded row-span-2 
            hover:opacity-90 hover:text-black hover:shadow-xl hover:scale-[1.02]'>
            <div className='h-14 w-16 m-auto'><img src={secureImg} alt="Secure Payments" /></div>
            <h1 className='font-bold text-xl sm:text-2xl text-center mt-4'>Secure Payments</h1>
            <p className='text-center mt-3 text-sm'>
              Your transactions are safe with us, thanks to trusted and encrypted payment gateways.
            </p>
            {/* <div className='mt-4 text-sm'>
              <h4 className='font-bold'>Cash on Delivery:</h4>
              <p className='pl-2'>Pay when your order arrives at your doorstep.</p>

              <h4 className='font-bold mt-2'>Credit/Debit Cards:</h4>
              <p className='pl-2'>Fast, reliable payments using Visa, MasterCard & more.</p>

              <h4 className='font-bold mt-2'>Net Banking:</h4>
              <p className='pl-2'>Direct bank transfers with top Indian banks.</p>

              <h4 className='font-bold mt-2'>UPI:</h4>
              <p className='pl-2'>Simple, instant payments using your UPI ID (Google Pay, PhonePe, Paytm).</p>
            </div> */}
          </div>
        </div>

        {/* Right: Image section */}
        <div className='lg:w-[35%] w-full sm:h-132'>
          <img src={chooseImg} alt="Choose Us" className='w-full sm:h-132 rounded-lg' />
        </div>
      </div>
    </div>
  );
}

export default Choose;
