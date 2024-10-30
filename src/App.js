
import './App.css';
import AboutMe from './AboutMe.jsx';
import Project from './Projects.jsx'
import SideBar from './SideBar.jsx'

function App() {
  return (
    <div className="App">
      <SideBar />
      <main>
        <AboutMe />
        <Project />
      </main>
    </div>
  );
}

export default App;
