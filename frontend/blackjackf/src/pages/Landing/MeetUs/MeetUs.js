import React from 'react'
import andrew from '../../../images/andrew.jpeg'
import wilson from '../../../images/wilson.jpeg'
import joshua from '../../../images/joshuaFranklin.jpeg'
import './MeetUs.css'
import { Link } from 'react-router-dom'

const MeetUs = () => {
    return (
        <div>
        <div className='title-container'>
            <h1 className='meet-title'>Meet the team</h1>
        </div>
        
        <div className='meet-container'>
            <a className='info-card-wrapper' href='https://www.linkedin.com/in/andrew-d-austin/' target="_blank">
            <div className='info-card' >
                <div className='top-line'>
                    <img className='meet-img' src={andrew} alt='Andrew' />
                    <h2 className='name'>Andrew Austin</h2>
                </div>
                <div className='bot-line'>
                    <h4 className='title'>Full Stack Software Engineer</h4>
                </div>
            </div>
            </a>
            <a className='info-card-wrapper' href='https://www.wilsongauf.com/' target="_blank">
            <div className='info-card'>
                <div className='top-line'>
                    <img className='meet-img' src={wilson} alt='Wilson' />
                    <h2 className='name'>Wilson Gauf</h2>
                </div>
                <div className='bot-line'>
                    <h4 className='title'>Full Stack Software Engineer</h4>
                </div>
            </div>
            </a>
            <a className='info-card-wrapper' href='https://www.linkedin.com/in/joshua-franklin0352/' target="_blank">
            <div className='info-card'>
                <div className='top-line'>
                    <img className='meet-img' src={joshua} alt='Joshua' />
                    
                    <h2 className='name'>Joshua Franklin</h2>
                </div>
                <div className='bot-line'>
                    <h4 className='title'>Full Stack Software Engineer</h4>
                </div>
            </div>
            </a>
        </div>
        </div>
    )
}

export default MeetUs
