import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarComponent from "../../Components/NavbarComponent";
import { FaGoogle, FaLinkedinIn  } from "react-icons/fa";

const AuthPage = ({ type }) => {
  const isSignIn = type === "signin";


  return (
    <>
    <NavbarComponent />
    <div className="flex min-h-screen items-center justify-center md:py-28 px-4 py-32 bg-gray-100">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {isSignIn ? "Welcome Back!" : "Create an Account"}
          </h1>
          <p className="text-gray-500 mt-2">
            {isSignIn
              ? "Sign in to continue your job search."
              : "Join thousands of job seekers using AI"}
          </p>

          <form className="mt-6 space-y-4">
            {!isSignIn && (
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            {!isSignIn && (
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Re-enter password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
            )}

            {isSignIn && (
              <div className="flex justify-end text-sm">
                <Link to="/forgot-password" className="text-blue-500">
                  Forgot Password?
                </Link>
              </div>
            )}

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              {isSignIn ? "Login" : "Create Account"}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-4 text-center">
            <p className="text-gray-500">Or continue with</p>
            <div className="flex space-x-4 mt-2">
              <button className="w-full flex gap-2 items-center justify-center border py-2 rounded-lg hover:bg-gray-100">
              <FaGoogle className="text-red-500" />

                Google
              </button>
              <button className="w-full flex gap-2 items-center justify-center border py-2 rounded-lg hover:bg-gray-100">
              <FaLinkedinIn className="text-blue-500"/>

                LinkedIn
              </button>
            </div>
          </div>

          {/* Toggle between Sign-In & Sign-Up */}
          <p className="mt-4 text-center text-gray-600">
            {isSignIn
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <Link
              to={isSignIn ? "/signup" : "/signin"}
              className="text-blue-500 font-semibold"
            >
              {isSignIn ? "Sign Up" : "Log In"}
            </Link>
          </p>
        </div>

        {/* Right Section - Illustration */}
        <div className="hidden md:flex w-1/2 md:border-l-4 md:border-amber-300  bg-gray-200 items-center justify-center">
          <img
            src="/auth.gif"
            alt="Authentication Illustration"
            className="h-full"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default AuthPage;
