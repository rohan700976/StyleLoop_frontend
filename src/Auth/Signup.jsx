import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {

  const navigate = useNavigate();
  const [userOtp, SetUserOtp] = useState([]);
  const [signup, SetSignup] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    mobileNo: "",

  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_URL}/auth/signup`, {
        user_name: signup.name,
        user_email: signup.email,
        user_password: signup.password,
        user_mobile: signup.mobileNo,
        user_address: signup.address,
        user_img: "https://unsplash.com/photos/black-and-gray-jet-in-sky-x7bbQIY6H04",
        isverifying: false,
      });

      if (response.status == 201) {
        toast.success("user created succesfully")
        const otp = Math.floor(100000 + Math.random() * 900000);

        const res = await axios.get(
          `${import.meta.env.VITE_URL}/auth/send/${signup.email}/${otp}`
        );
        if (res.status === 200) {

          localStorage.setItem("otp", otp);
          localStorage.setItem("email", signup.email);

          alert("OTP sent to your email");
          navigate("/otp/verify");
        }
      }

    } catch (error) {
      console.error(error);

    }

    const generateOtp = async (email) => {
      const otp = Math.random() * 1000 + Math.random() * 1000 + Math.random() * 100 + Math.random() * 10;
      await axios.get(`${import.meta.env.VITE_URL}/auth/send/${email}/${otp}`)
      if (userOtp === otp) {
        console.log(userOtp + ":" + otp);

        axios.get(`${import.meta.env.VITE_URL}/verify/${email}/true`)
      }
    }


  }

  return (
    <form
      onSubmit={handleSignUp}
      className="bg-white flex flex-col justify-center w-full max-w-md mx-auto text-center h-full"
    >
      <h1 className="font-extrabold text-3xl lg:text-4xl text-slate-900 mb-6 lg:mb-8">Create Account</h1>

      <div className="space-y-4 w-full">
        <input
          type="text"
          value={signup.name}
          onChange={(e) => SetSignup({ ...signup, name: e.target.value })}
          placeholder="Full Name"
          className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
        />

        <input
          type="email"
          value={signup.email}
          onChange={(e) => SetSignup({ ...signup, email: e.target.value })}
          placeholder="Email Address"
          className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
        />

        <input
          type="password"
          value={signup.password}
          onChange={(e) => SetSignup({ ...signup, password: e.target.value })}
          placeholder="Password"
          className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
        />

        <input
          type="number"
          value={signup.mobileNo}
          onChange={(e) => SetSignup({ ...signup, mobileNo: e.target.value })}
          placeholder="Mobile Number"
          className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
        />

        <input
          type="text"
          value={signup.address}
          onChange={(e) => SetSignup({ ...signup, address: e.target.value })}
          placeholder="Current Address"
          className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-8 lg:mt-10 rounded-xl bg-blue-600 text-white font-bold py-3.5 px-4 uppercase tracking-wide hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md shadow-blue-600/20"
      >
        Sign Up
      </button>
    </form>
  );
}

export default Signup;