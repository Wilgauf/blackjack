import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import React from 'react'

import './Splash.css'

export const SplashPage = () => {

    return (
        <div className='page-container'>
            <div className='splash-container'>
                <h1 className='splash-title'>Black Jack</h1>
                <h2>Is today your lucky day?</h2>
                <Button className='play-bttn'variant="contained" color="secondary" component={Link} to='/gameboard'>Play now</Button>

            </div>
            
        </div>
    )
}
