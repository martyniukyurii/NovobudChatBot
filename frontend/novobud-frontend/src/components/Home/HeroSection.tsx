import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?house,realestate')" }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Знайди свій ідеальний дім</h1>
        <p className="text-lg mb-8 text-gray-300">
          Досліджуй наш великий вибір нерухомості та знайди ідеальне місце для себе.
        </p>
        <form className="flex justify-center">
          <input
            type="text"
            placeholder="Пошук за локацією або ключовим словом"
            className="w-full max-w-md px-4 py-3 rounded-l-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-md transition duration-300"
          >
            Шукати
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
