import React from 'react'
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

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffff',
      },
      secondary: {
        main: '#ffff',
      },
    },
});

  
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                        <ul className="footer-list">
                            <li><a href="/">How to Play</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Footer
