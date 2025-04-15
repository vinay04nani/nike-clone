import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const sportCategories = [
  {
    id: 1,
    title: 'Running',
    image: '/images/running-shoes.jpeg',
    link: '/sport/running'
  },
  {
    id: 2,
    title: 'Football',
    image: '/images/field-general.jpeg',
    link: '/sport/football'
  },
  {
    id: 3,
    title: 'Training',
    image: '/images/lifestyle.jpeg',
    link: '/sport/training'
  },
  {
    id: 4,
    title: 'Basketball',
    image: '/images/product-3.jpeg',
    link: '/sport/basketball'
  }
];

const SportSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="nike-container">
        <h2 className="text-2xl font-bold mb-6 text-black">Shop By Sport</h2>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {sportCategories.map((sport) => (
              <CarouselItem key={sport.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <Link href={sport.link}>
                  <div className="relative overflow-hidden rounded-md shadow-sm">
                    <div className="relative h-[220px] w-full bg-gray-200 rounded-md">
                      <Image
                        src={sport.image}
                        alt={sport.title}
                        fill
                        className="object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium">
                          {sport.title}
                        </span>
                      </div>
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

export default SportSection;
