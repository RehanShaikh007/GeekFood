import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from './component/navbar.jsx'
import Qdata from "./component/Qdata.jsx";
import Footer from './component/footer.jsx'
import { quotesData } from './component/quote.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  <Navbar/>
   {quotesData.map((item, idx)=>{
    return <Qdata key={idx} quote={item.quote} writer={item.writer} />
   }) }
  <Footer/>
  </React.StrictMode>
  
);