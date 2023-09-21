// import React from "react";
// import {Routes,Route} from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import ReactDOM from 'react-dom/client'
// import Navbar from './components/Navbar.jsx'
// import Home from './components/Home.jsx'
// import Project from './components/Projects.jsx'
// import Fatwa from './components/Fatwa.jsx'
// import Events from './components/Events.jsx'
// import Gallery from './components/Gallery.jsx'
// import Video from './components/Video.jsx'
// import Registeration from './components/Registeration.jsx'
// import About from './components/About.jsx'

// const App = () => {
//   return (
//     <>
//      <Navbar/>
//      <Home/>
//      <BrowserRouter>
//    <Routes>
//      <Route path='/' element={<Home/>}></Route>
//      <Route path='/Project' element={<Project/>}></Route>
//      <Route path='/Fatwa' element={<Fatwa/>}></Route>
//      <Route path='/Events' element={<Events/>}></Route>
//      <Route path='/Gallery' element={<Gallery/>}></Route>
//      <Route path='/Video' element={<Video/>}></Route>
//      <Route path='/Registeration' element={<Registeration/>}></Route>
//      <Route path='/About' element={<About/>}></Route>
//    </Routes>
//    </BrowserRouter>
//     </>
//   );
// };

// export default App;

import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import'./App.css'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
