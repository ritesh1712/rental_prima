import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    accountType: "",
    agreeTerms: false,
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // console.log("Form Submitted:", formData);

    if (!isSignUp) {
      console.log("Form Submitted:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      console.log("Form Submitted:", formData);
    }
    setFormData({
      fullName: "",
      email: "",
      password: "",
      accountType: "",
      agreeTerms: false,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Rent<span className="text-black">Market</span>
        </h2>
        <p className="mb-6 text-center text-gray-600">
          {isSignUp ? "Create a new account" : "Sign in to your account"}
        </p>

        {/* Toggle Buttons */}
        <div className="mb-4 flex justify-center border-b pb-2">
          <button
            className={`mr-4 pb-2 font-semibold w-1/2 ${
              !isSignUp ? "border-b-2 border-black text-black" : "text-gray-500"
            }`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
          <button
            className={`pb-2 font-semibold w-1/2 ${
              isSignUp ? "border-b-2 border-black text-black" : "text-gray-500"
            }`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {!isSignUp ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl p-2 focus:border-gray-400 focus:ring-black outline-none bg-white text-black placeholder-gray-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl p-2 focus:border-gray-400 focus:ring-black outline-none bg-white text-black placeholder-gray-500"
                placeholder="Enter your password"
              />
            </div>

            {/* <div className="mb-4 flex items-center justify-between">
              <label className="flex items-center text-sm bg-white text-black">
                <input type="checkbox" name="rememberMe" className="mr-2 h-5" />{" "}
                Remember me
              </label>
              <a href="#" className="text-sm text-black hover:underline">
                Forgot password?
              </a>
            </div> */}
            

            <Link href={"/crm/listings"}>
              <button
                type="submit"
                className="w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
              >
                Sign In
              </button>
            </Link>
          </form>
        ) : (
          // Signup Form
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl p-2 focus:border-gray-400 focus:ring-black outline-none bg-white text-black placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl p-2 focus:border-gray-400 focus:ring-black outline-none bg-white text-black placeholder-gray-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl p-2 focus:border-gray-400 focus:ring-black outline-none bg-white text-black placeholder-gray-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center text-black">
                  <input
                    type="radio"
                    name="accountType"
                    value="buyer"
                    checked={formData.accountType === "buyer"}
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Buyer
                </label>
                <label className="flex items-center text-black">
                  <input
                    type="radio"
                    name="accountType"
                    value="seller"
                    checked={formData.accountType === "seller"}
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Seller
                </label>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <label className="text-sm text-black cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mr-2"
                />
                I agree to the{" "}
              </label>

              <a href="#" className="text-black underline">
                Terms and Privacy Policy
              </a>
            </div>

            <Link href={"/crm/listings"}>
              <button
                type="submit"
                className="w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
              >
                Create Account
              </button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
