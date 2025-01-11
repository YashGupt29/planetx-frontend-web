"use client";

import { Search } from "./searchproperties";

export const LandingPage = () => {
  return (
    <div
      className="bg-cover bg-center h-[85vh]"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="flex flex-col gap-3 py-[80px] px-[150px] h-full bg-black/10">
        <div className="flex flex-col gap-3 w-[60%]">
          <p className="text-gray-200 font-light text-lg">
            Explore top properties, connect with trusted agents, and take the
            next step <br /> towards your future.
          </p>
          <h1 className="text-white text-[60px] font-bold">
            Find Your Dream Home, Hassle-Free
          </h1>
        </div>
        <Search />
      </div>
    </div>
  );
};
