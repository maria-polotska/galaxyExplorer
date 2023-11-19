import React from 'react'
import styles from 'components/modal/ModalLoader.module.css';

const ModalLoader = () => {
    return (
        <div className={styles.dots}>
            <p>Loading</p>
            <span className={styles.one}>.</span><span className={styles.two}>.</span><span className={styles.three}>.</span>
        </div>
    )
}

export default ModalLoader
