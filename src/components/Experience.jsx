import { experienceData } from "./experienceData";
import { certifications } from "./certificationsData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
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
            Experience
          </h2>
          <p
            className="
            mt-2
            text-slate-600
            max-w-2xl
          "
          >
            Professional experience focused on data analysis, forecasting,
            product metrics, and decision support in global organizations.
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid gap-6">
          {experienceData.map((exp, i) => {
            return (
              <ExperienceCard
                key={i}
                role={exp.role}
                company={exp.company}
                location={exp.location}
                from={exp.from}
                to={exp.to}
                bullets={exp.bullets}
                techStack={exp.techStack}
              />
            );
          })}
        </div>
      </div>
      {/*
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <h3
          className="
            text-xl
            sm:text-2xl
            font-semibold
            text-slate-900
          "
        >
          Certifications
        </h3>
        <ul className="list-disc">
          {certifications.map((cert, i) => {
            return <li>{cert.name}</li>;
          })}
        </ul>
      </div>
      */}
    </section>
  );
};

export default Experience;
