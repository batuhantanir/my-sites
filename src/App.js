//COMPONENTS
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="text-white ">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
