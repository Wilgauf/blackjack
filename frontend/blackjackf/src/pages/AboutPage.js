import React from 'react';


const AboutPage = () => {
  return (
    <div>
      <div>
        <img source src={require("../images/blackjackBanner.jpeg").default} className="about-top-banner" alt="" />       
      </div>
      <div className="about-body-container">
        <h1>About</h1>
        <h3>TRY TO REACH 21 WITHOUT EXCEEDING IT</h3>
        <p className="about-body-paragraph">Based on ‘21’, a popular card game from the 18th century, much loved in particular by Madame du Barry and later by Napoleon, who played it to pass the time while in exile on St. Helena, Blackjack became popular across the pond after the French Revolution. It became popular in American gambling circles where bonuses were invented to keep players playing. If your first two cards were the jack of spades and an ace, you got an extra payout. Hence the name Blackjack. These bonuses don’t exist any more, but the principle remains the same. The name of the game is to beat the Bank, in the person of the Dealer, without exceeding 21. Otherwise you lose your bet. If you reach a Blackjack (21) your bet is multiplied by 3. If you beat the Dealer without reaching 21, you win double your bet.
        </p>
        <p className="about-body-paragraph">
        Although luck determines the hand you’re dealt, strategy has its role to play too. Depending on the hands of the other players and of the Bank, an informed player will know whether it’s wise to take another card, stop, or keep playing.
        </p>
      </div>
      <div>
        <img source src={require("../images/blackjackTable.jpeg").default} className="about-bottom-banner" alt=""/> 
      </div>
    </div>
  );
};

export default AboutPage;