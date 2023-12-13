import React, { useEffect, useState } from "react";
import Header from "./components/Header";

import "./App.css";
import image from ".//assets/masked-woman.jpg";

import api from "./services/Api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(res => {
      setProjects(res.data)
    })
  }, [projects])

  const handleAddProject = () => {
    const projectName = document.querySelector("#inpProjectName");
    const projectOwner = document.querySelector("#inpProjectOwner");
    api.post('projects', {
      title: projectName.value,
      owner: projectOwner.value
    })
  };

  return (
    <>
      <Header title="Homepage" />

      <ul>
        { projects.map(project => <li key={project.id}>{project.title}</li>) }
      </ul>

      <img width={100} src={image} alt="" />

      <br />

      <input
        type="text"
        name=""
        id="inpProjectName"
        placeholder="Nome do projeto"
      />
      <input 
        type="text"
        name="" 
        id="inpProjectOwner" 
        placeholder="Dono do projeto"
      />
      <button onClick={handleAddProject}>Adicionar</button>
    </>
  );
}

export default App;
