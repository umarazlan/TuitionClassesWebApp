// import './App.css'
// import router from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// function App() {
//   const router = createBrowserRouter(
//      [
//       {
//         path:"/",
//         element:<div>
//           <Navbar/>
//           <Home/>
//         </div>,
//       },
//       {
//         path:"/about",
//         element:
//         <div>

//         </div>
        
//       },
//       {
//         path:"/services",
//         element:
//         <div>

//         </div>,
//       },
//       {
//         path:"/contact",
//         element:,
//       }

//      ]
//   )
//   return (
//     <div className='bg-red-200 text-white  '>
//       heloooooooooo g
      
//     </div>
     
//   )
// }

// export default App

// import './App.css'
// import HeroSection from './Components/HeroSection'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Navbar } from './Components/Navbar'
// import Home from './components/Home';
// import About from './Components/About';
// import Services from './Components/Services';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';

// function App() {
  
//   return (
//       <BrowserRouter>
//       <Navbar/>
//        <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/service" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* <Route path="*" element={<Error />} /> */}
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//   )
// }

// export default App

// import React from "react";
// import {Navbar} from './Components/Navbar'
// import HeroSection from './Components/HeroSection'
// import Footer from './Components/Footer'

// const App = () => {
//   return (
//     <> 
//        <Navbar/>
//       <HeroSection />
//       <Footer/>
//     </>
//   );
// };

// export default App;
// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import {Navbar} from "./Components/Navbar";
// import HeroSection from "./Components/HeroSection";
// import Footer from "./Components/Footer";
// import Qualifications from "./Components/Qualifications";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Services from "./Components/Services";
// import FeeStructure from "./Components/Fee";
// import Contact from "./Components/Contact";

// const HomePage = () => {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <Footer />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Routes>

//       {/* Main Website */}
//       <Route path="/" element={
//       <>
//       <Navbar />
//       <Home />
//       <About/>
//       <Services/>
//       <FeeStructure/>
//       <Contact/>
//        <Footer />
//       </>
//     } />



//       <Route path="/about" element={<About/>}/>
//       <Route path="/services" element={<Services/>}/>
//       <Route path="/fees" element={<FeeStructure/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       {/* Qualifications Page */}
//       <Route
//         path="/qualifications"
//         element={
//           <>
//             <Navbar />
//             <Qualifications />
//             <Footer />
//           </>
//         }
//       />

//     </Routes>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import FeeStructure from "./Components/Fee";
import Contact from "./Components/Contact";
import Qualifications from "./Components/Qualifications";
import ScrollToTop from "./Components/ScrollUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./Components/Error";
const MainWebsite = () => {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Services />
      <FeeStructure />
      <Contact />
        <ToastContainer />
      <Footer />
    </>
  );
};

const App = () => {
  return (<>
    <ScrollToTop />
    <Routes>

      {/* Single Page Website */}
      <Route path="/" element={<MainWebsite />} />
      <Route path="*" element={<Error />} />

      {/* Separate Qualifications Page */}
      <Route
        path="/qualifications"
        element={
          <>
            <Navbar />
            <Qualifications />
            <Footer />
          </>
        }
      />

    </Routes>
    </>
  );
};

export default App;