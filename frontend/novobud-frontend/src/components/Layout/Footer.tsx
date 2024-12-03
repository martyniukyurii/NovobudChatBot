import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <p>&copy; 2023 Нерухомість. Всі права захищені.</p>
        <nav>
          <ul className="flex space-x-4">
            {/* add some social media links */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
