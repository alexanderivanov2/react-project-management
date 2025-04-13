import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import styles from './Management.module.scss'

function Management() {
  const [currentPage, setCurrentPage] = useState('noProject');
  const [projects, setProjects] = useState([]);

  const test = {
    name: 'ProjectName',
    description: 'Project Description',
    tasks: []
  }

  const handleChangePage = (pageName) => {
    setCurrentPage(pageName);
  }

  const updateProjects = (action, payload={}, projectName='') => {

      setProjects(prevProjects => {
        if(action === 'add' && payload.name) {
          return [...prevProjects, payload]
        }
      })
  }
  if (projects.length < 1) {
    updateProjects('add', test);
  } 
  return (
    <div className={styles.managementContainer}>
      <Sidebar changePage={handleChangePage} />
      <Main changePage={handleChangePage} page={currentPage} updateProjects={updateProjects} />
    </div>
  )
}

export default Management