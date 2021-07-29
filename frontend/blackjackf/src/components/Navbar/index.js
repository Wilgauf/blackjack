import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import logo from "./BlackjackLogo.png"

// import logo
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const theme = createTheme({
    palette: {
      primary: {
        main: '#171A29',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  
  export default function Navbar() {
    const classes = useStyles();
    const logoStyle = {
        height:"64px",
    }
    return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} alt="21" style={logoStyle}/>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">How To Play</Button>
            <Button color="inherit">Contact</Button>
            <Button variant="contained" color="secondary">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      </ThemeProvider>
    );
  }