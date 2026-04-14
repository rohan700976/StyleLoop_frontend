import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  // true = Login, false = Signup
  const [signIn, setSignIn] = useState(true);

  // 🔹 URL ke base par initial screen decide karo
  useEffect(() => {
    if (location.pathname === "/auth/signup") {
      setSignIn(false);
    } else {
      setSignIn(true);
    }
  }, [location.pathname]);

  // 🔹 Toggle handlers (UI + URL sync)
  const handleSignIn = () => {
    setSignIn(true);
    navigate("/auth/login", { replace: true });
  };

  const handleSignUp = () => {
    setSignIn(false);
    navigate("/auth/signup", { replace: true });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Auth Page</h1>

      <div
        className="bg-white rounded-lg shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]
        relative overflow-hidden w-[678px] max-w-full min-h-[400px]"
      >
        {/* 🔹 LOGIN FORM */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ease-in-out
          ${signIn ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Login />
        </div>

        {/* 🔹 SIGNUP FORM */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ease-in-out
          ${!signIn ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Signup />
        </div>

        {/* 🔹 OVERLAY */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden
          transition-transform duration-500 ease-in-out z-50
          ${!signIn ? "-translate-x-full" : ""}`}
        >
          <div
            className={`bg-blue-400 text-white relative -left-full h-full w-[200%]
            transition-transform duration-500 ease-in-out
            ${!signIn ? "translate-x-1/2" : ""}`}
          >
            {/* 🔸 LEFT PANEL (Login side) */}
            <div className="absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2">
              <h1 className="font-bold text-2xl">Welcome Back!</h1>
              <p className="text-sm my-5">
                To keep connected with us please login
              </p>
              <button
                onClick={handleSignIn}
                className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 uppercase"
              >
                Sign In
              </button>
            </div>

            {/* 🔸 RIGHT PANEL (Signup side) */}
            <div className="absolute right-0 flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2">
              <h1 className="font-bold text-2xl">Hello, Friend!</h1>
              <p className="text-sm my-5">
                Enter your personal details and start your journey
              </p>
              <button
                onClick={handleSignUp}
                className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 uppercase"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
