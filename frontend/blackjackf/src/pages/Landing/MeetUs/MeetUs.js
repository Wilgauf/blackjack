import React from 'react'
import andrew from '../../../images/andrew.jpeg'
import wilson from '../../../images/wilson.jpeg'
import joshua from '../../../images/joshuaFranklin.jpeg'
import './MeetUs.css'

const MeetUs = () => {
    return (
        <div>
        <div className='title-container'>
            <h1 className='meet-title'>Meet the team</h1>
        </div>
        
        <div className='meet-container'>
            <div className='info-card'>
                <div className='top-line'>
                    <img className='meet-img' src={andrew} alt='Andrew' />
                    <h2>Andrew Austin</h2>
                </div>
                <div className='bot-line'>
                    <h4 className='title'>Full Stack Software Engineer</h4>
                </div>
            </div>
            <div className='info-card'>
                <div className='top-line'>
                    <img className='meet-img' src={wilson} alt='Wilson' />
                    <h2>Wilson Gauf</h2>
                </div>
                <div className='bot-line'>
                    <h4 className='title'>Full Stack Software Engineer</h4>
                </div>
            </div>
            <div className='info-card'>
                <div className='top-line'>
                    <img className='meet-img' src={joshua} alt='Joshua' />
                    <h2>Joshua Franklin</h2>
                </div>
                <div className='bot-line'>
                    <h4 className='title'>Full Stack Software Engineer</h4>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MeetUs
