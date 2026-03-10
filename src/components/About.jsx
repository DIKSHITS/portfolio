import "./About.css"

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">

          <h2 className="about-title">About Me</h2>

          <p>
            Hello! I'm <span>Dikshit Raj</span>, a passionate Full Stack
            Developer with a strong interest in Artificial Intelligence
            and Data Analytics. I specialize in building modern,
            scalable, and intelligent web applications using the
            MERN stack (MongoDB, Express.js, React.js, Node.js).
          </p>

          <p>
            Currently pursuing my MCA, I have worked on several
            real-world projects including AI-powered platforms,
            complaint management systems, and full-stack applications
            that solve practical problems.
          </p>

          <p>
            I enjoy integrating AI technologies into web platforms
            to automate processes, improve user experience, and
            build smarter digital solutions.
          </p>

        </div>


        <div className="about-right">

          <div className="about-card">
            <h3>🚀 Web Development</h3>
            <p>
              Building responsive and scalable web applications
              using React, Node.js, Express and modern UI frameworks.
            </p>
          </div>

          <div className="about-card">
            <h3>🤖 Artificial Intelligence</h3>
            <p>
              Creating AI-powered tools like smart assistants,
              resume builders and intelligent automation systems.
            </p>
          </div>

          <div className="about-card">
            <h3>📊 Data Analytics</h3>
            <p>
              Transforming raw data into meaningful insights using
              visualization tools and analytics platforms.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About