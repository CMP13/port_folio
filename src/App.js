
import './App.css';
import AboutMe from './AboutMe.jsx';
import Project from './Projects.jsx'
import SideBar from './SideBar.jsx'
import Tecno from './Tecno.jsx';
import Studio from './Studies.jsx'
import Contact from './Contact.jsx';

function App() {
  return (
    <div className="App">
      <SideBar />
      <main>
        <AboutMe />
        <Project />
        <Tecno />
        <Studio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
