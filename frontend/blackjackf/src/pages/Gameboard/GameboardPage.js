import React, {useEffect, useState } from 'react';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import cardBack from '../../images/Oak-Leaf-Back.jpg'
import './Gameboard.css'
import { Button } from '@material-ui/core'
import chips from '../../images/pexels-nancho-1553831.jpg'
import { startGame } from '../../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    height: 700,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const GameboardPage = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [strBet, setStrBet] = useState(0);
  const [bet, setBet] = useState(null);
  const [dealerHand, setDealerHand] = useState('');
  const [dealerImg, setDealerImg] = useState([cardBack]);
  const [playerHand, setPlayerHand] = useState('');
  const [playerImg, setPlayerImg] = useState([]);
  const [flag, setFlag] = useState(false)
  let tempArr = [];

  const handleClose = () => {
    setOpen(false);
  }; 
  const handleGameStart = async ()=>{
    setOpen(false)
    let user_id = localStorage.getItem('user-id')
    let token = localStorage.getItem('auth-user')
    let res = await startGame(bet, user_id, token)
    console.log(res)
    setDealerHand(res['dealer_hand'])
    setPlayerHand(res['player_hand'])
  }

  useEffect(()=>{
    console.log('setting dealerIMG')
    // console.log(dealerImg)
    tempArr = dealerImg
    for (let i = 1; i<dealerHand.length; i++){
      tempArr.push(`https://deckofcardsapi.com/static/img/${dealerHand[i]}.png`)
    }
    setDealerImg(tempArr)
  },[dealerHand])

  useEffect(()=>{
    console.log('setting player');
    console.log(playerImg);
    tempArr = playerImg;
    for (let i = 0; i < playerHand.length; i++){
      tempArr.push(`https://deckofcardsapi.com/static/img/${playerHand[i]}.png`);
    }
    setPlayerImg(tempArr)
    console.log('p1 ', playerImg)
    setFlag(true)
  },[playerHand])

  useEffect(()=>{ 
    setBet(parseInt(strBet))
  },[strBet])

  useEffect(()=>{ 
    setOpen(true)
  },[])

  const hit = ()=>{
    console.log(localStorage.getItem('auth-user'))
    console.log(localStorage.getItem('user-id'))
  }

  const stay = () =>{
    console.log(dealerImg)
    console.log(dealerHand)
  }

  const renderCards = (cardsArr)=>{
    return cardsArr.map((card, id)=>{
      console.log('card ', card)
      return <img key={id} className='card-img' src={`https://deckofcardsapi.com/static/img/${card}.png`} alt='not 21'/>
    })
  }

  const renderDealerHand = (cardsArr)=>{
    return cardsArr.map((card, id)=>{
      if (id == 0){
        return <img key={id} className='card-img' src={cardBack} alt='not 21'/>
      }
      return <img key={id} className='card-img' src={`https://deckofcardsapi.com/static/img/${card}.png`} alt='not 21'/>
    })
  }
  
  return (
    <div className="GBMain">
      <div className='Game manager'>  
      <Modal open={open} onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div style={modalStyle} className={classes.paper} >
          <div className='modal-text'>
            <h1 className='modal-title'>Welcome to the table!</h1>
            <h3  className='modal-subtitle'>To get started just enter   how much you want to bet and get started. Don't worry you   can change this amount inbetween hands. Have fun!</h3>
          </div>
          
          <div className='modal-input'>
            <TextField id="standard-number" label="Bet" type="number"
            onInput={e=>setStrBet(e.target.value)} InputLabelProps={{
            shrink: true,}} defaultValue={10} />
            <Button variant='contained' color="secondary"  onClick={handleGameStart} >Deal the cards</Button>
          </div>
          <div className='img-container'>
            <img className='modal-img' src={chips} alt='21'/>
          </div>
        </div>
      </Modal>
      {
        dealerImg[1] ?
        <div>
          <div className='dealer-section'>
            <h2>Dealer Cards</h2>
            <div className='cards'>
              {renderDealerHand(dealerHand)}              
            </div>
          </div>
          <h2>Your Cards</h2>
          
          <div className='player-section'>
          
            <div className='cards'>
              {renderCards(playerHand)}
            </div>
            <div className='player-buttons'>
            <Button className='hit-bttn'variant="contained" color="secondary" onClick={hit}>Hit</Button>
            <Button className='stay-bttn'variant="contained" color="secondary" onClick={stay}>Stay</Button>
              
            </div>
          </div>
        </div> : ''
      }
      
        {/* <Button className='play-bttn'variant="contained" color="secondary">Play now</Button> */}
      </div>
    </div>
  );
};

export default GameboardPage;