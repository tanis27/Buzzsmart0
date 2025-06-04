import React from 'react';
import checkmark from '../assets/Icons/checkmark.png';

function Slider() {

    return (
        
        <div
            style={{
                width: '100%',
                maxWidth: '600px',
                overflowX: 'auto',
                cursor: 'pointer',
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
                display: 'flex',
                flexDirection: 'column',
                alignSelf:'center',
                gap:'1rem',
            }}>
                <span style={{ textWrap: 'wrap', fontSize: '2rem', textAlign: 'center', fontWeight: 600 }}><p>Science + Tech =</p>All The Fun <p>With No Hangovers</p></span>
                <span style={{ fontSize: '1.2rem', lineHeight: '2rem', padding: '1rem' }}>
                    <p style={{display:'flex' ,gap:'12px'}} ><img style={{maxWidth:'16px', maxHeight:'16px', alignSelf:'center' }}src={checkmark} alt="Blue checkmark" />Water break reminders</p>
                    <p style={{display:'flex' ,gap:'12px'}} ><img style={{maxWidth:'16px', maxHeight:'16px', alignSelf:'center' }}src={checkmark} alt="Blue checkmark" />Science backed data</p>
                    <p style={{display:'flex' ,gap:'12px'}} ><img style={{maxWidth:'16px', maxHeight:'16px', alignSelf:'center' }}src={checkmark} alt="Blue checkmark" />Time to leave reminders</p>
                    <p style={{display:'flex' ,gap:'12px'}} ><img style={{maxWidth:'16px', maxHeight:'16px', alignSelf:'center' }}src={checkmark} alt="Blue checkmark" />Location based notifications</p></span>
            </div>
            <div className='slider-page' style={{
                minWidth: '100%',
                scrollSnapAlign: 'start',
                flexShrink: 0,
                display: 'flex',
            }}>
                Slide 2
            </div>
            <div className='slider-page' style={{
                minWidth: '100%',
                scrollSnapAlign: 'start',
                flexShrink: 0,
                display: 'flex',
            }}>
                Slide 3
            </div>
            
        </div>
    );
}

export default Slider;
