"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { registerUser } from "@/app/action/auth/registerUser";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RegisterPage = () => {
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const result = await registerUser({ name, email, password });

    if (result?.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Registered!",
        text: "User created successfully",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        form.reset();
        router.push("/"); // redirect to home page
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User already exists or registration failed",
      });
    }
  };

  const handleGoogleLogin = async () => {
    signIn("google");
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome!",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  }, [session?.status]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="card w-full max-w-md shadow-2xl bg-white rounded-3xl p-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Sign up to get started with NextShop
        </p>

        <form
          className="flex flex-col gap-4 text-black"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered text-black w-full rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered text-black w-full rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full text-black rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full rounded-xl bg-[#F07F13] hover:bg-orange-600 border-none text-white py-3 text-lg"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-3 my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-accent w-full rounded-xl border-[#F07F13] text-[#F07F13] hover:bg-[#F07F13] hover:text-white transition py-3 text-lg"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#F07F13] font-semibold underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
