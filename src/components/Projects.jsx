import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

// 🔥 helper to optimize images
const optimizeImage = (url) => url + "?w=800&q=80";

const projects = [

{
title:"AI Vision EDITH Assistant",
category:"AI",
image: optimizeImage("https://images.unsplash.com/photo-1620712943543-bcc4688e7485"),
description:"EDITH is a multimodal AI assistant capable of interacting with users using voice, text, and images.",
tech:["Python","Computer Vision","Speech Recognition","LLM APIs"],
github:"https://github.com/DIKSHITS/virtualAssistant"
},

{
title:"AI Powered Medical Assistant",
category:"AI",
image: optimizeImage("https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"),
description:"AI-powered medical assistant analyzing symptoms using ML.",
tech:["Python","Machine Learning","NLP"],
github:"https://github.com/DIKSHITS/AI-Powered-Medical-Assistant"
},

{
title:"Breast Cancer Classification",
category:"AI",
image: optimizeImage("https://images.unsplash.com/photo-1576086213369-97a306d36557"),
description:"Classifies tumors using neural networks.",
tech:["Python","TensorFlow"],
github:"https://github.com/DIKSHITS/-Breast-Cancer-Classification-with-NN"
},

{
title:"X-Ray Image Classification",
category:"AI",
image: optimizeImage("https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"),
description:"Detects patterns in X-ray images using CNN.",
tech:["Python","CNN","TensorFlow"],
github:"https://github.com/DIKSHITS/X_ray_Image_Classification_with_PreTrained_Models"
},

{
title:"House Price Prediction",
category:"Data",
image: optimizeImage("https://images.unsplash.com/photo-1560518883-ce09059eeffa"),
description:"Predicts house prices using regression.",
tech:["Python","Scikit-learn"],
github:"https://github.com/DIKSHITS/house-price-prediction"
},

{
title:"GRS - Student Grievance System",
category:"Web",
image: optimizeImage("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"),
description:"Student complaint management system.",
tech:["React","Node","MongoDB"],
github:"#"
},

{
title:"GRS - Housing Society System",
category:"Web",
image: optimizeImage("https://images.unsplash.com/photo-1560518883-ce09059eeffa"),
description:"Complaint system for residents.",
tech:["React","Node","MongoDB"],
github:"#"
},

{
title:"Online Education System",
category:"Web",
image: optimizeImage("https://images.unsplash.com/photo-1503676260728-1c00da094a0b"),
description:"Learning platform with course management.",
tech:["React","Node"],
github:"#"
},

{
title:"Late Delivery Prediction",
category:"AI",
image: optimizeImage("https://images.unsplash.com/photo-1556740738-b6a63e27c4df"),
description:"Predicts late deliveries using ML.",
tech:["Python","ML"],
github:"https://github.com/DIKSHITS/Predicting-Late-Deliveries-in-E-Commerce-using-Machine-Learning"
},

{
title:"Chatbot Automation",
category:"AI",
image: optimizeImage("https://images.unsplash.com/photo-1531746790731-6c087fecd65a"),
description:"AI chatbot automation using n8n.",
tech:["n8n","AI"],
github:"#"
},

{
title:"Smart Budgeting Tool",
category:"Web",
image: optimizeImage("https://images.unsplash.com/photo-1554224155-6726b3ff858f"),
description:"Expense tracking web app.",
tech:["JS","HTML","CSS"],
github:"https://github.com/DIKSHITS/smart-budgeting-tool"
},

{
title:"Task Manager App",
category:"Web",
image: optimizeImage("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b"),
description:"Manage daily tasks efficiently.",
tech:["React","Node"],
github:"https://github.com/DIKSHITS/task-manager-app"
},

{
title:"Movie Management System",
category:"Data",
image: optimizeImage("https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"),
description:"Manages movie listings and ratings.",
tech:["Python"],
github:"https://github.com/DIKSHITS/movie-system"
},

{
title:"Portfolio",
category:"Web",
image: optimizeImage("https://images.unsplash.com/photo-1498050108023-c5249f4df085"),
description:"My personal developer portfolio.",
tech:["React","Framer Motion"],
live:"https://www.dikshit.live/",
github:"https://github.com/DIKSHITS/portfolio"
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

<section className="projects">

<h2 className="projects-title">My Projects</h2>

<div className="project-tabs">
{["All","AI","Web","Data"].map(tab=>(
<button key={tab} onClick={()=>setFilter(tab)}>
{tab}
</button>
))}
</div>

<motion.div layout className="projects-grid">

{filtered.map((project)=>(

<motion.div
layout
key={project.title}
className="project-card"
whileHover={{ scale:1.05 }}
initial={{ opacity:0, y:40 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:0.5 }}
onClick={()=>setSelectedProject(project)}
>

<img src={project.image} alt={project.title} loading="lazy"/>

<h3>{project.title}</h3>

<p>{project.description.substring(0,100)}...</p>

</motion.div>

))}

</motion.div>

<AnimatePresence mode="wait">

{selectedProject &&(

<motion.div
className="project-modal"
initial={{ opacity:0 }}
animate={{ opacity:1 }}
exit={{ opacity:0 }}
onClick={()=>setSelectedProject(null)}
>

<motion.div
key={selectedProject.title}
className="modal-content"
initial={{ scale:0.8, opacity:0 }}
animate={{ scale:1, opacity:1 }}
exit={{ scale:0.8, opacity:0 }}
onClick={(e)=>e.stopPropagation()}
>

<img src={selectedProject.image} alt="project"/>

<h2>{selectedProject.title}</h2>
<p>{selectedProject.description}</p>

<div className="tech-stack">
{selectedProject.tech.map((t,i)=>(
<span key={i}>{t}</span>
))}
</div>

<div className="project-links">
{selectedProject.github && <a href={selectedProject.github}>GitHub</a>}
{selectedProject.live && <a href={selectedProject.live}>Live</a>}
</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</section>

);

}

export default Projects;