import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;
