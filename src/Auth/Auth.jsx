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
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-10 px-4 bg-slate-50">
      <div
        className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden w-full max-w-4xl lg:min-h-[600px] flex flex-col md:block md:min-h-[500px]"
      >
        {/* Mobile View: Toggled forms */}
        <div className="md:hidden flex flex-col w-full min-h-[550px]">
          <div className="flex bg-slate-50 border-b border-slate-200">
             <button
               className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${signIn ? 'text-blue-600 bg-white border-t-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
               onClick={handleSignIn}
             >
               Sign In
             </button>
             <button
               className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${!signIn ? 'text-blue-600 bg-white border-t-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
               onClick={handleSignUp}
             >
               Sign Up
             </button>
          </div>
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center bg-white">
             {signIn ? <Login /> : <Signup />}
          </div>
        </div>

        {/* Desktop View: Sliding Panels */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          {/* 🔹 LOGIN FORM */}
          <div
            className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-700 ease-in-out p-8 lg:p-12 flex flex-col justify-center
            ${signIn ? "opacity-100 z-20 translate-x-0" : "opacity-0 z-0 translate-x-20"}`}
          >
            <Login />
          </div>

          {/* 🔹 SIGNUP FORM */}
          <div
            className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-700 ease-in-out p-8 lg:p-12 flex flex-col justify-center
            ${!signIn ? "translate-x-full opacity-100 z-20" : "opacity-0 z-0"}`}
          >
            <Signup />
          </div>

          {/* 🔹 OVERLAY */}
          <div
            className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden
            transition-transform duration-700 ease-in-out z-50
            ${!signIn ? "-translate-x-full" : ""}`}
          >
            <div
              className={`bg-blue-600 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative -left-full h-full w-[200%]
              transition-transform duration-700 ease-in-out
              ${!signIn ? "translate-x-1/2" : ""}`}
            >
              {/* 🔸 LEFT PANEL (Login side) */}
              <div className="absolute flex items-center justify-center flex-col px-10 lg:px-14 text-center top-0 h-full w-1/2">
                <h2 className="font-extrabold text-3xl lg:text-4xl mb-4">Welcome Back!</h2>
                <p className="text-base lg:text-lg text-blue-100 mb-8 leading-relaxed">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={handleSignIn}
                  className="rounded-full border-2 border-white bg-transparent text-white text-sm font-bold py-3.5 px-12 uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-all active:scale-95"
                >
                  Sign In
                </button>
              </div>

              {/* 🔸 RIGHT PANEL (Signup side) */}
              <div className="absolute right-0 flex items-center justify-center flex-col px-10 lg:px-14 text-center top-0 h-full w-1/2">
                <h2 className="font-extrabold text-3xl lg:text-4xl mb-4">Hello, Friend!</h2>
                <p className="text-base lg:text-lg text-blue-100 mb-8 leading-relaxed">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  onClick={handleSignUp}
                  className="rounded-full border-2 border-white bg-transparent text-white text-sm font-bold py-3.5 px-12 uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-all active:scale-95"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
