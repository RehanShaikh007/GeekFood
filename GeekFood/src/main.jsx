import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from './component/navbar.jsx'
import Section1 from './component/section1.jsx'
import Section2 from './component/section2.jsx'
import Section3 from './component/section3.jsx'
import Footer from './component/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  <Navbar/>
  <Section1/>
  <Section2/>
  <Section3/>
  <Footer/>
  </React.StrictMode>
  
);