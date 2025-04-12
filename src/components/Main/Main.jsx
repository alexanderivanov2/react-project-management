import React from 'react'
import styles from './Main.module.scss'
import NoProjectSelected from './NoProjectSelected'
import AddProject from './AddProject'

function Main() {
  return (
    <div className={styles.mainContainer}>
        {/* <NoProjectSelected /> */}
        <AddProject />
    </div>
  )
}

export default Main