import React from "react";
import Header from "./components/Header/Header";
import Skillcontainer from "./components/Skillcontainer/Skillcontainer";
import Topcontainer from "./components/Topcontainer/Topcontainer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import { ExperienceContainer } from "./components/ExperienceContainer/ExperienceContainer";
import { Contact } from "./components/Contact/Contact";
import "./App.css"
const App = () =>{
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Skillcontainer/>
      <ProjectContainer/>
      <ExperienceContainer/>
      <Contact />

      
    </div>
  );
}
export default App;
