import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">Нерухомість</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" >Головна</Link></li>
            <li><Link href="/catalog" >Каталог</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
