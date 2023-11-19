import React from 'react';
import { ReactComponent as Rocket } from '../assets/rocket.svg';

const Loader = () => {
    return (
        <div className="loading">
            <div className="loading-rocket-container">
                <Rocket className="loading-img" />
                <div className="rocket-gas1"></div>
                <div className="rocket-gas2"></div>
                <div className="rocket-gas3"></div>
            </div>
            <div className="loading-dots">
                <p>Preparing for an Interstellar Journey</p>
                <span className="dot one">.</span><span className="dot two">.</span><span className="dot three">.</span>
            </div>
        </div>
    );
};

export default Loader;