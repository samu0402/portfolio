import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      image: "/images/E-comm.png",
      description:
        "Full-stack e-commerce platform with admin dashboard and analytics",
      technologies: ["React", "Node.js", "CSS"],
    },
    {
      title: "Task Management App",
      image: "/images/task-manager-cover.png",
      description: "Collaborative task management with real-time updates",
      technologies: ["React", "Firebase", "Redux"],
    },
    {
      title: "Portfolio Website",
      image: "/images/Portfolio-cover.jpeg",
      description: "Responsive portfolio website with dark mode",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Weather Application",
      image: "/images/Weather-cover.png",
      description: "Real-time weather forecasts with 5-day predictions",
      technologies: ["React", "OpenWeather API", "Chart.js"],
    },
    {
      title: "Recipe Finder",
      image: "/images/FoodFood-cover.png",
      description: "Search and save recipes with nutritional information",
      technologies: ["Vue.js", "Spoonacular API", "IndexedDB"],
    },
    {
      title: "Fitness Tracker",
      image: "/images/Fitness-tracker-cover.png",
      description: "Workout logging and progress tracking application",
      technologies: ["React Native", "Firebase", "Expo"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
