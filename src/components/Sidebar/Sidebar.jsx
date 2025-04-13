import React from 'react'
import styles from './Sidebar.module.scss'

function Sidebar({ changePage, changeProject, sideBarList, selectedId }) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>
        <h2 className={styles.sidebarTitle}>Your Projects</h2>
        <button className={styles.sidebarAddBtn} onClick={() => changePage('addProject')}>+ Add Project</button>
        <div className={styles.sidebarList}>
          {sideBarList.map(({ name, id }) => (
            <button 
              key={id} 
              className={`${styles.sidebarBtn} ${selectedId === id ? styles.active : ''}`}
              onClick={() => changeProject(id)}
              >
                {name}
              </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar