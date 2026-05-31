import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './about'
import Footer from './components/Footer'
import Portfolio from './portfolio'
import Contact from './contact'
import Blog from './blog'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/portfolio" element =  {<Portfolio />} />
      <Route path="/contact" element = {<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
