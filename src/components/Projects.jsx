import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projects = [

{
title:"AI Vision EDITH Assistant",
category:"AI",
image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
description:
"EDITH is a multimodal AI assistant capable of interacting with users using voice, text, and images. It processes commands and analyzes images using AI APIs.",
tech:["Python","Computer Vision","Speech Recognition","LLM APIs"],
github:"https://github.com/DIKSHITS/virtualAssistant"
},

{
title:"AI Powered Medical Assistant",
category:"AI",
image:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
description:
"An AI-powered medical assistant that analyzes user symptoms and provides possible health insights using machine learning and natural language processing. It helps users understand potential medical conditions and guides them toward appropriate care.",
tech:["Python","Machine Learning","NLP","Healthcare AI"],
github:"https://github.com/DIKSHITS/AI-Powered-Medical-Assistant"
},

{
title:"Breast Cancer Classification",
category:"AI",
image:"https://images.unsplash.com/photo-1576086213369-97a306d36557",
description:
"A machine learning system that classifies tumors as malignant or benign using neural networks trained on medical datasets.",
tech:["Python","TensorFlow","Neural Networks","Data Processing"],
github:"https://github.com/DIKSHITS/-Breast-Cancer-Classification-with-NN"
},

{
title:"X-Ray Image Classification",
category:"AI",
image:"https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
description:
"Deep learning system detecting patterns in medical X-ray images using pretrained convolutional neural networks.",
tech:["Python","CNN","Deep Learning","TensorFlow"],
github:"https://github.com/DIKSHITS/X_ray_Image_Classification_with_PreTrained_Models"
},

{
title:"House Price Prediction",
category:"Data",
image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa",
description:
"Machine learning model predicting house prices using regression algorithms and data analysis techniques.",
tech:["Python","Scikit-learn","Pandas","Regression"],
github:"https://github.com/DIKSHITS/house-price-prediction"
},

{
title:"GRS - Student Grievance System",
category:"Web",
image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
description:
"A grievance redress system designed for students to submit complaints and track resolutions with an admin dashboard.",
tech:["React","Node.js","Express","MongoDB"],
github:"#"
},

{
title:"GRS - Housing Society System",
category:"Web",
image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa",
description:
"Complaint management system for housing societies allowing residents to report issues and track complaint status.",
tech:["React","Node.js","Express","MongoDB"],
github:"#"
},

{
title:"Online Education System",
category:"Web",
image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
description:
"Online learning platform with course management, student enrollment, and content delivery features.",
tech:["React","Node.js","MongoDB","REST API"],
github:"#"
},
{
title:"Late Delivery Prediction (E-Commerce ML)",
category:"AI",
image:"https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
description:
"Machine learning project predicting late deliveries in e-commerce supply chains using historical logistics data.",
tech:["Python","Machine Learning","Data Analysis"],
github:"https://github.com/DIKSHITS/Predicting-Late-Deliveries-in-E-Commerce-using-Machine-Learning"
},

{
title:"Chatbot Automation with n8n",
category:"AI",
image:"https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
description:
"AI-powered chatbot automation workflow built using n8n for handling automated conversations and integrations.",
tech:["n8n","Automation","AI Chatbot"],
github:"#"
},
{
title:"Smart Budgeting Tool",
category:"Web",
image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f",
description:
"A budgeting and expense tracking web application that helps users manage finances and monitor spending habits.",
tech:["JavaScript","HTML","CSS"],
github:"https://github.com/DIKSHITS/smart-budgeting-tool"
},

{
title:"Task Manager App",
category:"Web",
image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
description:
"A productivity web application allowing users to manage daily tasks, track progress, and organize work efficiently.",
tech:["JavaScript","React","Node.js"],
github:"https://github.com/DIKSHITS/task-manager-app"
},
{
title:"Movie Management System",
category:"Data",
image:"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
description:
"Python-based system that manages movie data, including listings, ratings, and search functionality.",
tech:["Python","Data Processing"],
github:"https://github.com/DIKSHITS/movie-system"
},
{
title:"Personal Developer Portfolio",
category:"Web",
image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
description:
"My personal developer portfolio showcasing my MERN stack projects, AI/ML work, skills, and contact information with a modern responsive design.",
tech:["React","Framer Motion","JavaScript","CSS","Responsive UI"],
live:"https://www.dikshit.live/",
github:"https://github.com/DIKSHITS/portfolio"
},

{
title:"E-Commerce Website",
category:"Web",
image:"https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
description:
"Full-stack e-commerce platform with product listings, shopping cart, payment integration, and admin dashboard.",
tech:["React","Node.js","Express","MongoDB","Stripe"],
github:"#"
},

{
title:"HR Management System",
category:"Web",
image:"https://images.unsplash.com/photo-1521791136064-7986c2920216",
description:
"Human resource management platform for managing employees, attendance, payroll, and performance tracking.",
tech:["React","Node.js","MongoDB","Dashboard UI"],
github:"#"
},

{
title:"Luminosity by Suvam Photography",
category:"Web",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
description:
"A modern photography portfolio website showcasing wedding moments, galleries, and booking features.",
tech:["React","JavaScript","CSS","Responsive Design"],
live:"https://www.luminositybysuvam.live/"
},

{
title:"FitLifeByMedha",
category:"Web",
image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
description:
"Modern fitness platform providing workout programs, fitness blogs, and responsive UI design.",
tech:["React","JavaScript","CSS","Responsive Design"],
live:"https://fitlifebymedha.live/"
},

{
title:"Sohra UPVC Business Website",
category:"Web",
image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e",
description:
"Corporate website showcasing UPVC window and door solutions with a modern responsive design.",
tech:["React","CSS","Responsive UI"],
live:"https://www.sohraupvc.com/"
}

];

function Projects(){

const [filter,setFilter] = useState("All");
const [selectedProject,setSelectedProject] = useState(null);

const filtered =
filter==="All"
?projects
:projects.filter(p=>p.category===filter);

return(

<section id="projects" className="projects">

<h2 className="projects-title">My Projects</h2>

<div className="project-tabs">

{["All","AI","Web","Data"].map(tab=>(
<button key={tab} onClick={()=>setFilter(tab)}>
{tab}
</button>
))}

</div>

<div className="projects-grid">

{filtered.map((project,index)=>(

<motion.div
key={index}
className="project-card"
whileHover={{scale:1.05}}
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.4}}
onClick={()=>setSelectedProject(project)}
>

<img src={project.image} alt={project.title}/>

<h3>{project.title}</h3>

<p>{project.description.substring(0,100)}...</p>

</motion.div>

))}

</div>


<AnimatePresence>

{selectedProject &&(

<motion.div
className="project-modal"
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
onClick={()=>setSelectedProject(null)}
>

<motion.div
className="modal-content"
initial={{scale:0.8}}
animate={{scale:1}}
exit={{scale:0.8}}
onClick={(e)=>e.stopPropagation()}
>

<img src={selectedProject.image} alt="project"/>

<h2>{selectedProject.title}</h2>

<p>{selectedProject.description}</p>

<h4>Technologies Used</h4>

<div className="tech-stack">

{selectedProject.tech.map((t,i)=>(
<span key={i}>{t}</span>
))}

</div>

<div className="project-links">

{selectedProject.github &&(
<a href={selectedProject.github} target="_blank" rel="noreferrer">
GitHub
</a>
)}

{selectedProject.live &&(
<a href={selectedProject.live} target="_blank" rel="noreferrer">
Live Site
</a>
)}

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</section>

);

}

export default Projects;