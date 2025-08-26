import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/#about" className="hover:text-gray-500">
            About
          </Link>
          <Link href="/#projects" className="hover:text-gray-500">
            Projects
          </Link>
          <Link href="/resume.pdf" className="hover:text-gray-500" target="_blank">
            Resume
          </Link>
          <Link href="/#contact" className="hover:text-gray-500">
            Contact
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
