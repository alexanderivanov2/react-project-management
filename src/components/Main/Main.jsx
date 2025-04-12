import React from 'react'
import styles from './Main.module.scss'
import NoProjectSelected from './NoProjectSelected'
import AddProject from './AddProject'
import Project from './Project'

function Main() {
  return (
    <div className={styles.mainContainer}>
        {/* <NoProjectSelected /> */}
        {/* <AddProject /> */}
        <Project />
    </div>
  )
}

export default Main