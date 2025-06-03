export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A sleek personal portfolio built with React and Tailwind CSS, showcasing projects, skills, and contact info.",
      link: "#",
    },
    {
      title: "Weather App",
      description:
        "A real-time weather dashboard using OpenWeatherMap API, with dynamic styling and responsive layout.",
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "A productivity app to organize tasks, set priorities, and manage deadlines, built with React and localStorage.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-900 to-gray-950 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-indigo-400 tracking-tight">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-indigo-600/30 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block text-indigo-400 hover:text-indigo-300 font-medium transition duration-200"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
