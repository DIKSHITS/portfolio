import { useState, useEffect } from "react";
import "./Hero.css";
import profile from "../images/dikshit.png";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "AI Engineer"
];

function Hero() {

  const [showResume, setShowResume] = useState(false);
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setText(roles[roleIndex]);
  }, [roleIndex]);

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

        {/* LEFT SIDE */}

        <div className="hero-left">

          <h1>
            Hi, I'm <span>Dikshit Raj</span>
          </h1>

          <h2 className="typing">{text}</h2>

          <p>
            Creating modern, scalable and intelligent web
            applications using MERN stack and Artificial Intelligence.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-btn"
              onClick={() => setShowResume(!showResume)}
            >
              Download Resume
            </button>

            <a href="#contact" className="hire-btn">
              Hire Me
            </a>

          </div>

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
                Web Dev Resume
              </button>

            </div>

          )}

        </div>


        {/* RIGHT SIDE PROFILE IMAGE */}

        <div className="hero-right">

          <div className="profile-container">

            <div className="profile-ring"></div>

            <div className="profile-image">
              <img src={profile} alt="Dikshit Raj" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;