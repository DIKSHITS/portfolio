import "./Experience.css"

function Experience(){

return(

<section id="experience" className="experience">

<h2 className="experience-title">Experience</h2>

<div className="experience-container">


{/* Internship */}

<div className="experience-card">

<h3>Web Development Intern</h3>

<p className="exp-company">MBSIR.IN</p>

<p className="exp-desc">

Worked as a MERN Stack Developer Intern where I developed
full stack web applications using React.js, Node.js,
Express.js and MongoDB.

Built real-world platforms including complaint
management systems and responsive web applications
with modern UI design.

</p>

<ul>

<li>Developed MERN stack applications</li>
<li>Built REST APIs using Node.js and Express</li>
<li>Designed responsive UI with React</li>
<li>Integrated MongoDB databases</li>

</ul>

</div>


{/* Freelance Work */}

<div className="experience-card">

<h3>Freelance Full Stack Developer</h3>

<p className="exp-company">Freelance Projects</p>

<p className="exp-desc">

Worked with clients to design and develop modern
business websites and web applications using
React.js and modern frontend technologies.

Delivered responsive websites optimized for
performance, SEO, and user experience.

</p>

<ul>

<li>Developed business websites for clients</li>
<li>Built responsive UI using React and CSS</li>
<li>Deployed projects on hosting platforms</li>
<li>Delivered production-ready web solutions</li>

</ul>

</div>


</div>

</section>

)

}

export default Experience