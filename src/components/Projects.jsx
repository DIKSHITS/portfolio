import { useState } from "react";
import "./Projects.css";

function Projects() {

  const [activeCategory, setActiveCategory] = useState(null);

  return (

    <section id="projects" className="projects">

      <h2 className="projects-title">My Projects</h2>

      {/* CATEGORY SECTION */}

      <div className="project-categories">

        {/* AI CATEGORY */}
        <div
          className="category-card"
          onClick={() => setActiveCategory("ai")}
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60"
            alt="AI"
          />

          <h3>AI & Machine Learning</h3>
          <p>AI assistants, ML models and computer vision systems</p>
        </div>


        {/* DATA CATEGORY */}
        <div
          className="category-card"
          onClick={() => setActiveCategory("data")}
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
            alt="Data Analytics"
          />

          <h3>Data Analytics</h3>
          <p>Power BI dashboards and data analysis projects</p>
        </div>


        {/* WEB CATEGORY */}
        <div
          className="category-card"
          onClick={() => setActiveCategory("web")}
        >
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60"
            alt="Web Development"
          />

          <h3>Web Development</h3>
          <p>MERN stack applications and modern web platforms</p>
        </div>

      </div>


      {/* ================= AI PROJECTS ================= */}

      {activeCategory === "ai" && (

        <div className="projects-grid">

          {/* EDITH */}
          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=60"
              alt="AI Assistant"
            />

            <h3>AI Vision EDITH</h3>

            <p>
              Multimodal AI assistant capable of understanding voice,
              text and images using computer vision and AI APIs.
            </p>

            <a
              href="https://github.com/DIKSHITS/virtualAssistant"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>


          {/* Breast Cancer */}
          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=60"
              alt="Breast Cancer Classification"
            />

            <h3>Breast Cancer Classification</h3>

            <p>
              Neural network model detecting tumors using
              medical datasets and machine learning algorithms.
            </p>

            <a
              href="https://github.com/DIKSHITS/-Breast-Cancer-Classification-with-NN"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>


          {/* X-ray */}
          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=60"
              alt="X-ray AI"
            />

            <h3>X-ray Image Classification</h3>

            <p>
              Deep learning model classifying medical X-ray images
              using pretrained convolutional neural networks.
            </p>

            <a
              href="https://github.com/DIKSHITS/X_ray_Image_Classification_with_PreTrained_Models"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

      )}



      {/* ================= DATA PROJECTS ================= */}

      {activeCategory === "data" && (

        <div className="projects-grid">

          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
              alt="Banking Data"
            />

            <h3>Banking Data Analysis</h3>

            <p>
              Data analytics system identifying financial patterns,
              trends and customer behaviour using data visualization.
            </p>

          </div>


          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=60"
              alt="House Price"
            />

            <h3>House Price Prediction</h3>

            <p>
              Machine learning model predicting property prices
              using regression algorithms and housing datasets.
            </p>

            <a
              href="https://github.com/DIKSHITS/house-price-prediction"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

      )}



      {/* ================= WEB PROJECTS ================= */}

      {activeCategory === "web" && (

        <div className="projects-grid">

          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60"
              alt="Fitness Website"
            />

            <h3>FitLifeByMedha</h3>

            <p>
              Fitness platform providing workout programs
              and healthy lifestyle guidance.
            </p>

            <a
              href="https://fitlifebymedha.live/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>

          </div>


          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60"
              alt="UPVC Website"
            />

            <h3>Sohra UPVC</h3>

            <p>
              Business website showcasing UPVC products
              and services with modern responsive design.
            </p>

            <a
              href="https://www.sohraupvc.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>

          </div>


          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60"
              alt="Complaint System"
            />

            <h3>Complaint Management System</h3>

            <p>
              Full stack platform for submitting complaints
              and tracking issue resolution with admin dashboard.
            </p>

          </div>

        </div>

      )}

    </section>
  );
}

export default Projects;