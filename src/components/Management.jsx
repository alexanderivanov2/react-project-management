import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import styles from './Management.module.scss'

function Management() {
  const [currentPage, setCurrentPage] = useState('noProject');

  const handleChangePage = (pageName) => {
    setCurrentPage(pageName);
  }


  return (
    <div className={styles.managementContainer}>
      <Sidebar changePage={handleChangePage} />
      <Main changePage={handleChangePage} page={currentPage} />
    </div>
  )
}

export default Management