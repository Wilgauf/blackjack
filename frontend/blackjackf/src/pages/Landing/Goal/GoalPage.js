import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import './GoalPage.css'
import questionImg from '../../../images/question.png'
import blackjack1 from '../../../images/blackjack (1).png'

const GoalPage = () => {

    const description1= `Contrary to popular belief, the goal of the game is not to get as close to 21 as possible, but rather to beat the dealer.

    You compete against the dealer, not other players.
            
    You win if the value of your hand is higher than the dealer’s without going over 21.
            
    You win if a dealer busts (goes over 21).`

    const description2 = `Hit or Draw: The decision to be dealt another card. Signal this by tapping on the table.

    Stand: The decision to not be dealt another card. Signal this by waving your hand over your cards.
    
    Double Down: To double your original bet and commit to standing after taking only one more card. Signal this by adding a separate bet to the original wager.`


    return (
        <div className='goalpage'>
            <div className='carousel-container'>
            <Carousel showArrows={true} showThumbs={false}>
                
                    <div className='cara-container'>
                        <img className='cara-img' src={questionImg} alt='21' />
                        <div className='cara-text'>
                            <h1>Don't play a myth. Play the dealer.</h1>
                            <h3>{description1}</h3>
                        </div>
                    </div>
                    <div className='cara-container'>
                        <div className='cara-text'>
                            <h1>Terminology.</h1>
                            <h3>{description2}</h3>
                        </div>
                        <img className='cara-img' src={blackjack1} alt='21' />
                        
                    </div>
                
                </Carousel>
            </div>
        </div>
    )
}


export default GoalPage
