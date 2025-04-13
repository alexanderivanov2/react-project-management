import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import styles from './Management.module.scss'

function Management() {
  const [currentPage, setCurrentPage] = useState('noProject');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  
  console.table(projects);
  console.log(selectedProject);

  const sideBarList = projects.map(({id, name}) => ({name, id}))

  const handleSetSelectedProject = (id) => {
    setSelectedProject(id);
  }

  const handleChangePage = (pageName) => {
    setCurrentPage(pageName);
  }

  const updateProjects = (action, payload = {}, id) => {

    setProjects(prevProjects => {
      if (action === 'add' && payload.name) {
        return [...prevProjects, payload]
      }
    })

    if (action === 'add') {
      setSelectedProject(payload.id);
    } else if(action === 'delete') {
      setSelectedProject()
    }
  }

  if (projects.length < 1) {
    const test = {
      id: 1,
      name: 'ProjectName',
      description: 'Project Description',
      tasks: []
    }

    updateProjects('add', test);
  }

  return (
    <div className={styles.managementContainer}>
      <Sidebar changePage={handleChangePage} changeProject={handleSetSelectedProject} sideBarList={sideBarList} selectedId={selectedProject}/>
      <Main changePage={handleChangePage} page={currentPage} updateProjects={updateProjects} />
    </div>
  )
}

export default Management