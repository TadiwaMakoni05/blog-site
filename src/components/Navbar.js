import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[rgb(var(--foreground))]">
          John Doe
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/#about" className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors">
            About
          </Link>
          <Link href="/#projects" className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors">
            Projects
          </Link>
          <Link href="/resume.pdf" className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors" target="_blank">
            Resume
          </Link>
          <Link href="/#contact" className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors">
            Contact
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
