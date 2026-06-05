import './App.css'
function App() {
  return (
    <>
    <div className='App'>
    {/* top banner with my name and photo */}
    <header>
      <div>
        <h1>Avneet Aurora</h1>
          <p>Honors Computer Engineering Student at the University of Delaware</p>
          <p>Class of 2029</p>
          {/* quick tagline of what I focus on */}
          <p className="tagline">Full-Stack Development · Machine Learning · API Design</p>
      </div>
      <div><img src='/avneet.png'></img></div>
    </header>
    <main>
        {/* short welcome, the full details live on the About page */}
        <h1>Welcome</h1>
        <p>Hi, I'm Avneet! I'm a Computer Engineering student who loves building full-stack apps and working on machine learning research. Take a look at some of my favorite projects below.</p>
        <a className="about-link" href="./about">More about me →</a>
        {/* a few favorite projects, click View All to see the rest */}
        <h1>Highlights</h1>
        <div className="highlights-row">
        <div className='highlights'>
            <h3>Decora AI</h3>
            <p>A full-stack AI interior-design platform built with React/Next.js and TypeScript, with a Supabase backend and a Stripe credit system.</p>
        </div>
        <div className='highlights'>
            <h3>TaskAI</h3>
            <p>A Python web app that schedules study sessions around your classes using Google Gemini. Won Best Functional Implementation at the Honors Hackathon.</p>
        </div>
        <div className='highlights'>
            <h3>SquatBuddy</h3>
            <p>An AI powerlifting coach that uses an LSTM Autoencoder to analyze squat form frame-by-frame from raw video.</p>
        </div>
        </div>
        <button><a href='./portfolio'>View All</a></button>
    </main>
    </div>
    </>
  )
}

export default App
