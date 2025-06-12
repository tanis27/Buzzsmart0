import React from 'react';
import '../styles/progress.css';


function ProgressBar({ step, totalSteps }) {
    const progressPercentage = (step / totalSteps) * 100;

    return (
        <>
            <div className='progress-outer'>
                <div
                    className='progress-inner'
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
        </>
    );
}

export default ProgressBar;