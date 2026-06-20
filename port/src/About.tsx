import './About.css'

function About(){
    return(
        <div className = 'About'>
        <header>
            <h1>About Me</h1>
            <p>My story, skills, experience, and resume</p>
        </header>
        <main>
            <section className="abt-section">
                <h2>My Story</h2>
                <div className="abt-section-card">
                <p>I'm an Honors Computer Engineering student at the University of Delaware (Class of 2029), minoring in Computer Science and AI, with a 3.77 GPA and a spot on the Dean's List. What pulls me in is building things that live where software, machine learning, and hardware meet — full-stack AI apps, deep-learning research, and the occasional embedded idea I sketch out on my blog. Right now I'm doing undergraduate research applying deep learning to 3D wildfire estimation and fluid-dynamics simulations, and as President of DevLab I've grown our development club to 20+ members by running weekly hands-on sessions on Git, API design, and software engineering. I'm happiest turning a rough idea into working software, and I'm always picking up something new along the way.</p>
                <p>I'm currently looking for software and machine learning internships — feel free to reach out through any of the links in the footer!</p>
                </div>
            </section>
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

            {/* a bit about me outside of class and code */}
            <section className="about-section">
                <h2>Beyond Code</h2>
                <div className="exp-row">
                    <div className="exp-card">
                        <h3>Working Out</h3>
                        <p>I enjoy lifting heavy weight, which actually inspired SquatBuddy — my AI coach that analyzes squat form from video. A lot of my favorite project ideas start from things I'm passionate about outside of tech.</p>
                    </div>
                    <div className="exp-card">
                        <h3>Teaching & Mentoring</h3>
                        <p>I've worked as a teaching assistant helping students prep for the SAT, and I mentor DevLab members on project design and debugging. I love breaking down hard concepts and helping people get unstuck.</p>
                    </div>
                    <div className="exp-card">
                        <h3>Always Tinkering</h3>
                        <p>Outside of coursework I'm usually building something new — a framework I haven't tried, an embedded project, or writing up ideas like an AI agentic grocery shopper on my blog.</p>
                    </div>
                </div>
            </section>

            {/* my resume embedded as a pdf */}
            <section className="about-section">
                <h2>Resume</h2>
                <div style={{ width: '100%', height: '800px', border:'2px solid black'}}>
                 <iframe
                    src="/Avneet_resume_1copy.pdf"
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
