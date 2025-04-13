import React, { useState } from 'react'
import styles from './Main.module.scss'
import NoProjectSelected from './NoProjectSelected'
import AddProject from './AddProject'
import Project from './Project'

function Main({changePage, updateProjects, page, currentProject}) {
  return (
    <div className={styles.mainContainer}>
      {page === 'noProject' || (page === 'project' && !currentProject)
        ? 
        <NoProjectSelected changePage={changePage}/>
        : 
        (page === 'project' 
          ?
            <Project currentProject={currentProject} updateProjects={updateProjects}/>
          : <AddProject changePage={changePage} updateProjects={updateProjects}/>
        )
      }
    </div>
  )
}

export default Main