const ExperienceCard = ({
  role,
  company,
  location,
  from,
  to,
  bullets,
  techStack,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{company}</h3>
        <span className="text-sm text-slate-500">
          {from} – {to} · {location}
        </span>
      </div>

      <p className="mt-1 text-sm text-slate-600">{role}</p>

      <ul className="mt-4 space-y-2 text-slate-700 text-sm leading-relaxed">
        {bullets.map((bullet, i) => {
          return <li key={i}>⦿ {bullet}</li>;
        })}
      </ul>

      <p className="mt-4 text-xs text-slate-500">Tech Stack: {techStack}</p>
    </div>
  );
};

export default ExperienceCard;
