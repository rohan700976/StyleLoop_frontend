import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle login submit
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      const response = await axios.post(`${import.meta.env.VITE_URL}/auth/login`, {
        email: formData.email,
        password: formData.password,
      });
   if(response.status==201){
    console.log("success");
   }
      // ✅ if success
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
      });

      // ✅ navigate after small delay (so toast can be seen)
      setTimeout(() => {
        navigate("/"); // change this to your page
      }, 2000);

      console.log("Login success:", response.data);
    } catch (error) {
      // show error toast
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed! Please try again.");
      }
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white flex flex-col justify-center w-full max-w-md mx-auto text-center h-full"
    >
      <h1 className="font-extrabold text-3xl lg:text-4xl text-slate-900 mb-6 lg:mb-8">Sign In</h1>

      <div className="space-y-4 w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
          required
        />
      </div>

      <div className="flex justify-end mt-4 mb-8 lg:mb-10 w-full">
        <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 hover:underline">
          Forgot your password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 text-white font-bold py-3.5 px-4 uppercase tracking-wide hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md shadow-blue-600/20"
      >
        Sign In
      </button>
    </form>
  );
}

export default Login;
