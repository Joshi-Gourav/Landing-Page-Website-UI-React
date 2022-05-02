import React from 'react';
import "./about.css";

const About = () => {
    return (
        <div className="aboutContainer">
            <span className="aboutText">Commerce - the <span className="boldText">most customizable eCommerce <br />platform</span> for building <span className="boldText">your online business.</span></span>
            <div>
                <button className="aboutBtn" onClick={()=>{alert("Boston Consulting Group")}}>GET STARTED</button>
            </div>
        </div>
    )
}

export default About