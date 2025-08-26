// app/register/page.jsx
"use client";

import { registerUser } from "@/app/action/auth/registerUser";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const onSubmit =async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // 👉 Replace with API call
    registerUser({ name, email, password });

    // Example: redirect after register
    // router.push("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="card w-full max-w-md shadow-2xl bg-white rounded-3xl p-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Sign up to get started with All ProShop
        </p>

        {/* Form Start */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
            required
          />

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full rounded-xl bg-[#F07F13] hover:bg-orange-600 border-none text-white py-3 text-lg"
          >
            Register
          </button>
        </form>
        {/* Form End */}

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Register */}
        <button
          onClick={() => signIn("google")}
          className="btn btn-outline btn-accent w-full rounded-xl border-[#F07F13] text-[#F07F13] hover:bg-[#F07F13] hover:text-white transition py-3 text-lg"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-[#F07F13] font-semibold underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
