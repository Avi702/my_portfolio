import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './About.tsx'
import Footer from './components/Footer'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Blog from './Blog'
import AdminPost from './admin/AdminPost'
import AdminLogin from './admin/AdminLogin'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/portfolio" element =  {<Portfolio />} />
      <Route path="/contact" element = {<Contact />} />
      <Route path="/admin/AdminPost" element={<AdminPost />} />
      <Route path="/admin/AdminLogin" element={<AdminLogin />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
