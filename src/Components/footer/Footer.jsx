import React from 'react';
import "./footer.css";
import LockIcon from '@mui/icons-material/Lock';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerTopSection">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <LockIcon className='footerIcon' />
                    <span className="text">30 day <label className="footerLabelText">money back guarantee</label></span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <AttractionsIcon className='footerIcon' />
                    <span className="text">Support <label className="footerLabelText">team across the world</label></span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <CheckBoxIcon className='footerIcon' />
                    <span className="text">Safe & Secure <label className="footerLabelText"> online payment</label></span>
                </div>
            </div>
            <h3 style={{textAlign:"center",color:"#fff",marginBottom:"50px"}}>COMMERCE</h3>
                <hr style={{width:"85%" ,margin:"0 auto", opacity:"0.3"}}/>
            <div className="footerBottomSection">
                <div className="footerLinks">
                <h4 className="footerLinkHeadingText">WHO WE ARE</h4>
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Work with us</li>
                </ul>
                </div>
                <div className="footerLinks">
                <h4 className="footerLinkHeadingText">COMMERCE</h4>
                <ul>
                    <li>Features</li>
                    <li>Payments</li>
                    <li>Marketing</li>
                    <li>Shopping</li>
                    <li>Extension Store</li>
                    <li>eCommerce Blog</li>
                    <li>Development Blog</li>
                    <li>Ideas Board</li>
                    <li>Mobile App</li>
                    <li>Community</li>
                    <li>Style Guide</li>
                    <li>Email NewsLetter</li>
                </ul>
                </div>
                <div className="footerLinks">
                <h4 className="footerLinkHeadingText">OTHER PRODUCTS</h4>
                <ul>
                    <li>StoreFront</li>
                    <li>Slider</li>
                    <li>Majax</li>
                    <li>Majax Extension</li>
                </ul>
                </div>
                <div className="footerLinks">
                <h4 className="footerLinkHeadingText">SUPPORT</h4>
                <ul>
                    <li>Documentation</li>
                    <li>Customization</li>
                    <li>Support Policy</li>
                    <li>Contact</li>
                    <li>Covid 19 Resources</li>
                    <li>Privacy Notice for</li>
                    <li>California User</li>
                </ul>
                </div>
                <div className="footerLinks">
                <h4 className="footerLinkHeadingText">WE RECOMMEND</h4>
                <ul>
                    <li>Experts</li>
                    <li>Hosting Solutions</li>
                    <li>Pre Sales FAQ</li>
                    <li>Success stories</li>
                    <li>Design Feadback Group</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer