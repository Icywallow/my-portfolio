export default function Projects() {
  const projects = [
    {
      title: "Metis - Project Planner",
      description:
        "A project planning web-app developed using Flask in Python, making use of OpenAI's ChatGPT API to generate project plans conveniently.",
      link: "https://github.com/Icywallow/Metis",
    },
    {
      title: "Markdown to HTML parser",
      description:
        "A parser that converts Markdown to HTML, written in Haskell and uses a functional programming approach to parse markdown expressions.",
      link: "https://github.com/Icywallow/markdowntoHTML",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-900 to-gray-950 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-indigo-400 tracking-tight">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
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
