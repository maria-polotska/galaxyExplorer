import React from 'react'
import styles from 'components/table/UsersTable.module.css';
const UsersTableRow = ({ user, openModal }) => {

    return (
        <div className={styles.row}>
            <div className={styles.col}>{user.name}</div>
            <div className={styles.col}>{user.height}</div>
            <div className={styles.col}>{user.mass}</div>
            <div className={styles.col}>{new Date(user.created).toLocaleString()}</div>
            <div className={styles.col}>{new Date(user.edited).toLocaleString()}</div>
            <div className={styles.col}><button className={styles.homeworldBtn} onClick={() => openModal(user.homeworld)}>{user.homeworld}</button></div>
        </div>
    )
}

export default UsersTableRow
