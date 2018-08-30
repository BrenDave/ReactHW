import projects from '../data/projects.json';
import React from 'react';
import Project from './Project';

class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <Project
        title= {projects.allProjects[0].title}
        imgName= {projects.allProjects[0].imgName}
        description= {projects.allProjects[0].description}
        />
        <Project
        title={projects.allProjects[1].title}
        imgName={projects.allProjects[1].imgName}
        description={projects.allProjects[1].description}
        />
        <Project
        title={projects.allProjects[2].title}
        imgName={projects.allProjects[2].imgName}
        description={projects.allProjects[2].description}
        />
        <Project
        title={projects.allProjects[3].title}
        imgName={projects.allProjects[3].imgName}
        description={projects.allProjects[3].description}
        />
      </div>
    )
  }
}

export default Projects;
