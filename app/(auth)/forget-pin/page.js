"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/app/logo/URightWay.png";

export default function ForgetPin() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the email to your backend here
    // Then redirect to verification page with email as query param
    router.push(`/forget-pin/verify-code?email=${encodeURIComponent(email)}`);
  };

  return (
    <>
      <Head>
        <title>Forget Pin | U Right Way</title>
        <meta name="description" content="Reset your U Right Way pin" />
      </Head>

      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1629470937900-f9ef0f2a8086?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            {/* Logo positioned top left */}
            <div className="absolute top-4 left-89 md:left-990">
              <Image
                src={logo}
                alt="URightWay Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Form Content */}
            <div className="flex flex-col items-center mb-6">
              <h1 className="text-2xl font-bold text-center mb-2">Forget Password</h1>
              <p className="text-gray-600 text-center mt-4">
                Don't worry, we'll send you a code to help you reset your Pin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EBF89] transition-colors"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1EBF89] text-white py-3 px-4 rounded-lg hover:bg-[#18a678] focus:outline-none focus:ring-2 focus:ring-[#1EBF89] focus:ring-offset-2 font-medium transition-colors"
                >
                  Proceed
                </button>
              </div>

              {/* <div className="pt-6 text-center">
                <Link href="/login" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                  Back to Login
                </Link>
              </div> */}

              {/* <div className="pt-6">
                <p className="text-xs text-gray-500 text-center">
                  Pendtibus est feugiot sed ut dui eget eget. Arcu amet tempor tristique nunc locus ultamcorper oenean oenean. Id nisi est consectetur et. Eu viverra dignissim sit posuere.
                </p>
                <p className="text-xs text-gray-500 text-center mt-2">
                  By using U Right Way you agree to our terms and policy.
                </p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}