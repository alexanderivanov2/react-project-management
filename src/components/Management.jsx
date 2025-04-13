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

    const updateProjectState = (action, id, payload = {}) => {
        setProjects(prevProjects => {
            switch (action) {
                case 'add':
                    return [...prevProjects, payload];
                case 'delete':
                    return [...prevProjects.filter(({ id: prevProjectId }) => id !== prevProjectId)];
                case 'addTask':
                    return prevProjects.map(p => p.id === id ? { ...p, tasks: [...p.tasks, payload] } : p);
                case 'removeTask':
                    return prevProjects.map(p => p.id === id ? { ...p, tasks: p.tasks.filter((_, i) => i !== payload) } : p);
                default:
                    return prevProjects;
            }
        })
    }

    const handleProjectAction = (action, id, payload = {}) => {
        updateProjectState(action, id, payload);

        if (action === 'add') {
            handleSetSelectedProject(payload.id);
        } else if (action === 'delete' && selectedProject === id) {
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
                updateProjectState={handleProjectAction}
                currentProject={currentProject}
            />
        </div>
    )
}

export default Management