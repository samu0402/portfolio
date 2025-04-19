export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
            I'm a full-stack developer with expertise in modern web technologies.


            </p>
            <p className="text-gray-600 mb-4">
            As a fresher, I’m eager to apply my skills and passion for building beautiful, functional applications
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">React & JavaScript</li>
             
              <li className="text-gray-600">Tailwind CSS & Material UI</li>
              <li className="text-gray-600">Oracle database, PostgreSQL </li>
              <li className="text-gray-600">Git, GitHub & CI/CD Pipelines</li>
              
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}