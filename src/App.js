import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

//import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Project from "./pages/Projects/Project";
import OutreachEducation from "./pages/OutreachEducation/OutreachEducation";
import Advisor from "./pages/Advisors/Advisor";
import Token from "./pages/Token/Token";

//import components
import Contact from "./components/Contact/Contact";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/outreach-education" element={<OutreachEducation />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/token" element={<Token />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
