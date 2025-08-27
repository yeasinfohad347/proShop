"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Swal from "sweetalert2";

const LoginPage = () => {
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    if (result?.error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        router.push("/");
      });
    }
  };

  const handleGoogleLogin = async () => {
    signIn("google");
    // if (result?.error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Login Failed",
    //     text: "Google login failed. Please try again.",
    //   });
    // } else {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Login Successful",
    //     text: "Welcome!",
    //     timer: 1500,
    //     showConfirmButton: false,
    //   }).then(() => {
    //     router.push("/");
    //   });
    // }
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
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your account to continue
        </p>

        <form
          className="flex flex-col gap-4 text-black"
          onSubmit={handleSubmit}
        >
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
            className="input input-bordered text-black w-full rounded-xl focus:border-[#F07F13] focus:ring focus:ring-[#F07F13]/20"
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

        <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogleLogin}>
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-[#F07F13] font-semibold underline"
          >
            Sign Up
          </Link>
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
