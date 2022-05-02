import React from 'react';
import "./cards.css";
import { CardsData } from "./constants";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const Cards = () => {
    return (
        <div className='cardsContainer'>
            <h1 className='cardsHeader'>Your eCommerce <br />made simple</h1>
            <div className='cardWrapper'>
                {CardsData.map((cardData, index) => (
                    <>
                        {/* // className={`individualCard ${index == 1 ? "active" : (index == 2 ? "newActive" : null)}`} */}
                        <div  key={index} className="individualCard" style={{ marginTop : `${index*40}px` }}>
                            <img className="cardImage" src={cardData.src} />
                            <div className='cardContent'>
                                <h4 className='cardHeading'>{cardData.heading}</h4>
                                <p className='cardText'>{cardData.para}</p>
                                <p className='cardlink'>{cardData.text}<KeyboardArrowRightIcon className="rightIcon"/></p>
                            </div>
                        </div>

                    </>
                ))}
            </div>
        </div>
    )
}

export default Cards
