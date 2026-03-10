import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projects = [

{
title:"AI Vision EDITH",
category:"AI",
image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
description:
"EDITH is a multimodal AI assistant capable of interacting with users using voice, text and images. It processes commands and analyzes images using AI APIs.",
tech:["Python","Computer Vision","Speech Recognition","LLM APIs"],
github:"https://github.com/DIKSHITS/virtualAssistant"
},

{
title:"Breast Cancer Classification",
category:"AI",
image:"https://images.unsplash.com/photo-1576086213369-97a306d36557",
description:
"A machine learning system that classifies tumors as malignant or benign using neural networks trained on medical datasets.",
tech:["Python","Neural Networks","TensorFlow","Data Processing"],
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
"Machine learning model predicting house prices using regression algorithms.",
tech:["Python","Scikit-learn","Pandas"],
github:"https://github.com/DIKSHITS/house-price-prediction"
},

{
title:"FitLifeByMedha",
category:"Web",
image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
description:
"Modern fitness platform providing workout programs and responsive UI.",
tech:["React","JavaScript","CSS","Responsive Design"],
live:"https://fitlifebymedha.live/"
},

{
title:"Sohra UPVC Website",
category:"Web",
image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e",
description:
"Business website showcasing UPVC products and services with modern UI.",
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