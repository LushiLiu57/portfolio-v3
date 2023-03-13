import React, {useState} from "react";
import { Card, Button, Image } from "react-bootstrap";
import projectlist from "../helpers/projectlist";
import '../styles/Projects.css'

function Projects() {

    const [currentProject, setCurrentProject] = useState(0);

    const handlePrevClick = () => {
    setCurrentProject((currentProject - 1 + projectlist.length) % projectlist.length);
    };

    const handleNextClick = () => {
        setCurrentProject((currentProject + 1) % projectlist.length);
    };

    const project = projectlist[currentProject]

  return (
    <div className='projects'>
      <Card className='card-container'>
        <div className="card-image">
            <Card.Img variant="top" src={project.image} />
            <div className="card-buttons">
                <Button href={project.github} target='_blank' className="mb-2" variant="primary">GitHub</Button>
                <Button href={project.link} target='_blank' variant="danger">Website</Button>
            </div>
        </div>
        <Card.Body className='card-body'>
          <Card.Title style={{color:'mediumseagreen'}}><b>{project.name}</b></Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>Tools used: {project.skills}</Card.Text>
        </Card.Body>
      </Card>
      <div className='controls'>
        <h4>{currentProject + 1} / {projectlist.length}</h4>
        <Button variant='success' onClick={handlePrevClick}>Previous</Button>
        <Button variant='success' onClick={handleNextClick}>Next</Button>
      </div>
    </div>
  );
}

export default Projects;