import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const iconicShoes = [
  {
    id: 1,
    title: 'Dunk',
    image: '/images/dunk.jpeg',
    link: '/collections/dunk'
  },
  {
    id: 2,
    title: 'Blazer',
    image: '/images/blazer.jpeg',
    link: '/collections/blazer'
  },
  {
    id: 3,
    title: 'Air Max',
    image: '/images/airmax.jpeg',
    link: '/collections/air-max'
  },
  {
    id: 4,
    title: 'Air Force 1',
    image: '/images/airforce.jpeg',
    link: '/collections/air-force-1'
  }
];

const IconsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="nike-container">
        <h2 className="text-2xl font-bold mb-6 text-black">Discover Icons</h2>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {iconicShoes.map((shoe) => (
              <CarouselItem key={shoe.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <Link href={shoe.link}>
                  <div className="bg-white rounded-md overflow-hidden shadow-sm">
                    <div className="flex items-center justify-center" style={{ height: '220px' }}>
                      <div className="relative h-[180px] w-[180px]">
                        <Image
                          src={shoe.image}
                          alt={shoe.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-medium text-black">{shoe.title}</h3>
                    </div>
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

export default IconsSection;
