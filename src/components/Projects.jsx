import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Projects
          </h2>

          <p className="mt-2 text-slate-600 max-w-2xl">
            A selection of data analytics, product analytics, and
            experimentation projects focused on real-world decision-making.
          </p>
        </div>

        {/* Projects sections */}
        <div className="flex flex-col gap-14">
          {/* Analytics */}
          <section>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  Analytics Projects
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Dashboards, business analysis, product analytics, and
                  experimentation.
                </p>
              </div>

              <div className="hidden sm:block h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectsData
                .filter((project) => project.group === "Analytics")
                .map((project, idx) => (
                  <ProjectCard project={project} key={idx} />
                ))}
            </div>
          </section>

          {/* AI & Machine Learning */}
          <section>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  AI & Machine Learning Projects
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Predictive modeling, machine learning workflows, and applied
                  AI projects.
                </p>
              </div>

              <div className="hidden sm:block h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectsData
                .filter((project) => project.group === "AI & Machine Learning")
                .map((project, idx) => (
                  <ProjectCard project={project} key={idx} />
                ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Projects;
