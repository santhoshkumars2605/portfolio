import React, { useState } from "react";
import "./Project.css";
import Container from 'react-bootstrap/Container';
const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "This is the first project description.",
    image: "project1.jpg",
    githubLink: "https://github.com/your-username/project1",
    hostedLink: "https://your-hosted-link.com/project1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is the second project description.",
    image: "project2.jpg",
    githubLink: "https://github.com/your-username/project2",
    hostedLink: "https://your-hosted-link.com/project2",
  },
  {
    id: 3,
    name: "Project 2",
    description: "This is the second project description.",
    image: "images/react.png",
    githubLink: "https://github.com/your-username/project2",
    hostedLink: "https://your-hosted-link.com/project2",
  },
  {
    id: 3,
    name: "Project 2",
    description: "This is the second project description.",
    image: "images/python.png",
    githubLink: "https://github.com/your-username/project2",
    hostedLink: "https://your-hosted-link.com/project2",
  },
  
  // Add more projects here
];

const ProjectBox = ({ project }) => {
  const { name, description, image, githubLink, hostedLink } = project;

  return (
    <div className="projects" style={{backgroundColor:'black'}}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={image} alt={name} style={{width:'250px', height:'200px'}} />
            </div>
            <div className="flip-card-back">
              <h1>{name}</h1> 
              <br />
              <a className="btn1" href="#" style={{textDecoration:'none'}} >GitHub</a>
              <a className="btn2" href="#" style={{textDecoration:'none'}}>Hosted Link</a>
            </div>
          </div>
        </div>
    </div>
  );
};

const Project = () => {
  return (
      <div className="color">
      <Container >
        <center><h1 style={{color:'white'}}>Projects</h1></center> <br /><br />

          <div className="app">
            {projects.map((project) => (
              <ProjectBox key={project.id} project={project} />
            ))}
          </div>
      </Container>
      </div>
    
  );
};

export default Project;
