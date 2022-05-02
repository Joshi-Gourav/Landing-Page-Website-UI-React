import React from 'react';
import "./stores.css";
import image1 from "../../assets/Profile1.jpg"
import image2 from "../../assets/Profile2.jpg"
import image3 from "../../assets/Profile4.jpg"
import image4 from "../../assets/Profile4.jpg"
import image5 from "../../assets/Profile5.jpg"
import image6 from "../../assets/Profile3.jpg"

const Stores = () => {
    return (
        <div className='storeContainer'>
            <div className='storeWrapper'>
                <h3 className="storeHeader">Trusted by Agencies<br />& Store Owners</h3>
                <p className='middleContent'>No other eCommerce platform allows people to start for free and grow thier store as their business grows . More importantly ,Commerce doesn't charge you a portion of your profits as your Business grows!</p>
                <img className="leftImageOne" src={image1} alt="" />
                <img className="leftImageTwo" src={image2} alt="" />
                <img className="leftImageThree" src={image3} alt="" />
                <img className="rightImageOne" src={image4} alt="" />
                <img className="rightImageTwo" src={image5} alt="" />
                <img className="rightImageThree" src={image6} alt="" />
            </div>
        </div>
    )
}

export default Stores