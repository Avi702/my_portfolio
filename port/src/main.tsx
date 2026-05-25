import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './about'
import Footer from './components/footer'
import Portfolio from './portfolio'
import Contact from './contact'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element =  {<Portfolio />} />
      <Route path="/contact" element = {<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
