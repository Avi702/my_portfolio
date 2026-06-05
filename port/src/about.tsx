import './About.css'

function About(){
    return(
        <div className = 'About'>
        {/* top banner with the page title */}
        <header>
            <h1>About Me</h1>
            <p>My story, skills, experience, and resume</p>
        </header>
        <main>
            {/* short intro about who I am */}
            <section className="about-section">
                <h2>My Story</h2>
                <p>I'm an Honors Computer Engineering student at the University of Delaware, class of 2029, minoring in Computer Science and AI. I'm also the President of DevLab, our full-stack and backend development club, where I run weekly sessions on Git, API design, and software engineering and have grown the club to 20+ members. Most of my work lives at the intersection of full-stack development and machine learning. I do undergraduate research applying deep learning to 3D wildfire estimation and fluid dynamics simulations, and I love building full-stack AI projects on the side. I'm always learning something new and enjoy turning ideas into working software.</p>
            </section>

            {/* skills pulled from what I have actually worked with */}
            <section className="about-section">
                <h2>Skills</h2>
                <div className="skills-row">
                    <div className="skill-card">
                        <h3>Languages</h3>
                        <p>Python, JavaScript, TypeScript, C, Java, HTML, CSS, VHDL</p>
                    </div>
                    <div className="skill-card">
                        <h3>Frameworks & Tools</h3>
                        <p>React, NumPy, Pandas, PyTorch, Tensorflow, Bash, Git, Supabase, Vercel, AWS</p>
                    </div>
                    <div className="skill-card">
                        <h3>Specializations</h3>
                        <p>Full-Stack Development, Frontend Development, Machine Learning, API Design</p>
                    </div>
                </div>
            </section>

            {/* quick look at my research, leadership, and awards */}
            <section className="about-section">
                <h2>Experience & Highlights</h2>
                <div className="exp-row">
                    <div className="exp-card">
                        <h3>Research</h3>
                        <p>Undergraduate research at UD applying deep learning to 3D wildfire estimation and replacing the BGK collision operator in fluid simulations with a neural network, using PyTorch, TensorFlow, and NumPy.</p>
                    </div>
                    <div className="exp-card">
                        <h3>DevLab — President</h3>
                        <p>Founded and lead a 20+ member club running weekly sessions on full-stack development, Git, API design, and software engineering principles.</p>
                    </div>
                    <div className="exp-card">
                        <h3>Awards</h3>
                        <p>Winter Fellows Award for "Deep Learning for Forest Fingerprints" and Best Functional Implementation at the UD Honors Hackathon for TaskAI.</p>
                    </div>
                </div>
            </section>

            {/* my resume embedded as a pdf */}
            <section className="about-section">
                <h2>Resume</h2>
                <div style={{ width: '100%', height: '800px', border:'2px solid black'}}>
                 <iframe
                    src="/Avneet_resume.pdf"
                    title="Avneet's resume"
                    width="100%"
                    height="100%">
                </iframe>
                </div>
            </section>
        </main>
        </div>
    )
}

export default About
