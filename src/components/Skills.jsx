import "./Skills.css"

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend Development</h3>

          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend Development</h3>

          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API Development</li>
            <li>Authentication (JWT)</li>
            <li>Server-side Logic</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <h3>Databases</h3>

          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Database Design</li>
          </ul>
        </div>

        {/* AI / Machine Learning */}
        <div className="skill-card">
          <h3>AI & Machine Learning</h3>

          <ul>
            <li>Python</li>
            <li>Machine Learning Basics</li>
            <li>OpenAI API Integration</li>
            <li>AI Content Generation</li>
            <li>Data Processing</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools & Platforms</h3>

          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Linux / Windows</li>
          </ul>
        </div>

        {/* Data Analytics */}
        {/* Data Analytics */}

<div className="skill-card">
  <h3>Data Analytics & Visualization</h3>

  <ul>
    <li>Data Analysis</li>
    <li>Data Visualization</li>
    <li>Power BI</li>
    <li>Dashboard Development</li>
    <li>Chart.js</li>
    <li>Business Intelligence Reporting</li>
  </ul>
</div>

      </div>

    </section>
  )
}

export default Skills