import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            product, or analytics? <br></br> The easiest way to reach me is via
            email, LinkedIn or GitHub.
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
            <p
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
              nachospreafico06@gmail.com
              <FontAwesomeIcon icon={faEnvelope} size="xl" className="ml-2" />
            </p>
            <a
              href="https://www.linkedin.com/in/ignacio-spreafico"
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
              <FontAwesomeIcon icon={faLinkedin} size="xl" className="ml-2" />
            </a>
            <a
              href="https://www.github.com/nachospreafico"
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
              GitHub
              <FontAwesomeIcon icon={faGithub} size="xl" className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
