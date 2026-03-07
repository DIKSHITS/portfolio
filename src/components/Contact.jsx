import "./Contact.css"

function Contact() {
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


      {/* Buttons */}

      <div className="contact-buttons">

        <a
          href="/resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>

        <a
          href="mailto:dikshith507@gmail.com"
          className="email-btn"
        >
          Send Email
        </a>

      </div>

    </section>
  )
}

export default Contact