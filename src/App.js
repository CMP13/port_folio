
import './App.css';
import AboutMe from './AboutMe.jsx';
import Project from './Projects.jsx'
import SideBar from './SideBar.jsx'
import Tecno from './Tecno.jsx';
import Studio from './Studies.jsx'

function App() {
  return (
    <div className="App">
      <SideBar />
      <main>
        <AboutMe />
        <Project />
        <Tecno />
        <Studio />
      </main>
    </div>
  );
}

export default App;
