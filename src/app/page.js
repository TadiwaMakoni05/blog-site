import Image from "next/image";
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section id="about" className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">John Doe</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Software Developer</p>
        <div className="flex justify-center mb-8">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <p className="max-w-2xl mx-auto">
          I am a passionate developer with a love for creating beautiful and functional web applications. I have experience with various technologies and I am always eager to learn more.
        </p>
      </section>

      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <ContactForm />
      </section>
    </div>
  );
}
