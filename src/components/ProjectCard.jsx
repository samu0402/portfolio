export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-blue-500 text-sm">
          {project.technologies.map((tech, index) => (
            <span key={index} className="border border-blue-500 px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}