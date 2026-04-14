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
      className="bg-white flex items-center justify-center flex-col px-12 h-full text-center"
    >
      <h1 className="font-bold text-2xl m-0">Sign in</h1>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
        required
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="bg-gray-200 py-3 px-4 my-2 w-full"
        required
      />

      <a href="#" className="text-gray-700 text-sm my-4">
        Forgot your password?
      </a>

      <button
        type="submit"
        className="rounded-full bg-blue-500 text-white text-xs font-bold py-3 px-12 tracking-wider uppercase active:scale-95"
      >
        Sign In
      </button>
    </form>
  );
}

export default Login;
