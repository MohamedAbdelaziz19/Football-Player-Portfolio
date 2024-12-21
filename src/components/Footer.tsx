import Link from 'next/link';
import Image from 'next/image';
import { logo } from '../../public/img/image';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { Home, Info, FileText, Briefcase, PlayCircle, Mail } from 'lucide-react'; // Import icons for navigation

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
            <a href="#hero" className="flex items-center space-x-2 text-gray-400 transition hover:text-yellow-500">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center space-x-2 text-gray-400 transition hover:text-yellow-500">
              <Info className="h-5 w-5" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#details" className="flex items-center space-x-2 text-gray-400 transition hover:text-yellow-500">
              <FileText className="h-5 w-5" />
              <span>Details</span>
            </a>
          </li>
          <li>
            <a href="#career" className="flex items-center space-x-2 text-gray-400 transition hover:text-yellow-500">
              <Briefcase className="h-5 w-5" />
              <span>Career</span>
            </a>
          </li>
          <li>
            <a href="#watch-now" className="flex items-center space-x-2 text-gray-400 transition hover:text-yellow-500">
              <PlayCircle className="h-5 w-5" />
              <span>Watch Now</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center space-x-2 text-gray-400 transition hover:text-yellow-500">
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.instagram.com/wassim_helaoui/"
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
              href="https://www.facebook.com/wassim.hlaoui.90"
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
              href="https://youtube.com/@helaouiwassim?si=mLaJFi8JWX0EMEv3"
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
