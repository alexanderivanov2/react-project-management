import React from 'react'
import styles from './Main.module.scss'
import ListImage from '../../assets/no-projects.png'

function NoProjectSelected({changePage}) {
  return (
    <div className={`${styles.noProject} ${styles.mainWrapper}`}>
      <img src={ListImage} alt="List image for no projects"/>
      <h2 className={styles.mainTitle}>No Project selected</h2>
      <p className={styles.mainText}>Select a project or get started with a new one</p>
      <button className={`${styles.mainPrimaryBtn} ${styles.mainBtn}`}
        onClick={() => changePage('addProject')}
      >Create new project</button>
    </div>
  )
}

export default NoProjectSelected