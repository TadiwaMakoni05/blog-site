import Image from "next/image";
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section id="about" className="py-24 sm:py-32 text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full border-4 border-[rgb(var(--secondary))] dark:border-[rgb(var(--border))]"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">John Doe</h1>
        <p className="text-lg text-[rgb(var(--muted-foreground))] mb-8 text-balance">
          Software Developer
        </p>
        <p className="max-w-2xl mx-auto text-balance">
          I am a passionate developer with a love for creating beautiful and functional web applications. I have experience with various technologies and I am always eager to learn more.
        </p>
      </section>

      <section id="projects" className="py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">My Projects</h2>
          <p className="text-lg text-[rgb(var(--muted-foreground))] mt-2 text-balance">
            Here are a few things I&apos;ve worked on recently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-[rgb(var(--muted-foreground))] mt-2 text-balance">
            Have a question or want to work together?
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
