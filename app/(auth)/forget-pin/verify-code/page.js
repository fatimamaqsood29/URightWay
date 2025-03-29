"use client";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/app/logo/URightWay.png";

export default function VerifyCode() {
  const [code, setCode] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email');

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verify code then redirect
    router.push('/dashboard/child-profile');
  };

  return (
    <>
      <Head>
        <title>Verify Code | U Right Way</title>
      </Head>

      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1629470937900-f9ef0f2a8086?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="absolute top-4 left-4 md:left-255">
              <Image src={logo} alt="Logo" width={100} height={40} />
            </div>

            <div className="flex flex-col items-center mb-6">
              <h1 className="text-2xl font-bold text-center mb-2">
                Let us know it's you
              </h1>
              <p className="text-gray-600 text-center mb-4">
                Last step! To secure your account, enter the code we just sent to {email}.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter 6-digit code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1EBF89] text-xl "
                  value={code}
                  onChange={handleCodeChange}
                  maxLength={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1EBF89] text-white py-3 px-4 rounded-lg hover:bg-[#18a678] font-medium"
                disabled={code.length !== 6}
              >
                Proceed
              </button>

              <div className="text-center">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                  onClick={() => console.log('Resend code')}
                >
                  Didn't receive code? Resend
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}