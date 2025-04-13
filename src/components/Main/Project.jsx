import {useRef} from 'react'
import styles from './Main.module.scss'

function Project({currentProject, updateProjects}) {
    const taskRef = useRef();
    const { id, name, description, dueDate, tasks} = currentProject;

    const handleDeleteProject = () => {
        updateProjects('delete', id)
    }
    const handleAddTask = (e) => {
        e.preventDefault();
        const task = taskRef.current.value
        console.log(task);
    }

    return (
        <div className={`${styles.mainWrapper} ${styles.projectMain}`}>
            <div className={styles.projectMainHeader}>
                <h2 className={`${styles.mainTitle}`}>{name}</h2>
                <button className={styles.mainBtn} onClick={handleDeleteProject}>Delete</button>
            </div>
            <p className={`${styles.mainText} ${styles.projectMainDate}`}>{dueDate}</p>
            <p className={`${styles.projectMainDescription}`}>{description}</p>
            <div className={styles.breakLine}></div>
            <form action="">
                <h4 className={`${styles.mainTitle}`}>Tasks</h4>
                <input ref={taskRef} type="text" className={styles.addTaskInput} />
                <button className={`${styles.mainBtn}`} onClick={handleAddTask}>Add Task</button>
            </form>
            <div className={styles.projectList}>
                <p className={`${styles.mainText} ${styles.noProjectsList}`}>This project does not have any tasks yet.</p>
            </div>
        </div>
    )
}

export default Project