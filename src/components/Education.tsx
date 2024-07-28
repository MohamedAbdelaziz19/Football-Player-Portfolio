"use client";
import Image from 'next/image';
import React from 'react';
import { AcademicCapIcon, CalendarIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import { img14 } from '../../public/img/image';

const Education: React.FC = () => {
  return (
    <section className="overflow-hidden bg-gray-900 text-white sm:grid sm:grid-cols-2 sm:items-center ">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-yellow-400 md:text-3xl">
            My Educational Journey
          </h2>

          <div className="mt-4 text-gray-300">
            {/* Education Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-300 flex items-center">
                <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-500" />
                Tunisian Baccalaureate Diploma
              </h3>
              <p className="mt-1 flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-gray-400" />
                2023
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-300 flex items-center">
                <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-500" />
                Management Student
              </h3>
              <p className="mt-1 flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-gray-400" />
                2024
              </p>
            </div>

            {/* Languages Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-300 flex items-center">
                <GlobeAltIcon className="h-6 w-6 mr-2 text-blue-500" />
                Languages
              </h3>
              <ul className="mt-2 list-disc list-inside text-gray-300">
                <li>English</li>
                <li>Arabic</li>
                <li>French</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Image
        alt="Education Image"
        src={img14}
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
}

export default Education;
