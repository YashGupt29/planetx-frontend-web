
import Image from "next/image"

export const AppDownloadSection = () => {
  return (
    <section className="flex justify-center w-full px-4 md:px-[100px] pt-[120px]">
      <div className="relative w-full max-w-[1240px] min-h-[427px] bg-gradient-to-r from-[#B97AFD] to-[#CAA9EE] rounded-[20px] overflow-hidden">
        {/* Content Section */}
        <div className="flex flex-col justify-center p-6 md:p-20 md:pr-[600px] gap-[30px] w-full">
          <div className="flex flex-col gap-[5px]">
            <h2 className="font-poppins font-semibold text-[32px] leading-[50px] text-white max-w-[446px]">
              Download Our Planet X App
            </h2>
            <p className="font-poppins font-medium text-lg leading-7 text-white">
              Your Dream Property is Just a Tap Away!
            </p>
          </div>

          <p className="font-poppins font-medium text-xl leading-8 text-white max-w-[560px]">
            Explore properties, connect with owners, and manage your listings effortlessly anytime, anywhere.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[30px]">
            <a
              href="#"
              className="w-[202.5px] h-[60px] transition-opacity hover:opacity-90"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/play-store.png"
                alt="Google Play Store"
                width={202}
                height={60}
                className="w-full h-full"
              />
            </a>
            <a
              href="#"
              className="w-[201.93px] h-[60px] transition-opacity hover:opacity-90"
              aria-label="Download on the App Store"
            >
              <Image
                src="/apple-store.png"
                alt="Apple App Store"
                width={202}
                height={60}
                className="w-full h-full"
              />
            </a>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="hidden md:block absolute right-0 -top-[120px]">
          <div className="relative">
            {/* Back Phone */}
            <div className="absolute right-[184px] top-[52px] z-10">
              <Image
                src="/mobile-app-left.png"
                alt="Planet X App Interface Preview"
                width={294}
                height={495}
                className="shadow-[25px_8px_11.5px_-13px_rgba(1,1,1,0.19)]"
                priority
              />
            </div>
            {/* Front Phone */}
            <div className="absolute right-0 top-0">
              <Image
                src="/mobile-app-right.png"
                alt="Planet X App Interface Preview"
                width={294}
                height={547}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


