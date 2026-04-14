import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const navigate = useNavigate();
  const storedOtp = localStorage.getItem("otp");
  const email = localStorage.getItem("email");

  const [userOtp, setUserOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async () => {
    if (userOtp === storedOtp) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_URL}/auth/verify/${email}/true`
        );

        if (response.status === 200) {
          alert("OTP verified successfully");
          navigate("/");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[350px] text-center">
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>

        <input
          type="number"
          placeholder="Enter 6-digit OTP"
          value={userOtp}
          onChange={(e) => setUserOtp(e.target.value)}
          className="border py-3 px-4 w-full rounded mb-3 text-center tracking-widest"
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={handleVerify}
          className="bg-blue-500 text-white py-3 w-full rounded hover:bg-blue-600 transition active:scale-95"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpVerify;
