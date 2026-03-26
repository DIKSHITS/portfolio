import "./Experience.css";
import { Helmet } from "react-helmet-async";

function Experience() {
  return (
    <>
      {/* ✅ SEO PART */}
      <Helmet>
        <title>Experience | Dikshit Raj - MERN Developer</title>

        <meta
          name="description"
          content="Explore Dikshit Raj's experience as a MERN Stack Developer including internship at MBSIR.IN and freelance full stack development projects."
        />

        <link rel="canonical" href="https://dikshit.live/experience" />
      </Helmet>

      {/* UI */}
      <section id="experience" className="experience">

        <h1 className="experience-title">Experience</h1>

        <div className="experience-container">

          {/* Internship */}
          <div className="experience-card">

            <h2>Web Development Intern</h2>

            <p className="exp-company">MBSIR.IN</p>

            <p className="exp-desc">
              Worked as a MERN Stack Developer Intern where I developed
              full stack web applications using React.js, Node.js,
              Express.js and MongoDB.

              Built real-world platforms including complaint
              management systems and responsive web applications
              with modern UI design.
            </p>

            <ul>
              <li>Developed MERN stack applications</li>
              <li>Built REST APIs using Node.js and Express</li>
              <li>Designed responsive UI with React</li>
              <li>Integrated MongoDB databases</li>
            </ul>

          </div>

          {/* Freelance Work */}
          <div className="experience-card">

            <h2>Freelance Full Stack Developer</h2>

            <p className="exp-company">Freelance Projects</p>

            <p className="exp-desc">
              Worked with clients to design and develop modern
              business websites and web applications using
              React.js and modern frontend technologies.

              Delivered responsive websites optimized for
              performance, SEO, and user experience.
            </p>

            <ul>
              <li>Developed business websites for clients</li>
              <li>Built responsive UI using React and CSS</li>
              <li>Deployed projects on hosting platforms</li>
              <li>Delivered production-ready web solutions</li>
            </ul>

          </div>

        </div>

      </section>
    </>
  );
}

export default Experience;