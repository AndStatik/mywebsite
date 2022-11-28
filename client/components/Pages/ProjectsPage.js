import React from 'react'
import {connect} from 'react-redux'
import { MyProjects, ProjectsContainer, SingleProject, ThreeProjects } from './projectsStyles'

/**
 * COMPONENT
 */
export const ProjectsPage = props => {

  return (
    <ProjectsContainer>
      <MyProjects>My Projects</MyProjects>
      <ThreeProjects>
        <SingleProject id="fProj" />
        <SingleProject id="sProj" />
        <SingleProject id="tProj" />
      </ThreeProjects>
    </ProjectsContainer>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
  }
}

export default connect(mapState)(ProjectsPage);
