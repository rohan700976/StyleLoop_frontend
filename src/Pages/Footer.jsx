import { Facebook, Instagram, Twitter } from "lucide-react";



export default function Footer() {
  return (
    <footer className=" bg-gray-900 text-gray-300 mt-16">
      {/* Main content */}
      <div className="w-full px-6 py-15 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">StyleLoop</h2>
          <p className="mt-2 text-sm">
            Your one-stop shop for premium clothing for Men, Women, and Kids. Quality meets style.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/men" className="hover:text-white">Men</a></li>
            <li><a href="/women" className="hover:text-white">Women</a></li>
            <li><a href="/kids" className="hover:text-white">Kids</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          </div>
          <p className="mt-4 text-sm">Email: support@styleloop.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="w-full border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2025 StyleLoop. All rights reserved.
      </div>
    </footer>
  );
}            