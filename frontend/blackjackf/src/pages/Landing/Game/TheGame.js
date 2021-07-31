import React from 'react'
import gameTable from '../../../images/Game picture.jpg'
import './Game.css'

export const TheGame = () => {
    return (
        <div className='content-container'>
            <div className='left-col'>
                <h1>The Game</h1>
                <h3>{`Blackjack is the most well-known game in the casino and is played around the world. It remains one of the most popular table games in any casino. Everyone at the table plays against the dealer. When dealt 2 cards of the same value, players may split the pair to become separate hands and receive additional cards on each hand. ​The objective of the game is to draw cards with a total closer to 21 than the dealer’s total – without going over 21.`}</h3>

            </div>
            <div className='right-col'>
                <img className='game-img' src={gameTable} alt='21'/>
            </div>
        </div>
    )
}
