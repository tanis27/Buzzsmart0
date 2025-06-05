import React from 'react';
import checkmarkblack from '../assets/Icons/checkmarkblack.png';
import chart from '../assets/images/chart.png'
import setup from '../assets/images/setup.png'
import notification from '../assets/images/notification.png'

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
                alignSelf: 'center',
                gap: '1rem',
            }}>
                <div style={{ textWrap: 'wrap', fontSize: '2rem', textAlign: 'center', fontWeight: 600 }}><p>Science + Tech =</p>All The Fun <p>With No Hangovers</p></div>
                <div style={{ fontSize: '1.2rem', lineHeight: '2rem', padding: '1rem' }}>
                    <p style={{ display: 'flex', gap: '12px' }} ><img style={{ maxWidth: '16px', maxHeight: '16px', alignSelf: 'center' }} src={checkmarkblack} alt="Blue checkmark" />Water break reminders</p>
                    <p style={{ display: 'flex', gap: '12px' }} ><img style={{ maxWidth: '16px', maxHeight: '16px', alignSelf: 'center' }} src={checkmarkblack} alt="Blue checkmark" />Science backed data</p>
                    <p style={{ display: 'flex', gap: '12px' }} ><img style={{ maxWidth: '16px', maxHeight: '16px', alignSelf: 'center' }} src={checkmarkblack} alt="Blue checkmark" />Time to leave reminders</p>
                    <p style={{ display: 'flex', gap: '12px' }} ><img style={{ maxWidth: '16px', maxHeight: '16px', alignSelf: 'center' }} src={checkmarkblack} alt="Blue checkmark" />Location based notifications</p></div>
            </div>
            <div className='slider-page' style={{
                minWidth: '100%',
                scrollSnapAlign: 'start',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: "1rem",
            }}>
                <div style={{ textWrap: 'wrap', fontSize: '2rem', textAlign: 'center', fontWeight: 600 }}>AI Powered<br />& Science Backed</div>
                <img src={chart} alt="Chart image" />
            </div>
            <div className='slider-page' style={{
                minWidth: '100%',
                scrollSnapAlign: 'start',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: "1rem",
            }}>
                <div style={{ textWrap: 'wrap', fontSize: '2rem', textAlign: 'center', fontWeight: 600 }}>Set Up One Time <br />In Less Than<br /> 5 Minutes!</div>
                <img src={setup }alt="Phone setting image" />
            </div>
            <div className='slider-page' style={{
                minWidth: '100%',
                scrollSnapAlign: 'start',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: "1rem",
            }}>
                <div style={{ textWrap: 'wrap', fontSize: '2rem', textAlign: 'center', fontWeight: 600 }}>Intuitive <br />Notifications:<br /> Drink Mindfully</div>
                <img src={notification} alt="Notification bell photo" />
            </div>
        </div>
    );
}

export default Slider;
