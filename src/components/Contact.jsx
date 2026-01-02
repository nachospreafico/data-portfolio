const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Section title */}
          <h2
            className="
            text-2xl
            sm:text-3xl
            font-semibold
            text-slate-900
          "
          >
            Get in touch
          </h2>

          <p
            className="
            mt-3
            text-slate-600
            leading-relaxed
          "
          >
            Interested in my work, a collaboration, or just want to talk data,
            product, or analytics? The easiest way to reach me is via LinkedIn.
          </p>

          {/* Contact links */}
          <div
            className="
            mt-8
            flex
            flex-col
            sm:flex-row
            gap-4
          "
          >
            <a
              href="mailto:nachospreafico06@gmail.com"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                px-6
                py-3
                text-sm
                font-medium
                text-white
                hover:bg-blue-700
                transition
              "
            >
              Email me
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-slate-300
                px-6
                py-3
                text-sm
                font-medium
                text-slate-700
                hover:bg-slate-100
                transition
              "
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
