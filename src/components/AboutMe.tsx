"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { img5, img6, img8, img10, img11, img15 } from '../../public/img/image'; // Adjust the import path if necessary
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [img5, img6, img8, img10, img11, img15];

const AboutMe: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8 " id='about'>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn uppercase text-yellow-400">About Me</h2>
          <p className="text-lg md:text-xl mb-4 animate-slideUp">
            I am a 20-year-old Tunisian footballer, passionate about the game and determined to excel on the field.
          </p>
          <p className="text-md md:text-lg animate-slideUp">
            My strategic vision and team spirit are my main strengths. Ready to tackle any challenges to achieve my goals in the world of football.
          </p>
        </div>
        <div className="md:w-1/3 relative">
          <div className="flex justify-center items-center animate-fadeIn pb-4">
            <Image
              src={images[currentIndex]}
              alt="Helaoui Wassim"
              className="rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105"
            />
          </div>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

