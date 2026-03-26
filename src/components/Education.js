import "./Education.css";
import { Helmet } from "react-helmet-async";

function Education() {
  return (
    <>
      {/* ✅ SEO PART */}
      <Helmet>
        <title>Education | Dikshit Raj</title>

        <meta
          name="description"
          content="Explore Dikshit Raj's educational background including MCA and BCA with strong academic performance and focus on software development and AI."
        />

        <link rel="canonical" href="https://dikshit.live/education" />
      </Helmet>

      {/* UI */}
      <section id="education" className="education">

        <h1 className="education-title">Education</h1>

        <div className="education-container">

          <div className="education-card">
            <h2>Master of Computer Applications (MCA)</h2>

            <p className="edu-college">
              CGPA: 9.23
            </p>

            <p className="edu-desc">
              Currently pursuing MCA with focus on software development,
              Artificial Intelligence, Data Analytics and scalable
              web application architecture.
            </p>
          </div>

          <div className="education-card">
            <h2>Bachelor of Computer Applications (BCA)</h2>

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
    </>
  );
}

export default Education;