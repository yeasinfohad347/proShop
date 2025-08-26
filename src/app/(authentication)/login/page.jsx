// app/login/page.jsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value

    // Example: call NextAuth signIn with credentials
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="card w-full max-w-md shadow-2xl bg-white rounded-3xl p-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your account to continue
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Email & Password */}
          <input
            type="email"
            name="email"
            placeholder="Email"
           
            className="input input-bordered w-full rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
        
            className="input input-bordered w-full rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-full rounded-xl bg-[#F07F13] hover:bg-orange-600 border-none text-white py-3 text-lg"
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-3 my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={() => signIn("google")}
          className="btn btn-outline btn-accent w-full rounded-xl border-[#F07F13] text-[#F07F13] hover:bg-[#F07F13] hover:text-white transition py-3 text-lg"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-[#F07F13] font-semibold underline">
            Sign Up
          </a>
        </p>

        <p className="mt-2 text-center text-gray-400 text-sm">
          <a href="/forgot-password" className="underline hover:text-[#F07F13]">
            Forgot Password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
