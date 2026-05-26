import './App.css'
function App() {
  return (
    <>
    <div className='App'>
    <header>
      <div>
        <h1>Avneet Aurora</h1>
          <p>Honors Computer Engineering Student at the University of Delaware</p>
          <p>Class of 2029</p>
      </div>
      <div><img src='/avneet.png'></img></div>
    </header>
    <main>
        <h1>Skills</h1>
        <p>A student at the University of Delaware, Honors Program, majoring in Computer Engineering, minoring in Computer Science and AI. I have skills in cloud computing(AWS), Machine Learning/AI, Full-Stack Development, and am proficient in Python, Java, and JavaScript.</p>
        <h1>Highlights</h1>
        <div className="highlights-row">
        <div className='highlights'>Project 1</div>
        <div className='highlights'>Project 2</div>
        <div className='highlights'>Project 3</div>
        </div>
        <button><a href='./portfolio'>View All</a></button>
    </main>
    </div>
    </>
  )
}

export default App
