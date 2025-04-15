"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Main navigation */}
      <div className="nike-container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Nike Home">
              <Image src="/images/nike-logo.jpg" width={60} height={20} alt="Nike" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <div className="group relative">
              <Link href="/new" className="nav-link py-1 inline-block">New & Featured</Link>
              <div className="mega-menu z-50">
                <div className="nike-container grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold mb-4 text-black">New & Featured</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">New Arrivals</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Bestsellers</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">SNKRS Launch Calendar</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Customise with Nike By You</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Shop Icons</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Air Force 1</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Air Jordan 1</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Air Max</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Dunk</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Blazer</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Collections</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Summer Essential</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Air Max Dn8</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">What's Trending</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Nike 24.7</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Sports</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Running</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Basketball</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Football</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Gym and Training</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Yoga</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="/men" className="nav-link py-1 inline-block">Men</Link>
              <div className="mega-menu z-50">
                <div className="nike-container grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold mb-4 text-black">Men's Featured</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">New Arrivals</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Bestsellers</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Shop All Sale</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Shoes</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">All Shoes</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Lifestyle</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Running</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Basketball</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Football</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Clothing</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">All Clothing</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Tops & T-Shirts</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Shorts</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Hoodies & Sweatshirts</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Shop By Sport</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Running</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Football</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Basketball</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Training & Gym</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="/women" className="nav-link py-1 inline-block">Women</Link>
              <div className="mega-menu z-50">
                <div className="nike-container grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold mb-4 text-black">Women's Featured</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">New Arrivals</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Bestsellers</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Shop All Sale</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Shoes</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">All Shoes</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Lifestyle</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Running</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Training & Gym</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Clothing</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">All Clothing</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Tops & T-Shirts</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Sports Bras</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Leggings</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Shop By Sport</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Running</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Yoga</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Training & Gym</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Tennis</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="/kids" className="nav-link py-1 inline-block">Kids</Link>
              <div className="mega-menu z-50">
                <div className="nike-container grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold mb-4 text-black">Kids' Featured</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">New Arrivals</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Bestsellers</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Back to School</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Shoes</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">All Shoes</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Lifestyle</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Running</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Basketball</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Clothing</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">All Clothing</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Tops & T-Shirts</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Hoodies</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Shorts</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-black">Shop By Age</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Baby & Toddler (0-3)</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Younger Kids (3-7)</Link></li>
                      <li><Link href="#" className="text-sm text-gray-600 hover:text-black">Older Kids (8-15)</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/sale" className="nav-link py-1">Sale</Link>
            <Link href="/snkrs" className="nav-link py-1">SNKRS</Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm outline-none ml-2 w-32"
              />
            </div>
            <button aria-label="Favorites" className="hidden md:flex">
              <Heart size={20} />
            </button>
            <button aria-label="Cart" className="hidden md:flex">
              <ShoppingBag size={20} />
            </button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <button aria-label="Menu">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw]">
                <div className="mt-8 flex flex-col h-full">
                  <div className="space-y-4 flex-grow">
                    <Link href="/new" className="block text-xl font-medium py-2 text-black">New & Featured</Link>
                    <Link href="/men" className="block text-xl font-medium py-2 text-black">Men</Link>
                    <Link href="/women" className="block text-xl font-medium py-2 text-black">Women</Link>
                    <Link href="/kids" className="block text-xl font-medium py-2 text-black">Kids</Link>
                    <Link href="/sale" className="block text-xl font-medium py-2 text-black">Sale</Link>
                    <Link href="/snkrs" className="block text-xl font-medium py-2 text-black">SNKRS</Link>
                  </div>
                  <div className="mt-auto space-y-4 pt-4 border-t">
                    <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                      <Search size={16} className="text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent text-sm outline-none ml-2 w-full"
                      />
                    </div>
                    <Link href="/favorites" className="flex items-center gap-2 py-2 text-black">
                      <Heart size={20} />
                      <span>Favorites</span>
                    </Link>
                    <Link href="/cart" className="flex items-center gap-2 py-2 text-black">
                      <ShoppingBag size={20} />
                      <span>Cart</span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Promo bar */}
      <div className="bg-gray-100 py-2 text-center">
        <div className="nike-container">
          <p className="text-xs text-black">New Styles On Sale: Up To 40% Off | <Link href="/sale" className="underline">Shop All New Markdowns</Link></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
