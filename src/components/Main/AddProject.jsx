import React, { useRef } from 'react'
import styles from './Main.module.scss'
import Input from './Input';
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
                <Input type="text" name="projectTitle" id='projectTitle' ref={projectTitleRef}>
                    <label htmlFor="projectTitle">Title</label>
                </Input>
                <Input name="projectDescription" id="projectDescription" ref={projectDescriptionRef} textarea>
                    <label htmlFor="projectDescription">Description</label>
                </Input>
                <Input type="date" name="projectDueDate" id="projectDueDate"  ref={projectDueDateRef}>
                    <label htmlFor="projectDueDate">Due Date</label>     
                </Input>
            </form>
        </div>
    )
}

export default AddProject