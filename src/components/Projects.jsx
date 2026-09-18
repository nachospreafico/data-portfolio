import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const projectSections = [
  {
    title: "Analytics Engineering",
    description:
      "Data transformation, modeling, testing, and analytics-ready datasets.",
    group: "Analytics Engineering",
  },
  {
    title: "Analytics Projects",
    description:
      "Business analysis, experimentation, dashboards, and decision support.",
    group: "Data & Product Analytics",
  },
  {
    title: "Automation",
    description:
      "Python workflows that replace repetitive processes with reliable, testable systems.",
    group: "Automation",
  },
  {
    title: "Data Science & Machine Learning",
    description:
      "Predictive modeling, statistical learning, and end-to-end ML workflows.",
    group: "Data Science & Machine Learning",
  },
];

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
            Selected projects across analytics, data science, analytics
            engineering, and automation, built around real-world business
            problems.
          </p>
        </div>

        {/* Project categories */}
        <div className="flex flex-col gap-14">
          {projectSections.map((section) => {
            const projects = projectsData.filter(
              (project) => project.group === section.group,
            );

            if (projects.length === 0) return null;

            return (
              <section key={section.group}>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                      {section.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {section.description}
                    </p>
                  </div>

                  <div className="hidden sm:block h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
