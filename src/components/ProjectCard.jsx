import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`
                rounded-2xl
                border
                p-6
                bg-white
                hover:shadow-md
                transition
                ${project.featured ? "border-blue-600" : "border-slate-200"}
              `}
    >
      <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>

      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="
                      text-xs
                      px-2 py-1
                      rounded-full
                      bg-slate-100
                      text-slate-700
                    "
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-4 flex gap-4 text-sm">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
