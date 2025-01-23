'use client'
import Image from 'next/image'
import { useState } from 'react';
import { EnterPhoneNumber } from './(login-phone-number)/phone-number-page'
import { OTPVerification } from './(login-otp)/otp-page'

export default function Login() {
  const [phoneNumberSubmitted, setPhoneNumberSubmitted] = useState(false)
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className='max-h-screen'>
      <div className="absolute flex top-4 left-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
        height={100}
        className="w-auto h-auto"
        />
        <div className='font-extrabold pt-3 pl-2 font-poppins text-2xl'>
          PLANET X
        </div>
      </div>

      <div className="w-full flex">
        {/* Left Panel */}

        <div className="w-1/2 flex items-center justify-center">
          <div className={`max-w-[450px] ${phoneNumberSubmitted ? "h-[666px]" : "h-[257px]"}`}>
            {
              phoneNumberSubmitted
                ? <OTPVerification mobileNumber={mobileNumber} />
                : <EnterPhoneNumber
                  mobileNumber={mobileNumber}
                  setMobileNumber={setMobileNumber}
                  phoneNumberSubmitted={phoneNumberSubmitted}
                  setPhoneNumberSubmitted={setPhoneNumberSubmitted}
                />
            }
          </div>
        </div>
        {/* Right Panel */}
        <div className="hidden lg:block w-1/2 relative">
          <Image
            className="h-screen w-full object-cover brightness-[0.85]"
            height={1080}
            width={720}
            src="/login-page-image.png"
            alt="Building facade"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-12">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Discover the Best<br />Neighborhoods
            </h2>
            <p className="text-center text-lg opacity-90 max-w-md">
              Explore a vast selection of properties tailored to your preferences. Whether you're buying, selling, or renting, we've got you covered!
            </p>
            <div className="flex gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
