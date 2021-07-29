import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import createPalette from '@material-ui/core/styles/createPalette';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

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
                        <h4>We build other things too</h4>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="outlined-basic"
                            className="input" 
                            label="Your Email" 
                            variant="filled"
                            size="small" 
                            color="secondary"
                            />
                        </form>
                    </div>
                    <div className="col">
                        <a href="/">Home</a>
                        <a href="/">About</a>
                    </div>
                    <div className="col">
                        <ul className="footer-list">
                        <li><a href="/">How to Play</a></li>
                        <a href="/">Contact</a>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Footer
