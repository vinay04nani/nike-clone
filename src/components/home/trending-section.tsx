import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const trendingProducts = [
  {
    id: 1,
    name: 'Nike Cortez Leather',
    category: 'Women\'s Shoes',
    price: 7499.00,
    image: '/images/product-1.jpeg',
    link: '/products/cortez-leather'
  },
  {
    id: 2,
    name: 'Jordan CMFT Era',
    category: 'Men\'s Shoes',
    price: 10795.00,
    image: '/images/product-2.jpeg',
    link: '/products/jordan-cmft'
  },
  {
    id: 3,
    name: 'Luka .77 PF',
    category: 'Basketball Shoes',
    price: 9695.00,
    image: '/images/product-3.jpeg',
    link: '/products/luka-pf'
  },
  {
    id: 4,
    name: 'Nike Air Force 1 \'07',
    category: 'Men\'s Shoes',
    price: 8695.00,
    image: '/images/airforce.jpeg',
    link: '/products/air-force-1'
  },
  {
    id: 5,
    name: 'Nike Dunk Low Retro',
    category: 'Men\'s Shoes',
    price: 8695.00,
    image: '/images/dunk.jpeg',
    link: '/products/dunk-low-retro'
  },
  {
    id: 6,
    name: 'Nike Blazer Mid \'77 Vintage',
    category: 'Men\'s Shoes',
    price: 8695.00,
    image: '/images/blazer.jpeg',
    link: '/products/blazer-mid-77'
  }
];

const TrendingSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="nike-container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Trending This Week</h2>
          <Link href="/trending" className="text-sm font-medium text-black">
            View All
          </Link>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {trendingProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link href={product.link} className="block">
                  <div className="product-card">
                    <div className="bg-gray-100 rounded-md overflow-hidden flex items-center justify-center" style={{ height: '300px' }}>
                      <div className="relative h-[250px] w-[250px]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="product-title mt-3 text-black">{product.name}</h3>
                    <p className="product-category text-gray-600">{product.category}</p>
                    <p className="product-price text-black">MRP : ₹ {product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-12 right-0 flex space-x-2">
            <CarouselPrevious className="relative inline-flex h-10 w-10 border border-gray-300" />
            <CarouselNext className="relative inline-flex h-10 w-10 border border-gray-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TrendingSection;
