import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './About.tsx'
import Footer from './components/Footer'
import Portfolio from './Portfolio.tsx'
import Contact from './Contact.tsx'
import Blog from './Blog'
import AdminPost from './admin/AdminPost'
import AdminLogin from './admin/AdminLogin'
import AdminEdit from './admin/AdminEdit'
import { prefetchBlogs } from './blogCache'

// start loading blog posts (and waking the backend) the moment the site opens,
// so the data is ready before anyone navigates to the Blog page
prefetchBlogs()

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
      <Route path='/admin/AdminEdit/:id' element={<AdminEdit />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
)
