import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import logo from "./BlackjackLogo.png"
import {login, signupUser} from '../../api'
import './navbar.css'

// import logo
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:'initial',
      
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
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)
    const [userID, setUserID] = useState(null)
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };    const handleLogin = async ()=>{
      let userObject ={
        username: username,
        password: password
      }
      let response = await login(userObject)
      console.log(response)
      if (response.token){
        setLoggedIn(true)
        console.log('logging in')
        console.log(response.token)
        localStorage.setItem("auth-user", `${response.token}`)
        console.log(response.user['id'])
        setUserID(response.user['id'])

      }
      setOpen(false)
    };

    const handleLogout = () => {
      localStorage.setItem("auth-user", null)
      setLoggedIn(false)
    }

    const handleSignup = async ()=>{
      let userObject = {
        username: username,
        password: password
      }
      let response = await signupUser(userObject)
      if (response.token){
        handleLogin()
    }
  }

  useEffect(()=>{
    localStorage.setItem("user-id", `${userID}`)
  },[userID])

    return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to='/'><img src={logo} alt="21" style={logoStyle}/></Link>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            <Button component={Link} to='/about' color="inherit">About</Button>
            <Button component={Link} to='/howtoplay' color="inherit">How To Play</Button>
            <Button component={Link} to='/contact' color="inherit">Contact</Button>
            {loggedIn ? <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button> : <Button variant="contained" color="secondary" onClick={handleOpen}>Login/Signup</Button>}
            
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                <div style={modalStyle} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                            <div className='modal-inputs'>
                            <div className="top-row">
                              <TextField
                              label="Username"
                              id="outlined-size-small"
                              variant="outlined"
                              size="small"
                              value={username}
                              onInput={e=>setUsername(e.target.value)}
                              color="secondary"
                              />
                              <Button className='modal-buttons' variant='contained' color="secondary"  onClick={handleLogin} size="small" >Sign-in</Button>
                            </div>
                            <div className='bottom-row'>
                              <TextField
                              id="outlined-password-input"
                              label="Password"
                              type="password"
                              size="small"
                              value={password}
                              onInput={e=>setPassword(e.target.value)}
                              autoComplete="current-password"
                              variant="outlined"
                              />
                              <Button className='modal-buttons' variant='contained' color="secondary"  onClick={handleSignup} size="small" >Signup</Button>
                            </div>
                            </div>
                            
                            
                        </form>
                </div>
            </Modal>
          </Toolbar>
        </AppBar>
      </div>
      </ThemeProvider>
    );
  }