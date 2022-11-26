import React from 'react'
import {connect} from 'react-redux'
import { ProjectsContainer } from './projectsStyles'

/**
 * COMPONENT
 */
export const ProjectsPage = props => {

  return (
    <ProjectsContainer>
      Hi, mom!
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
