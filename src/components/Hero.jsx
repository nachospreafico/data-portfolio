import profilePicture from "../assets/profile-picture.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <span className="text-sm text-slate-500 tracking-wide">
            Data & Business Analyst
          </span>

          {/* Headline */}
          <h1
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-semibold
            tracking-tight
            text-slate-900
            max-w-3xl
          "
          >
            I help teams make
            <span className="text-blue-600"> better decisions</span> using data,
            not opinions.
          </h1>

          {/* Profile picture */}
          <img
            src={profilePicture}
            className="rounded-full max-w-[300px] sm:w-[50%] mx-auto md:mx-0"
          />

          {/* Subheading */}
          <p
            className="
            text-base
            sm:text-lg
            text-slate-600
            max-w-2xl
            leading-relaxed
          "
          >
            I’m Nacho, a <strong>Data and Business analyst</strong> with
            experience in forecasting, experimentation, and analytics systems
            that directly support business and product decisions at scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="
                inline-flex items-center justify-center
                rounded-xl
                bg-blue-600
                px-6 py-3
                text-sm font-medium text-white
                hover:bg-blue-700
                transition
              "
            >
              View projects
            </a>

            <a
              href="/Ignacio_Spreafico_Data_Analyst.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-xl
                border border-slate-300
                px-6 py-3
                text-sm font-medium text-slate-700
                hover:bg-slate-100
                transition
              "
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="
                inline-flex items-center justify-center
                rounded-xl
                border border-slate-300
                px-6 py-3
                text-sm font-medium text-slate-700
                hover:bg-slate-100
                transition
              "
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
