import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Info, FileText, Briefcase, PlayCircle, Mail } from 'lucide-react'; // Import required icons
import { logo } from '../../public/img/image'; // Ensure the correct path to the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={logo} alt="Logo" width={70} height={70} />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#hero" className="flex items-center space-x-2 hover:text-yellow-400">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="#about" className="flex items-center space-x-2 hover:text-yellow-400">
            <Info className="w-5 h-5" />
            <span>About</span>
          </a>
          <a href="#details" className="flex items-center space-x-2 hover:text-yellow-400">
            <FileText className="w-5 h-5" />
            <span>Details</span>
          </a>
          <a href="#career" className="flex items-center space-x-2 hover:text-yellow-400">
            <Briefcase className="w-5 h-5" />
            <span>Career</span>
          </a>
          <a href="#watch-now" className="flex items-center space-x-2 hover:text-yellow-400">
            <PlayCircle className="w-5 h-5" />
            <span>Watch Now</span>
          </a>
          <a href="#contact" className="flex items-center space-x-2 hover:text-yellow-400">
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </a>
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
            <a href="#hero" className="flex items-center space-x-2 hover:text-yellow-400">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </a>
            <a href="#about" className="flex items-center space-x-2 hover:text-yellow-400">
              <Info className="w-5 h-5" />
              <span>About</span>
            </a>
            <a href="#details" className="flex items-center space-x-2 hover:text-yellow-400">
              <FileText className="w-5 h-5" />
              <span>Details</span>
            </a>
            <a href="#career" className="flex items-center space-x-2 hover:text-yellow-400">
              <Briefcase className="w-5 h-5" />
              <span>Career</span>
            </a>
            <a href="#watch-now" className="flex items-center space-x-2 hover:text-yellow-400">
              <PlayCircle className="w-5 h-5" />
              <span>Watch Now</span>
            </a>
            <a href="#contact" className="flex items-center space-x-2 hover:text-yellow-400">
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
