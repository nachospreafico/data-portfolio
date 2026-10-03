const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
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
            About
          </h2>

          <p
            className="
              mt-2
              text-slate-600
              max-w-2xl
            "
          >
            A different path into data, and the perspective I bring with it.
          </p>
        </div>

        {/* About content */}
        <div className="max-w-3xl">
          <h3
            className="
              text-xl
              sm:text-2xl
              font-semibold
              tracking-tight
              text-slate-900
            "
          >
            My path into data started in Medicine.
          </h3>

          <div
            className="
              mt-5
              space-y-4
              text-slate-600
              leading-relaxed
            "
          >
            <p>
              I trained as a physician before moving into analytics, where I
              found the same kind of problem-solving that originally drew me to
              medicine: working with incomplete information, separating signal
              from noise, and making decisions under uncertainty.
            </p>

            <p>
              Today, I apply that mindset to business problems through
              analytics, forecasting, automation, and applied data science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
