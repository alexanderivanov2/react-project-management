import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import styles from './Management.module.scss'

function Management() {
  return (
    <div class={styles.managementContainer }>
        <Sidebar />
        <Main />
    </div>
  )
}

export default Management