import React from 'react';
import "./socialIcons.css";
import { icons } from './constants';

const SocialIcons = () => {
    return (
        <div className='iconsContainer'>
            <div className='socialIcon'>
                {icons.map((icon, index) => (
                    <span key={index} className='iconsStyle'>{icon.icon}</span>
                ))}

            </div>
            <div>
                <h4 className='copyrightContent'>COPYRIGHT COMMERCE 2020 -<span className='terms'>TERMS&CONDITION </span> <span className='privacy'> PRIVACYPOLICY</span></h4>
            </div>

        </div>
    )
}

export default SocialIcons