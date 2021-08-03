import React from 'react';
import topBanner from '../images/blackjackBanner.jpeg'
import bottomBanner from '../images/HandsBanner.jpg'
import './Howto.css'

const HowToPlay = () => {
  return (
    <div>
      <div>
        <img source src={topBanner} className="howtoplay-top-banner" alt=""/>       
      </div>
      <div className="howtoplay-body-container">
        <h1 className='htp-title'>Blackjack</h1>
        <h3 className='htp-subtitle'>Value of the cards</h3>
          <p className="howtoplay-body-paragraph">From 2 to 9: each card has its own numerical value. The 10s and the face cards, i.e. Jacks, Queens and Kings, are worth 10. The Ace is worth 1 or 11 depending on the player’s hand. If your hand does not exceed 21, the Ace counts as 11. If it does exceed 21, the Ace counts as 1. The value of the Ace is always calculated to your advantage. The hand called ‘Blackjack’ is made up of an Ace and a card worth 10, making a total of 21, dealt in the player's first two cards.
          </p>
        <h3 className='htp-subtitle'>How to play</h3>
          <p className="howtoplay-body-paragraph">
          Place a bet in the betting areas marked on the table. You and fellow players are dealt two cards each whilst the dealer is dealt one face up. If your first 2 cards add up to 21 (an Ace and a card valued 10), that’s Blackjack! If they have any other total, decide whether you wish to ‘draw’ or ‘stay’. You can continue to draw cards until you are happy with your hand. Once all players have taken their turn the dealer draws another card for their hand. They must draw until they reach 17 or more.
          </p>
        <h3 className='htp-subtitle'>Rules</h3>
          <p className="howtoplay-body-paragraph">
          Once all cards are drawn, whoever has a total closer to 21 than the dealer wins. If player’s hand and dealer’s hand have an equal value, it’s a tie.
          All winning bets are paid 1/1 but when you get Blackjack you get paid 3/2.
          </p>
        <h3 className='htp-subtitle'>Basic Strategy</h3>
          <p className="howtoplay-body-paragraph">
          Although Blackjack is certainly a game of chance, it is possible to improve your odds with a strategy based on observation. The simplest principles are:
          </p>
            
              <p className="howtoplay-body-paragraph">
                - If the dealer has a card between 2 and 6, he or she can't win, since even with a 10 or face card, he or she will have a hand below 17 and will have to draw an additional card.
              </p>
              <p className="howtoplay-body-paragraph">
                - If the dealer has a 7, be careful because he or she could draw a 10 or face card and be in a position to win.
              </p>
              <p className="howtoplay-body-paragraph">
                With practice, you will learn to anticipate the Dealer's options and your chances of winning will increase. Get started and decide when you’re going to stop, double your bet or draw two equal cards.
              </p>
      </div>
      <div>
        <img source src={bottomBanner} className="howtoplay-bottom-banner" alt=""/> 
      </div>
    </div>
  );
};

export default HowToPlay;