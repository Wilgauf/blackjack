import React, {useEffect, useState } from 'react';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import cardBack from '../../images/Oak-Leaf-Back.jpg'
import './Gameboard.css'
import { Button } from '@material-ui/core'
import chips from '../../images/pexels-nancho-1553831.jpg'
import { startGame, playerHit, playerStay, playerBet } from '../../api';

const modalW = window.innerWidth * .5;
const modalH = window.innerHeight * .75;

//Material UI styling
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: modalW,
    height: modalH,
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
  const [gameState, setGameState] = useState(null)
  const [payout, setPayout] = useState(null)
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [bet, setBet] = useState(0);
  const [dealerHand, setDealerHand] = useState('');
  const [dealerImg, setDealerImg] = useState([cardBack]);
  const [playerHand, setPlayerHand] = useState('');
  const [playerImg, setPlayerImg] = useState([]);
  // const [dealerVal, setDealerVal] = useState(0);
  // const [playerVal, setPlayerVal] = useState(0);
  const [playerChips, setPlayerChips] = useState(1000);
  const [playerBust, setPlayerBust] = useState(false);
  const [newHand, setNewHand] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStatus, setGameStatus] = useState({'win':false, 'loss':false, 'tie':false});
  let tempArr = [];
  const newStyle= {'height':'60px'};

  const handleClose = () => {
    setOpen(false);
  }; 

  //Handles the game on start, only runs if user puts in a valid bet amount
  const handleGameStart = async ()=>{
    if(!bet || bet>500 || bet < 0){
      return null
    }
    
    setOpen(false)
    let user_id = localStorage.getItem('user-id')
    let token = localStorage.getItem('auth-user')
    let res = await startGame(bet, user_id, token)
    console.log(res)
    setGameState(res)
    setDealerHand(res.dealer_hand)
    setPlayerHand(res.player_hand)
    // setDealerVal(res.d_hand_val)
    // setPlayerVal(res.p_hand_val)
    setPlayerChips(res.player_chips)
    setPlayerBust(res.player_bust)
  }
  //setting up the array of images once the front end has each player's cards
  useEffect(()=>{
    tempArr = dealerImg
    for (let i = 1; i<dealerHand.length; i++){
      tempArr.push(`https://deckofcardsapi.com/static/img/${dealerHand[i]}.png`)
    }
    setDealerImg(tempArr)
  },[dealerHand])

  useEffect(()=>{
    tempArr = playerImg;
    for (let i = 0; i < playerHand.length; i++){
      tempArr.push(`https://deckofcardsapi.com/static/img/${playerHand[i]}.png`);
    }
    setPlayerImg(tempArr)
  },[playerHand])

  //Opens the modal on mount
  useEffect(()=>{ 
    setOpen(true)
  },[])

  //handles the hit logic, 
  const hit = async ()=>{
    let token = localStorage.getItem('auth-user')
    if(playerBust == false){
      let res = await playerHit(gameState.id, token)
      console.log('hit res: ', res)
      if(res.player_bust){
        stay()
      }
      setGameState(res)
      setPlayerHand(res.player_hand)
      // setPlayerVal(res.p_hand_val)
      setPlayerChips(res.player_chips)
      setPayout(res.payout)

    }else {
      console.error('Cannot hit. your are over 21!')
    }
    
  }
  //Opens the modal for edge case where 
  const openModal = ()=>{
    setOpen(true)
  }
  //handles stay logic, sets bet to zero so that it user can't keep playing without actually setting their bet
  const stay = async() =>{
    setBet(0)
    let token = localStorage.getItem('auth-user')
    let res = await playerStay(gameState.id, token)
    setGameOver(true)
    setGameState(res)
    setDealerHand(res.dealer_hand)
    // setDealerVal(res.d_hand_val)
    setNewHand(true)
    setPlayerHand(res.player_hand)
    // setPlayerVal(res.p_hand_val)
    setPlayerChips(res.player_chips)
    setPayout(res.payout)

    if(res.hand_winner ==='P'){
      setGameStatus({'win':true})
    }
    else if(res.hand_winner ==='D'){
      setGameStatus({'loss':true})
    }
    else{
      setGameStatus({'tie':true})
    }

  }

  //New game start-up
  const newBet = async () => {
    if(bet > 500 || !bet || bet < 0){
      return null
    }
    
    let token = localStorage.getItem('auth-user')
    if(bet <= gameState.player_chips && bet > 0){
      setGameOver(false)
      setGameStatus({'win':false, 'loss':false, 'tie':false})
      let res = await playerBet(gameState.id, bet, token)
      setGameState(res)
      setDealerHand(res.dealer_hand)
      // setDealerVal(res.d_hand_val)
      setPlayerHand(res.player_hand)
      // setPlayerVal(res.p_hand_val)
      setPlayerChips(res.player_chips)
      setPayout(res.payout)
      setNewHand(false)
    }else {
      console.error('Cannot bet more chips than you have!')
    }
  }
  //renders all cards in the given array 
  const renderCards = (cardsArr)=>{
    return cardsArr.map((card, id)=>{
      return <img key={id} className='card-img' src={`https://deckofcardsapi.com/static/img/${card}.png`} alt='not 21'/>
    })
  }
  //Skips the first card so that it is 'hidden' till the game is over
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
            <h3  className='modal-subtitle'>To get started just enter how much you want to bet <span className='bold'>(under 500)</span> and get we'll deal the cards. Don't worry you can change this amount inbetween hands. Have fun! You have: {playerChips} Chips</h3>
          </div>
          
          <div className='modal-input'>
            <TextField id="standard-number" label="Bet" type="number"
            onInput={e=>setBet(parseInt(e.target.value))} InputLabelProps={{shrink: true,}} defaultValue={0} />
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
            <div className='dealer-text'>
            <h2 className='cards-heading'>Dealer Cards</h2>
            </div>
            
            <div className='cards'>
              {gameOver ? renderCards(dealerHand): renderDealerHand(dealerHand)}
            </div>
          </div>
          
          
          <div className='player-section'>
            <div className='dealer-text'>
              <h2 className='cards-heading'>Your Cards. Chip Count: {playerChips}</h2> 
            </div>
            <div className='cards'>
              {renderCards(playerHand)}
              {!newHand ?
              <div className='player-buttons'>
                <Button className='hit-bttn'variant="contained" color="secondary" onClick={hit}>Hit</Button>
                <Button className='stay-bttn'variant="contained" color="secondary" onClick={stay}>Stay</Button>
              </div>
              :
              <div className='gameOver-content'>              
                <TextField id="standard-number" label="Bet" type="number" onInput={e=>setBet(parseInt(e.target.value))} InputLabelProps={{shrink: true,}} defaultValue={0}/>
                <Button variant='contained' color="secondary"  onClick={newBet} >Place Bet</Button>
              </div>
            }
            </div>
            
            
          </div>
        </div> : <div className='new-game'><div className='new-btn-container'><Button style={newStyle} className='stay-bttn'variant="contained" color="secondary" onClick={openModal}>New Game</Button></div></div>
      }
      </div>
      
      { gameStatus.win ? 
        <div className='game-status win' id='win'>
          <h1>Congrats you won!  Your Winnings: {payout}</h1>
          <h1></h1>
        </div>
        :
        null
        }
        { gameStatus.loss ? 
        <div className='game-status loss' id='loss'>
          <h1>Sorry you lost</h1>
        </div>
        :
        null
        }
        { gameStatus.tie ? 
        <div className='game-status tie' id='tie'>
          <h1>Dang, it's a tie.</h1>
        </div>
        :
        null
        }
    </div>
  );
};

export default GameboardPage;