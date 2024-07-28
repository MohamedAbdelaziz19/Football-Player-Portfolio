"use client";
import Image from 'next/image';
import React from 'react';
import { logoUSMO, logoUsk, ess, est, usm2, img3, img9, img7, img13, img22, img1 } from '../../public/img/image'; // Adjust the import path if necessary
import { FaYoutube } from 'react-icons/fa';

const Gallery: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          <Image src={logoUSMO} alt="Logo USMO" className="inline-block w-10 h-12 mr-2" />
        </h3>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Image src={ess} alt="Gallery Image 1" className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" />
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Image src={est} alt="Gallery Image 2" className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" />
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Image src={usm2} alt="Gallery Image 3" className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          <Image src={logoUsk} alt="Logo Usk" className="inline-block w-12 h-12 mr-2" />
        </h3>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Image src={img13} alt="Gallery Image 4" className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" />
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Image src={img22} alt="Gallery Image 5" className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" />
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Image src={img1} alt="Gallery Image 6" className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" />
          </div>
        </div>
      </div>

      {/* Video Block */}
      <div className="mt-12" id='watch-now'>
        <h1 className="text-2xl font-bold mb-6 text-center">Watch Now <FaYoutube className="inline-block text-red-600" /></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="group">
            <Image
              alt="Wassim Helaoui - Best of 2023-2024 (PART 1)"
              src={img9}
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />
            <div className="p-4">
              <a href="https://youtu.be/1fgnur5vZNI?si=wQZu9BT852-kwEvd" aria-label="Wassim Helaoui - Best of 2023-2024 (PART 1)">
                <h3 className="text-lg font-medium text-white">Wassim Helaoui - Best of 2023-2024 (PART 1)</h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm text-gray-400">
                Discover the highlights of Wassim Helaoui for the 2023-2024 season in this captivating video. Watch and enjoy!
              </p>
            </div>
          </article>

          <article className="group">
            <Image
              alt="Wassim Helaoui - Best of 2023-2024 (PART 2)"
              src={img7}
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />
            <div className="p-4">
              <a href="https://youtu.be/dMOfV48PsBs?si=Bm8rbeYTqDVNG6G1" aria-label="Wassim Helaoui - Best of 2023-2024 (PART 2)">
                <h3 className="text-lg font-medium text-white">Wassim Helaoui - Best of 2023-2024 (PART 2)</h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm text-gray-400">
                Discover the highlights of Wassim Helaoui for the 2023-2024 season in this captivating video. Watch and enjoy!
              </p>
            </div>
          </article>

          <article className="group">
            <Image
              alt="Wassim Helaoui - Best of 2023-2024 (PART 3)"
              src={img3}
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />
            <div className="p-4">
              <a href="https://youtu.be/wuyVZVSn_Qs?si=3J0C5QB6cpkcMaL2" aria-label="Wassim Helaoui - Best of 2023-2024 (PART 3)">
                <h3 className="text-lg font-medium text-white">Wassim Helaoui - Best of 2023-2024 (PART 3)</h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm text-gray-400">
                Discover the highlights of Wassim Helaoui for the 2023-2024 season in this captivating video. Watch and enjoy!
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
