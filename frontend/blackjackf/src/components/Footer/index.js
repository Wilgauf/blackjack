import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import createPalette from '@material-ui/core/styles/createPalette';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./footer.css"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



function Footer() {
    const classes = useStyles();
    return (

        <div className="main-footer">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>We build other things too!</h4>
                        
                    </div>
                    <div className="col">
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                            <TextField
                            label="Your Email"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            color="secondary"
                            />
                            </div>
                            <Button color="secondary" size="small">Submit</Button>
                        </form>
                    </div>
                    <div className="col">
                    
                    </div>
                    <div className="col">
                        <ul className="footer-list">
                            <li><Link to='/'>Home </Link></li>
                            <li><Link to='/about'>About </Link></li>
                            {/* <li><a href="/about">About</a></li> */}
                        </ul>
                        <ul className="footer-list">
                            <li><Link to='/howtoplay'>How to play </Link></li>
                            <li><Link to='/contact'>Contact </Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Footer
