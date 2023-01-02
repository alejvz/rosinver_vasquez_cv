
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { NasaAPI } from "./components/nasaapi";
import { GraficaAPI } from "./components/graficaapi";
import { Footer } from "./components/Footer";
import {repos} from "./editable-stuff/config.js";
import Project2 from "./components/Project2"; 


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <GraficaAPI />
        <Project2
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      <NasaAPI />
      <Footer />
    </div>
  );
}

export default App;
