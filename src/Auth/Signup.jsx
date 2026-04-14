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
      className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
      <h1 className="font-bold text-2xl m-0">Create Account</h1>
      <input
        type="text"
        value={signup.name}
        onChange={(e) => SetSignup({ ...signup, name: e.target.value })}
        placeholder="Name"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
      />

      <input
        type="email"
        value={signup.email}
        onChange={(e) => SetSignup({ ...signup, email: e.target.value })}
        placeholder="Email"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
      />

      <input
        type="password"
        value={signup.password}
        onChange={(e) => SetSignup({ ...signup, password: e.target.value })}
        placeholder="Password"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
      />

      <input
        type="number"
        value={signup.mobileNo}
        onChange={(e) => SetSignup({ ...signup, mobileNo: e.target.value })}
        placeholder="Enter your mobile number"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
      />

      <input
        type="text"
        value={signup.address}
        onChange={(e) => SetSignup({ ...signup, address: e.target.value })}
        placeholder="Enter your current address"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
      />


      <button
        type='submit'
        className="rounded-full  bg-blue-400 text-white text-xs font-bold py-3 px-12 tracking-wider uppercase active:scale-95" >

        Sign Up
      </button>
    </form>
  )
}

export default Signup;