import React from 'react'
import styles from './Sidebar.module.scss'

function Sidebar({changePage}) {
  return (
    <div className={styles.sidebarContainer}>
        <div className={styles.sidebarContent}>
            <h2 className={styles.sidebarTitle}>Your Projects</h2>
            <button className={styles.sidebarAddBtn} onClick={() => changePage('addProject')}>+ Add Project</button>
        </div>
    </div>
  )
}

export default Sidebar