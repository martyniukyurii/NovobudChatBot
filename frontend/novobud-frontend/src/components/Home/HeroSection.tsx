import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaA } from "react-icons/fa6";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Знайди свій ідеальний дім
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          Досліджуй наш великий вибір нерухомості та знайди ідеальне місце для
          себе.
        </p>
        <div className="flex justify-center">
          <Link
            href="/catalog"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-md transition duration-300 flex items-center space-x-2"
          >
            <span>Переглянути каталог</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
