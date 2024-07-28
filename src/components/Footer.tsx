import Link from 'next/link';
import Image from 'next/image';
import { logo } from '../../public/img/image';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Image src={logo} alt="Logo" className="w-[20%]" />
        </div>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400">
          I am a 20-year-old Tunisian footballer, passionate about the game and determined to excel on the field.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a href="#hero" className="text-gray-400 transition hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 transition hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#details" className="text-gray-400 transition hover:text-yellow-500">
              Details
            </a>
          </li>
          <li>
            <a href="#career" className="text-gray-400 transition hover:text-yellow-500">
              Career
            </a>
          </li>
          <li>
            <a href="#watch-now" className="text-gray-400 transition hover:text-yellow-500">
              Watch Now
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 transition hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-400 transition hover:text-yellow-500"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-400 transition hover:text-yellow-500"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-400 transition hover:text-yellow-500"
            >
              <span className="sr-only">YouTube</span>
              <FaYoutube className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
