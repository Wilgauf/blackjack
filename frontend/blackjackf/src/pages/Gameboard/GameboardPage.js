import React, {useEffect, useState } from 'react';
import table from '../../images/table_blackjack.png'
import './Gameboard.css'
import { Button } from '@material-ui/core'

const GameboardPage = () => {
  useEffect(()=>{
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close")
    modal.style.display = "block";
    closeBtn.addEventListener("click", () => {
    modal.style.display = "none";})
  },[])

  const hit = ()=>{
    console.log('Player hit')
    //Might need to move this to a plain .js file and do some dom manipulation with the new card.
  }

  const stay = () =>{
    console.log('Player Stands')
  }
  
  return (
    <div className="GBMain">
      
      {/* <img className="boardBackground" src={table} alt="21" /> */}
      <div className='Game manager'>  
      <div class="modal">
        <div className='modal_content'>
          <span class="close">&times;</span>
          <h2>Welcome to the table!</h2>
        </div>
      </div>
      <div className='dealer-section'>
        <h2>Dealer Cards</h2>
        <div className='cards'>
          <img src={('http://deckofcardsapi.com/static/img/KH.png')} alt='hope its not 21'/> 
          <img src={('https://deckofcardsapi.com/static/img/3S.png')} alt='hope its not 21'/>
        </div>
      </div>
      <h2>Your Cards</h2>
      
      <div className='player-section'>
      
        <div className='cards'>
          <img src={('http://deckofcardsapi.com/static/img/KH.png')} alt='hope its not 21'/> 
          <img src={('https://deckofcardsapi.com/static/img/3S.png')} alt='hope its not 21'/>
        </div>
        <div className='player-buttons'>
        <Button className='hit-bttn'variant="contained" color="secondary" onClick={hit}>Hit</Button>
        <Button className='stay-bttn'variant="contained" color="secondary" onClick={stay}>Stay</Button>
          
        </div>
      </div>
        {/* <Button className='play-bttn'variant="contained" color="secondary">Play now</Button> */}
      </div>
    </div>
  );
};

export default GameboardPage;