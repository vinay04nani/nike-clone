import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-5">
      <div className="nike-container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* First column */}
          <div>
            <h3 className="font-bold mb-4 text-xs uppercase">Featured</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Air Force 1</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Jordan 1</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Air Max</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Dunk</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Blazer</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Pegasus</Link></li>
            </ul>
          </div>

          {/* Second column */}
          <div>
            <h3 className="font-bold mb-4 text-xs uppercase">Help</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Get Help</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Order Status</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Delivery</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Returns</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Payment Options</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Contact Us On Nike.com Inquiries</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Contact Us On All Other Inquiries</Link></li>
            </ul>
          </div>

          {/* Third column */}
          <div>
            <h3 className="font-bold mb-4 text-xs uppercase">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">About Nike</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">News</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Investors</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Sustainability</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Report a Concern</Link></li>
            </ul>
          </div>

          {/* Fourth column */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex space-x-4 mb-6">
              <Link href="https://twitter.com/Nike" className="bg-gray-700 hover:bg-gray-600 rounded-full p-2">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.facebook.com/nike" className="bg-gray-700 hover:bg-gray-600 rounded-full p-2">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.youtube.com/user/nike" className="bg-gray-700 hover:bg-gray-600 rounded-full p-2">
                <Youtube size={20} />
              </Link>
              <Link href="https://www.instagram.com/nike/" className="bg-gray-700 hover:bg-gray-600 rounded-full p-2">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-5 border-t border-gray-800 flex flex-col md:flex-row justify-between text-xs">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="mr-3">🌍</span>
              <span>India</span>
            </div>
            <p className="text-gray-400">© 2025 Nike, Inc. All Rights Reserved</p>
          </div>
          <div className="flex flex-wrap gap-5 text-gray-400">
            <Link href="#" className="hover:text-white">Guides</Link>
            <Link href="#" className="hover:text-white">Terms of Sale</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <Link href="#" className="hover:text-white">Nike Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
