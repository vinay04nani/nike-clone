import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
        <Image
          src="/images/hero-banner.jpeg"
          alt="Nike Hero Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl px-4 bg-white/40 py-8 backdrop-blur-sm rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">BRING THE HEAT</h1>
            <p className="text-lg md:text-xl mb-8 text-black font-medium">
              Set your athleticism on with the latest summer collections.
            </p>
            <Link
              href="/shop"
              className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
