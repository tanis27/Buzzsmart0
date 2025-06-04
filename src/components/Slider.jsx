import React from 'react';

function Slider() {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '600px',
                overflowX: 'auto',
                display: 'flex',
                gap: '1rem',
                scrollSnapType: 'x mandatory',  // <-- nice snap effect
                WebkitOverflowScrolling: 'touch', // smooth scrolling on iOS
                paddingBottom: '1rem',  // extra space for scrollbar
            }}
        >
            <div className='slider-page' style={{
                    minWidth: '100%',
                    scrollSnapAlign: 'start',
                    flexShrink: 0,
                    display: 'flex',}}>
     Slide 1
            </div>
                     <div className='slider-page' style={{
                    minWidth: '100%',
                    scrollSnapAlign: 'start',
                    flexShrink: 0,
                    display: 'flex',}}>
     Slide 2
            </div>
                   <div className='slider-page' style={{
                    minWidth: '100%',
                    scrollSnapAlign: 'start',
                    flexShrink: 0,
                    display: 'flex',}}>
     Slide 3
            </div>
        </div>
    );
}

export default Slider;
