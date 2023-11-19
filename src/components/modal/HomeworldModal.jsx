import React from 'react'
import ReactDOM from 'react-dom';
import { usePlanetData } from 'hooks/usePlanetData';
import ModalLoader from 'components/modal/ModalLoader';
import styles from 'components/modal/HomeworldModal.module.css';

const HomeworldModal = ({ isOpen, onClose, url }) => {
    const [planet, loading] = usePlanetData(url);

    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <>
            <div className={styles["modal-overlay"]} onClick={onClose}>
            </div>
            <div className={styles.modal}>
                <h2>Planet info</h2>
                {loading ? <ModalLoader /> : (
                    <>
                        <div className={styles["modal-item"]}>
                            <span>Name:</span>
                            <p>{planet.name}</p>
                        </div>
                        <div className={styles["modal-item"]}>
                            <span>Diameter:</span>
                            <p>{planet.diameter}</p>
                        </div>
                        <div className={styles["modal-item"]}>
                            <span>Climate:</span>
                            <p>{planet.climate}</p>
                        </div>
                        <div className={styles["modal-item"]}>
                            <span>Population:</span>
                            <p>{planet.population}</p>
                        </div>
                    </>)}
                <button className={styles["close-button"]} onClick={onClose}>Close</button>
            </div></>,
        document.getElementById('modal-root')
    );
};

export default HomeworldModal
