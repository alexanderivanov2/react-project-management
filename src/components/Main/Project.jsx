import React from 'react'
import styles from './Main.module.scss'

function Project() {
    return (
        <div className={`${styles.mainWrapper} ${styles.projectMain}`}>
            <div className={styles.projectMainHeader}>
                <h2 className={`${styles.mainTitle}`}>Project Name</h2>
                <button className={styles.mainBtn}>Delete</button>
            </div>
            <p className={`${styles.mainText} ${styles.projectMainDate}`}>Day Month Year</p>
            <p className={`${styles.projectMainDescription}`}>DESCRITPION</p>
            <div className={styles.breakLine}></div>
            <form action="">
                <h4 className={`${styles.mainTitle}`}>Tasks</h4>
                <input type="text" className={styles.addTaskInput} />
                <button className={`${styles.mainBtn}`}>Add Task</button>
            </form>
            <div className={styles.projectList}>
                <p className={`${styles.mainText} ${styles.noProjectsList}`}>This project does not have any tasks yet.</p>
            </div>
        </div>
    )
}

export default Project