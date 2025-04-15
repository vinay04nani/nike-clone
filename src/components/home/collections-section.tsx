import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const collections = [
  {
    id: 1,
    title: 'Running',
    image: '/images/running-shoes.jpeg',
    link: '/collections/running'
  },
  {
    id: 2,
    title: 'Lifestyle',
    image: '/images/lifestyle.jpeg',
    link: '/collections/lifestyle'
  },
  {
    id: 3,
    title: 'Trail Running',
    image: '/images/field-general.jpeg',
    link: '/collections/trail-running'
  },
  {
    id: 4,
    title: 'Training',
    image: '/images/airmax.jpeg',
    link: '/collections/training'
  }
];

const CollectionsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="nike-container">
        <h2 className="text-2xl font-bold mb-6 text-black">Shop by Collection</h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {collections.map((collection) => (
              <CarouselItem key={collection.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link href={collection.link} className="block">
                  <div className="overflow-hidden rounded-md shadow-sm">
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20">
                        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                          <h3 className="text-lg font-medium text-white">{collection.title}</h3>
                        </div>
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

export default CollectionsSection;
