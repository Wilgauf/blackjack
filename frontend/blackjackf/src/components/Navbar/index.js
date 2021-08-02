import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core'
import Login from '../../components/Login/Login'
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
    paper: {
      position: 'absolute',
      width: 300,
      height: 80,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
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
    const [modalStyle] = useState(getModalStyle);   
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

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
            <Button variant="contained" color="secondary" onClick={handleOpen}>Login</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                <div style={modalStyle} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                            <div>
                            <TextField
                            label="Username"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            color="secondary"
                            />
                            <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            size="small"
                            autoComplete="current-password"
                            variant="outlined"
                            />
                            </div>
                            <Button color="secondary" size="small" onClick={null}>Submit</Button>
                        </form>
                </div>
            </Modal>
          </Toolbar>
        </AppBar>
      </div>
      </ThemeProvider>
    );
  }