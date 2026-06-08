import './Portfolio.css'
function portfolio(){
    return(
        <>
        <div className='portfolio-page'>
        <header>
            <h1>Projects</h1>
            <p>A list of my favorite projects that demonstrates my understanding and passion of software and hardware programming.</p>
        </header>
        <main>
            <div className = "box">
                <div className="image">
                <iframe width = "500"
                height ="325"
                src="https://www.youtube.com/embed/84N0ft7sl3M"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
                </iframe>
                </div>
                <div className ="description">
                    <h3>SquatBuddy</h3>
                    <p>An AI-powered powerlifting coach built at HenHacks 2026 that uses an LSTM Autoencoder to analyze squat form frame-by-frame from raw video. Built on a real-time video processing pipeline with OpenCV, it delivers joint-specific biomechanical feedback across the full kinetic chain.</p>
                    <div className="tags">
                        <span className="tag">Deep Learning</span>
                        <span className="tag">Computer Vision</span>
                    </div>
                    <a href="https://devpost.com/software/squatbuddy">Link to Devpost</a>
                    <a href="https://github.com/Avi702/henshack2026">Link to Repo</a>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img src="./IMG_7517_2.jpg"></img>
                </div>
                <div className="description">
                    <h3>Deep Learning for Forest Fingerprints</h3>
                    <p>Wildfire risk comes down to how much burnable fuel a forest holds, which is hard to measure at scale. Replicating and extending published research, I translated the LiDAR pipeline from R to Python — turning raw ALS point clouds into 3D tensors and computing canopy bulk density and fuel metrics. I then built a fully-convolutional neural network in PyTorch (Conv, BatchNorm, and LeakyReLU layers with skip connections) to predict canopy bulk density from the LiDAR tensors. Tested on NEON SERC 2022 data; earned a Winter Fellows Award under Prof. Gonzalo Arce. More info in the slideshow and repo!</p>
                    <div className="tags">
                        <span className="tag">Python</span>
                        <span className="tag">Numpy</span>
                        <span className="tag">Pytorch</span>
                    </div>
                    <a href="https://github.com/Avi702/PointCloudLidarReplicate">Link to Repository</a>
                    <a href="./Lidar_Metrics_copy.pdf">Presentation</a>
            </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img src="./IMG_7690.jpg"></img>
                </div>
                <div className="description">
                    <h3>Lattice Boltzmann using a Neural Network Collision Operator</h3>
                    <p>The lattice boltzmann with a BGK operator is a computationally efficient solve of the Navier Stokes Equations for fluid dynamics. However, for rarefield regimes scientists are forced to use Direct Simulation Monte Carlo that is accurate but computationally expensive 
                        and slow. My goal was to replace the collision operator with a Neural Network and extend into 3D. Doing this required adding inducitve biases and training on random macroscopic states. More info available in slideshow!</p>
                    <div className="tags">
                        <span className="tag">Python</span>
                        <span className="tag">Numpy</span>
                        <span className="tag">Tensorflow</span>
                    </div>
                    <a href="https://docs.google.com/presentation/d/17lbmd6rQyd4x-8M6SZlVmfi0nkgFL_IXYIcgEYjdUyc/edit?usp=sharing">Presentation</a>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img src="./Decora.png"></img>
                </div>
                <div className="description">
                    <h3>Decora AI</h3>
                    <p>A full-stack AI interior-design platform built with React/Next.js and TypeScript. It uses a Supabase backend for auth, database, and storage, plus a Stripe-based credit system, all deployed serverless on Vercel.</p>
                    <div className="tags">
                        <span className="tag">Full-Stack Development</span>
                        <span className="tag">API Design</span>
                    </div>
                    <a href="https://www.decora.club">Link to Decora</a>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img src="./TaskAI.png"></img>
                </div>
                <div className="description">
                    <h3>Task AI</h3>
                    <p>A Python web app for college students to schedule study sessions around their classes and activities, using Google Gemini for smart scheduling recommendations. Won Best Functional Implementation at the UD Honors Hackathon.</p>
                    {/* key skills I learned on this project */}
                    <div className="tags">
                        <span className="tag">Hackathon Winner</span>
                        <span className="tag">LLM Integration</span>
                        <span className="tag">Python</span>
                    </div>
                    <a href="https://devpost.com/software/taskai-vjx8cl">Link to Devpost</a>
                    <a href="https://github.com/Avi702/hackathon2025-taskai">Link to codebase</a>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img></img>
                </div>
                <div className="description">
                    <h3>Rasberry-PI: Etch a Sketch</h3>
                    <p>A digital Etch a Sketch built on a Raspberry Pi, reading input from potentiometers to draw on screen. A fun hardware project to practice working with the Pi's GPIO pins.</p>
                    <div className="tags">
                        <span className="tag">Embedded Systems</span>
                        <span className="tag">Hardware I/O</span>
                        <span className="tag">C</span>
                    </div>
                    <a href="https://github.com/Avi702/rasberrpi-etch-a-sketch">Link to Repo</a>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <video src = "./IMG_7750.mp4" controls></video>
                </div>
                <div className="description">
                    <h3>Simple Ping Pong: VHDL</h3>
                    <p>A one-dimensional Pong game built from scratch in VHDL on a Digilent Arty S7-25 (Spartan-7) FPGA. The ball is a single LED racing across a row of 8 — each player taps their button right as it reaches their end, with live scores on seven-segment displays and first to 10 winning. A multi-module structural design with FSMs, clock dividers, and an edge-detected input buffer to sync button presses across clock domains. Check out the GitHub for the full write-up!</p>
                    <div className="tags">
                        <span className="tag">Digital Logic Design</span>
                        <span className="tag">FPGA</span>
                    </div>
                    <a href="https://github.com/Avi702/FPGA_SimplePingPong.git">Link to Github</a>
                </div>
            </div>
        </main>
        </div>
        </>
    )
}

export default portfolio