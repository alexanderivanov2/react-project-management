import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import styles from './Management.module.scss'

function Management() {
    const [currentPage, setCurrentPage] = useState('noProject');
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState();

    const sideBarList = projects.map(({ id, name }) => ({ name, id }))
    const currentProject = projects.find(({ id }) => selectedProject === id)

    const handleSetSelectedProject = (id) => {
        setSelectedProject(id);

        if (id) {
            setCurrentPage('project');
        } else {
            setCurrentPage('noProject');
        }
    }

    const handleChangePage = (pageName) => {
        setCurrentPage(pageName);
        if (pageName !== 'project') {
            setSelectedProject();
        }
    }

    const updateProjects = (action, id, payload = {}) => {
        setProjects(prevProjects => {
            if (action === 'add' && payload.name) {
                return [...prevProjects, payload]
            } else if (action === 'delete' && id) {
                return [...prevProjects.filter(({ id: prevProjectId }) => id !== prevProjectId)]
            } else if (action === 'addTask' && id) {
                return prevProjects.map((project) => {
                    if (id === project.id) {
                        const tasks = [...project.tasks, payload]
                        return { ...project, tasks }
                    }

                    return project
                })
            } else if (action === 'removeTask' && id) {
                return prevProjects.map((project) => {
                    if (id === project.id) {
                        const tasks = [...project.tasks.filter((_, index) => index !== payload)]
                        return { ...project, tasks }
                    }

                    return project
                })
            }
        })
    }

    const handleProjectManagement = (action, id, payload = {}) => {
        updateProjects(action, id, payload);

        if (action === 'add') {
            handleSetSelectedProject(payload.id);
        } else if (action === 'delete') {
            handleSetSelectedProject()
        }
    }

    return (
        <div className={styles.managementContainer}>
            <Sidebar 
                changePage={handleChangePage}
                changeProject={handleSetSelectedProject}
                sideBarList={sideBarList} 
                selectedId={selectedProject} />
            <Main
                changePage={handleChangePage}
                page={currentPage}
                updateProjects={handleProjectManagement}
                currentProject={currentProject}
            />
        </div>
    )
}

export default Management