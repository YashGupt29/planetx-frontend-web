
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import BACKEND_URL from '@/lib/BACKEND_URL'

export const EnterPhoneNumber = ({ mobileNumber, setMobileNumber, setPhoneNumberSubmitted }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSendOTP = async () => {
    setPhoneNumberSubmitted(true);
    setErrorMessage('')
    setSuccessMessage('')

    // Basic validation for mobile number
    if (!mobileNumber || mobileNumber.length !== 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.')
      return
    }

    try {
      const response = await fetch(`${BACKEND_URL}/auth/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: `+ 91${mobileNumber}`,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccessMessage('OTP sent successfully.')
        setPhoneNumberSubmitted(true) // Notify parent of submission
      } else {
        // Handle error responses
        setErrorMessage(data.message || 'Failed to send OTP.')
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-16">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="w-auto h-auto"
        />
      </div>

      {/* Login Container */}
      <div className="w-full max-w-[450px] flex flex-col gap-5">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-[28px] font-semibold leading-[44px] text-[#0F0D0D]">
            Login
          </h1>
          <p className="text-lg font-medium text-[#6C696A]">
            Login to continue using the app
          </p>
        </div>

        {/* Mobile Input */}
        <div className="space-y-2">
          <label className="text-base font-medium text-[#0F0D0D]">
            Mobile number
          </label>
          <div className="flex items-center bg-white border border-[#E1E1E1] rounded-lg h-[58px] px-4">
            <div className="flex items-center gap-1 pr-4 border-r border-[#9E9E9E]">
              <Image
                src="/placeholder.svg?height=16&width=24"
                alt="India flag"
                width={24}
                height={16}
                className="rounded"
              />
              <span className="text-base text-[#424242]">+91</span>
              <ChevronDown className="w-4 h-4 text-[#0F0D0D]" />
            </div>
            <Input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter Mobile Number"
              className="border-0 focus-visible:ring-0 text-base text-[#9E9E9E] h-full"
            />
          </div>
        </div>

        {/* Error/Success Messages */}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

        {/* Send OTP Button */}
        <Button
          onClick={handleSendOTP}
          className="w-full h-[50px] bg-[#7B00FF] hover:bg-[#7B00FF]/90 rounded-[10px] text-base font-medium"
        >
          Send OTP
        </Button>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="text-[#6C696A] hover:text-[#7B00FF]"
          >
            Back to <span className="text-[#7B00FF]">Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

