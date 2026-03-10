import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [showResume, setShowResume] = useState(false);

  const downloadFile = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="contact">

      <h2 className="contact-title">Get In Touch</h2>

      <p className="contact-subtitle">
        I'm open to opportunities in Full Stack Development,
        Artificial Intelligence, and Data Analytics.
      </p>

      <div className="contact-container">

        {/* Email */}

        <div className="contact-card">
          <h3>Email</h3>

          <a href="mailto:dikshith507@gmail.com">
            dikshith507@gmail.com
          </a>
        </div>


        {/* GitHub */}

        <div className="contact-card">
          <h3>GitHub</h3>

          <a
            href="https://github.com/DIKSHITS"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/DIKSHITS
          </a>
        </div>


        {/* LinkedIn */}

        <div className="contact-card">
          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/dikshit-raj-164b86261/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/dikshit-raj
          </a>
        </div>

      </div>


      {/* ACTION BUTTONS */}

      <div className="contact-buttons">

        <button
          className="resume-btn"
          onClick={() => setShowResume(!showResume)}
        >
          Download Resume
        </button>

        {showResume && (

          <div className="resume-options">

            <button
              className="resume-link"
              onClick={() =>
                downloadFile("/resume/Latest_Dikshit_AI.pdf")
              }
            >
              AI Resume
            </button>

            <button
              className="resume-link"
              onClick={() =>
                downloadFile("/resume/NEW Resume Dikshit (1).pdf")
              }
            >
              Web Developer Resume
            </button>

          </div>

        )}

        <a
          href="mailto:dikshith507@gmail.com"
          className="email-btn"
        >
          Send Email
        </a>

      </div>

    </section>
  );
}

export default Contact;