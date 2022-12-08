import React, {component} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from "react-router-dom";
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';



{/*Comment*/}


function App(){
  return (
    <main>

      <section>
        <BrowserRouter>
          <Routes>

          <Route index element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary> 
          } />
          
         <Route path="/about" element={
           <ErrorBoundary> 
             <About />
           </ErrorBoundary> 
         } />

          <Route path="/contact" element={
           <ErrorBoundary> 
             <Contact />
           </ErrorBoundary> 
         } />
          
          <Route path="*" element={<PageNotFound />} />

       </Routes>
        </BrowserRouter>
      </section>
    </main>
  )
}

export default App;