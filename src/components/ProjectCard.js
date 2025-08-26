import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-[rgb(var(--secondary))] p-6 transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-[rgb(var(--muted-foreground))] mb-4 text-balance">
          {project.description}
        </p>
        <div className="flex flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-background border border-border/50 text-sm font-medium mr-2 mb-2 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-semibold text-[rgb(var(--primary))] hover:underline"
      >
        View Project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-4 w-4"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ProjectCard;
