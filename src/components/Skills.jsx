import "./Skills.css"

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2 className="skills-title">My Tech Stack</h2>

      <div className="skills-container">

        {/* Frontend */}

        <div className="skill-card">

          <h3>Frontend Development</h3>

          <div className="skills-grid">

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
              <span>Next.js</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
              <span>HTML5</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
              <span>CSS3</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
              <span>Tailwind</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
              <span>Bootstrap</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>

          </div>

        </div>


        {/* Backend */}

        <div className="skill-card">

          <h3>Backend Development</h3>

          <div className="skills-grid">

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
              <span>Express</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" alt="REST API" />
              <span>REST API</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Authentication" />
              <span>Authentication</span>
            </div>

          </div>

        </div>


        {/* Databases */}

        <div className="skill-card">

          <h3>Databases</h3>

          <div className="skills-grid">

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              <span>MySQL</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>

          </div>

        </div>


        {/* AI */}

        <div className="skill-card">

          <h3>AI & Machine Learning</h3>

          <div className="skills-grid">

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="Machine Learning" />
              <span>ML</span>
            </div>

            <div className="skill-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI" />
              <span>OpenAI</span>
            </div>

          </div>

        </div>


        {/* Data Analytics */}

        <div className="skill-card">

          <h3>Data Analytics</h3>

          <div className="skills-grid">

            <div className="skill-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" />
              <span>Power BI</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Data Analysis" />
              <span>Data Analysis</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Chart.js" />
              <span>Chart.js</span>
            </div>

          </div>

        </div>


        {/* Tools */}

        <div className="skill-card">

          <h3>Tools</h3>

          <div className="skills-grid">

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              <span>GitHub</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
              <span>VS Code</span>
            </div>

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
              <span>Linux</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Skills