"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import { logo, msaken8, img2, img3, msaken6, img7, img9, img23, msaken9 } from '../../public/img/image'; // Adjust the import path if necessary

const images = [msaken8, img2, img3,msaken6 , img7, img9, msaken9, img23];

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(img9);
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentImage(images[imageIndex]);
  }, [imageIndex]);

  return (
    <section className="overflow-hidden bg-gray-900 text-white sm:grid sm:grid-cols-2 sm:items-center" id='hero'>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-6">
            <Image
              src={logo}
              alt="Logo"
              className="w-[50%] sm:w-[30%] md:w-[40%] lg:w-[45%] xl:w-[50%] -mb-8"
            />
          </div>
          
          <p className="text-gray-300">
            I am Helaoui Wassim, a 20-year-old professional football player from Tunisia. With a rising career and an unwavering passion for football, I am distinguished by my determination and team spirit. My journey, combining academic training and on-field experience, propels me towards new challenges. Discover my path to excellence and follow my performances.
          </p>

          <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto inline-block rounded bg-yellow-400 px-8 py-3 text-sm font-medium text-gray-900 transition hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-400">
           <a href='#contact'>Contact</a>
           </button>
           <a href="/img/cv.jpg" download className="w-full sm:w-auto inline-block rounded border-2 border-yellow-500 px-6 py-3 text-sm font-medium text-yellow-500 hover:text-gray-900 transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400">
           Download CV
           </a>
           </div>


          <div className="mt-4 flex justify-center sm:justify-start space-x-4">
            <a href="https://www.facebook.com/wassim.hlaoui.90" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-yellow-300">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/wassim_helaoui/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@helaouiwassim?si=mLaJFi8JWX0EMEv3" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-yellow-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-full object-cover">
        <Image
          src={currentImage}
          alt="Helaoui Wassim"
          layout="fill"
          objectFit="cover"
          className={`rounded-2xl transition-opacity duration-1000 ${fade ? 'opacity-70' : 'opacity-20'}`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
