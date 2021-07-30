import React from 'react';
import table from '../../images/table_blackjack.png'
import './Gameboard.css'
const GameboardPage = () => {
  return (
    <div className="GBMain">
      <h1 className="welcome">Welcome to the table</h1>
      <img className="boardBackground" src={table} alt="21" />
    </div>
  );
};

export default GameboardPage;