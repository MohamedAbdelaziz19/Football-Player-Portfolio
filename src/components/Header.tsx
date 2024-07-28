import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '../../public/img/image'; // Make sure to provide the correct path to the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white ">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={logo} alt="Logo" width={70} height={70} />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#hero" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#details" className="hover:text-yellow-400">Details</a>
          <a href="#career" className="hover:text-yellow-400">Career</a>
          <a href="#watch-now" className="hover:text-yellow-400">Watch Now</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4 bg-gray-800">
            <a href="#hero" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#details" className="hover:text-yellow-400">Details</a>
            <a href="#career" className="hover:text-yellow-400">Career</a>
            <a href="#watch-now" className="hover:text-yellow-400">Watch Now</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
