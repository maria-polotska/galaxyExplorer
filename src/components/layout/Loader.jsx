import React from 'react';
import { ReactComponent as Rocket } from 'assets/rocket.svg';
import styles from 'components/layout/Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loaderContainer}>
                <Rocket className={styles.img} />
                <div className={styles.gas1}></div>
                <div className={styles.gas2}></div>
                <div className={styles.gas3}></div>
            </div>
            <div className={styles.dots}>
                <p>Preparing for an Interstellar Journey</p>
                <span className={styles.one}>.</span><span className={styles.two}>.</span><span className={styles.three}>.</span>
            </div>
        </div>
    );
};

export default Loader;