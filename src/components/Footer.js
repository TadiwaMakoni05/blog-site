import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner mt-8 py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#" className="hover:text-gray-500">GitHub</Link>
          <Link href="#" className="hover:text-gray-500">LinkedIn</Link>
          <Link href="#" className="hover:text-gray-500">Twitter</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
