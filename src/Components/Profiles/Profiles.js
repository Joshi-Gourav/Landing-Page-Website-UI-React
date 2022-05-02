import React from 'react';
import "./profiles.css";
import Image1 from "../../assets/Profile1.jpg";
import Image2 from "../../assets/Profile2.jpg";
import Image3 from "../../assets/Profile3.jpg";
import Image4 from "../../assets/Profile4.jpg";
import Image5 from "../../assets/Profile5.jpg";

const Profiles = () => {
    return (
        <div className="profileContainer">
            <div className="profileTopSection">
                <h3 className="profileHeader">Supported by real people</h3>
                <p className="profilePara">Our team of Engineers works remotely from 44 countries providing customer<br />
                    support across multiple time zones.</p>
            </div>
            <div className='userProfile'>
                <img className="profileImages" src={Image1} alt="" />
                <img className="profileImages" src={Image2} alt="" />
                <img className="profileImages" src={Image3} alt="" />
                <img className="profileImages" src={Image4} alt="" />
                <img className="profileImages" src={Image5} alt="" />
            </div>
        </div>
    )
}

export default Profiles