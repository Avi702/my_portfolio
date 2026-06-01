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
                    <p>Hello World</p>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img></img>
                </div>
                <div className="description">
                    <h3>Task AI</h3>
                    <p>Hello World</p>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img></img>
                </div>
                <div className="description">
                    <h3>Rasberry-PI: Etch a Sketch</h3>
                    <p>Hello World</p>
                </div>
            </div>
            <div className = "box">
                <div className="image">
                    <img></img>
                </div>
                <div className="description">
                    <h3>Simple Ping Pong: VHDL</h3>
                    <p>Hello World</p>
                </div>
            </div>
        </main>
        </div>
        </>
    )
}

export default portfolio