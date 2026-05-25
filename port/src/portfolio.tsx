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
                <img src="./icons.svg"></img>
                </div>
                <div className ="description">
                    <h3>Project Title</h3>
                    <p>Hello World</p>
                </div>
            </div>
            <div className = "box">2</div>
            <div className = "box">3</div>
            <div className = "box">4</div>
            <div className = "box">5</div>
        </main>
        </div>
        </>
    )
}

export default portfolio