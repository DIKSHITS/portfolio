import "./Education.css"

function Education() {
  return (

    <section id="education" className="education">

      <h2 className="education-title">Education</h2>

      <div className="education-container">

        <div className="education-card">

          <h3>Master of Computer Applications (MCA)</h3>

          <p className="edu-college">
            Specialization: Full Stack Development & AI
          </p>

          <p className="edu-desc">
            Currently pursuing MCA with focus on software development,
            Artificial Intelligence, Data Analytics and scalable
            web application architecture.
          </p>

        </div>


        <div className="education-card">

          <h3>Bachelor of Computer Applications (BCA)</h3>

          <p className="edu-college">
            CGPA: 8.5
          </p>

          <p className="edu-desc">
            Studied core computer science subjects including
            programming, database management, operating systems,
            and web development.
          </p>

        </div>

      </div>

    </section>

  )
}

export default Education