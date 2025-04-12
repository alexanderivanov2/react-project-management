import React from 'react'
import styles from './Sidebar.module.scss'

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
        <div className={styles.sidebarContent}>
            <h2 className={styles.sidebarTitle}>Your Projects</h2>
            <button className={styles.sidebarAddBtn}>+ Add Project</button>
        </div>
    </div>
  )
}

export default Sidebar