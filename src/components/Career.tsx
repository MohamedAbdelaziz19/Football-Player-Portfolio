"use client";
import React from "react";
import Image from "next/image";
import {
  logoUSMO,
  kahana,
  usm3,
  usm4,
  img20,
  logoMsaken,
  logoUsk,
  uskcontrat,
  msakencontrat,
} from "../../public/img/image"; // Ensure the correct paths to your images

const Career: React.FC = () => {
  return (
    <section className="bg-gray-900" id="career">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="flex bg-gray-800 text-gray-200 transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-200">
              <span>2008</span>
              <span className="w-px flex-1 bg-gray-200/10"></span>
              <span>2014</span>
            </time>
          </div>

          <div className="sm:block sm:basis-56">
            <Image
              alt="Kahna Academie Monastir"
              src={kahana}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-200/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold text-xl text-yellow-400 uppercase">
                  Kahna Academie Monastir{" "}
                  <Image src={logoUSMO} alt="logo" width={20} height={20} />
                </h3>
              </a>

              <p className="mt-2 text-sm text-gray-300">
                During my time at the Kahna Academy of Monastir, I developed the
                fundamental skills and discipline necessary to excel as a
                footballer. It was a formative experience that laid the
                foundation for my future career.
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              {/* Additional content can be added here if needed */}
            </div>
          </div>
        </article>
        <h2 className="text-3xl text-center m-10 font-bold uppercase sm:text-3xl text-yellow-400">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 mt-16">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="Union Sportive Monastirienne Image 1"
                src={usm3}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-800">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-800"></span>
            <div className="flex flex-col p-8 sm:p-16 lg:p-24">
              <Image
                src={logoUSMO}
                alt="logo"
                width={80}
                height={80}
                className="flex justify-center items-center"
              />
              <p className="mt-4 text-gray-300">
                <strong className="uppercase">
                  Union Sportive Monastirienne Senior B{" "}
                </strong>
                <br />
                2022
                <br />
                Monastir
                <br />
                Within the Senior B team of Union Sportive Monastirienne, I
                gained valuable experience by participating in high-level
                competitions and developing a better tactical understanding of
                the game.
              </p>

              <p className="mt-4 text-gray-300">
                <strong className="uppercase">
                  Union Sportive Monastirienne{" "}
                </strong>
                <br />
                2014
                <br />
                Monastir
                <br />
                My professional journey began with Union Sportive Monastirienne,
                where I had the opportunity to face quality opponents and
                progress as a player under the guidance of experienced coaches.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 mt-16">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="Union Sportive Monastirienne Image 1"
                src={uskcontrat}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-800">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-800"></span>
            <div className="flex flex-col p-8 sm:p-16 lg:p-24">
              <Image
                src={logoUsk}
                alt="logo"
                width={80}
                height={80}
                className="flex justify-center items-center"
              />
              <p className="mt-4 text-gray-300">
                <strong className="uppercase">
                  Union sportive Ksibet Mediouni{" "}
                </strong>
                <br />
                2023
                <br />
                Ksibet Mediouni
                <br />
                Within the Senior Team of Union Sportive Ksibet Mediouni,
                competing in Tunisia s Ligue 3, I honed advanced tactical acumen
                and gained critical match experience by actively participating
                in high-stakes competitions. This exposure allowed me to refine
                my strategic thinking, enhance my decision-making under
                pressure, and contribute to the team s performance at a
                professional level.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 mt-16">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="Union Sportive Monastirienne Image 1"
                src={msakencontrat}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-800">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-800"></span>
            <div className="flex flex-col p-8 sm:p-16 lg:p-24">
              <Image
                src={logoMsaken}
                alt="logo"
                width={80}
                height={80}
                className="flex justify-center items-center"
              />
              <p className="mt-4 text-gray-300">
                <strong className="uppercase">
                  Croissant sportif de M saken{" "}
                </strong>
                <br />
                2024
                <br />
                Msaken
                <br />
                Within the Senior Team of Croissant Sportif de M saken in
                Tunisia s Ligue 2, I advanced my tactical expertise and
                professional development by engaging in high-level competitions.
                This experience sharpened my game strategy, enhanced my
                situational awareness on the field, and deepened my
                understanding of the dynamics required to excel in competitive
                football.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
