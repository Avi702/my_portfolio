import './portfolio.css'
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
                    <p> using an LSTM Autoencoder to analyze squat form frame-by-frame from raw video</p>
                    <a href="https://devpost.com/software/squatbuddy">Link to Devpost</a>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img src="./Decora.png"></img>
                </div>
                <div className="description">
                    <h3>Decora AI</h3>
                    <p>A full-stack AI interior-design platform built with React/Next.js and TypeScript. It uses a Supabase backend for auth, database, and storage, plus a Stripe-based credit system, all deployed serverless on Vercel.</p>
                    <a href="https://www.decora.club">Link to Decora</a>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img></img>
                </div>
                <div className="description">
                    <h3>Task AI</h3>
                    <p>A Python web app for college students to schedule study sessions around their classes and activities, using Google Gemini for smart scheduling recommendations. Won Best Functional Implementation at the UD Honors Hackathon.</p>
                    <a href="https://devpost.com/software/taskai-vjx8cl">Link to Devpost</a>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img></img>
                </div>
                <div className="description">
                    <h3>Rasberry-PI: Etch a Sketch</h3>
                    <p>A digital Etch a Sketch built on a Raspberry Pi, reading input from potentiometers to draw on screen. A fun hardware project to practice working with the Pi's GPIO pins.</p>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img></img>
                </div>
                <div className="description">
                    <h3>Simple Ping Pong: VHDL</h3>
                    <p>A simple Pong game written in VHDL and run on an FPGA, with the paddles and ball drawn to a VGA display. A hands-on way to learn digital logic design.</p>
                </div>
            </div>
        </main>
        </div>
        </>
    )
}

export default portfolio