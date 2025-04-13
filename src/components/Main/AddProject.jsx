import React, { useRef } from 'react'
import styles from './Main.module.scss'
function AddProject({changePage, updateProjectState}) {
    const projectTitleRef = useRef();
    const projectDescriptionRef = useRef();
    const projectDueDateRef = useRef();

    const handleCancel = (e) => {
        e.preventDefault();
        changePage('noProject')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = Math.ceil((Math.random() * 100) * 99);
        const name = projectTitleRef.current.value ? projectTitleRef.current.value : 'No Name';
        const dueDate = projectDueDateRef.current.value ? projectDueDateRef.current.value : new Date().toLocaleDateString();
        const newProject = {
            id,
            name,
            description: projectDescriptionRef.current.value,
            dueDate,
            tasks: [],
        }

        updateProjectState('add', newProject.id, newProject);
        changePage('project');
    }
    return (
        <div className={`${styles.addProject} ${styles.mainWrapper}`}>
            <form action="submit">
                <div className={styles.btnsWrapper}>
                    <button className={`${styles.mainBtn}`} onClick={handleCancel}>Cancel</button>
                    <button className={`${styles.mainBtn} ${styles.mainPrimaryBtn}`} onClick={handleSubmit}>Save</button>
                </div>
                <fieldset>
                    <label htmlFor="projectTitle">Title</label>
                    <input type="text" name="projectTitle" id='projectTitle' ref={projectTitleRef}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="projectDescription">Description</label>
                    <textarea name="projectDescription" id="projectDescription" ref={projectDescriptionRef}></textarea>
                </fieldset>
                <fieldset>
                    <label htmlFor="projectDueDate">Due Date</label>
                    <input type="date" name="projectDueDate" id="projectDueDate"  ref={projectDueDateRef}/>
                </fieldset>
            </form>
        </div>
    )
}

export default AddProject