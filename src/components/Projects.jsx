import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <h2
            className="
            text-2xl
            sm:text-3xl
            font-semibold
            text-slate-900
          "
          >
            Projects
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            A selection of data analytics, product analytics, and
            experimentation projects focused on real-world decision-making.
          </p>
        </div>

        {/* Projects grid */}
        <div
          className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          {projectsData.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
