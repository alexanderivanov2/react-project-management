import React from 'react'
import styles from './Main.module.scss'
function AddProject({changePage}) {

    const handleCancel = (e) => {
        console.log(e);
        e.preventDefault();
        changePage('noProject')
    }
    return (
        <div className={`${styles.addProject} ${styles.mainWrapper}`}>
            <form action="submit">
                <div className={styles.btnsWrapper}>
                    <button className={`${styles.mainBtn}`} onClick={handleCancel}>Cancel</button>
                    <button className={`${styles.mainBtn} ${styles.mainPrimaryBtn}`}>Save</button>
                </div>
                <fieldset>
                    <label htmlFor="projectTitle">Title</label>
                    <input type="text" name="projectTitle" id='projectTitle'/>
                </fieldset>
                <fieldset>
                    <label htmlFor="projectDescription">Description</label>
                    <textarea name="projectDescription" id="projectDescription"></textarea>
                </fieldset>
                <fieldset>
                    <label htmlFor="projectDueDate">Due Date</label>
                    <input type="date" name="projectDueDate" id="projectDueDate" />
                </fieldset>
            </form>
        </div>
    )
}

export default AddProject