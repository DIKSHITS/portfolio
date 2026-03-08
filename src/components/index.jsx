import { useState } from "react";
import "./Hero.css";
import profile from "../images/dks .png";

function Hero() {

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
    <section id="home" className="hero">

      <div className="hero-container">

        <div className="hero-left">

          <h1>
            Hi, I'm <span>Dikshit Raj</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p>
            Creating modern, responsive and user-friendly
            applications with passion and precision.
          </p>

          <button
            className="hero-btn"
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

        </div>

        <div className="hero-right">

          <div className="image-wrapper">
            <img src={profile} alt="profile" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;