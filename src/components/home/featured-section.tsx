import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="nike-container">
        <h2 className="text-2xl font-bold mb-6 text-black">Don't Miss</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden bg-black rounded-md shadow-md">
            <div className="h-[400px] md:h-[500px] relative">
              <Image
                src="/images/airmax.jpeg"
                alt="Air Max DN8"
                fill
                className="object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-lg mb-2 font-medium">Limited Edition</p>
                <h3 className="text-white text-3xl font-bold mb-4">AIR MAX DN8</h3>
                <p className="text-white text-base mb-6">Explore the world of Dynamic Air with gold accents in sneakers.</p>
                <Link
                  href="/products/airmax-dn8"
                  className="bg-white text-black px-6 py-2 inline-block rounded-full text-sm font-medium hover:bg-gray-100 transition"
                >
                  Shop
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative overflow-hidden bg-white rounded-md shadow-md">
              <div className="h-[240px] relative">
                <Image
                  src="/images/product-1.jpeg"
                  alt="Vaporfly 4"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white text-lg font-bold">Vaporfly 4</h3>
                  <Link
                    href="/products/vaporfly-4"
                    className="text-white text-sm underline mt-2"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-white rounded-md shadow-md">
              <div className="h-[240px] relative">
                <Image
                  src="/images/product-2.jpeg"
                  alt="Training Kits & Leggings"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white text-lg font-bold">Training Kits & Leggings</h3>
                  <Link
                    href="/collections/training-kits"
                    className="text-white text-sm underline mt-2"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-white rounded-md shadow-md sm:col-span-2">
              <div className="h-[240px] relative">
                <Image
                  src="/images/product-3.jpeg"
                  alt="Just In For Kids"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white text-lg font-bold">Just In For Kids</h3>
                  <p className="text-white text-sm">Nike Sunray Fly</p>
                  <Link
                    href="/collections/kids"
                    className="text-white text-sm underline mt-2"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
