import React from 'react';
import "./heroSection.css";
import { Link } from "react-router-dom";
import laptop from "../../assets/laptop3.jpg"
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import HomeIcon from '@mui/icons-material/Home';
import paypal from "../../assets/paypal.png";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import image1 from "../../assets/girl.jpg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { numbers } from "./constants";




const HersoSection = () => {
  return (
    <div className='heroSectionContainer'>
      <div className='heroLeftSection'>
        <h1 className='heroSectionHeader'>Lorem ipsum is <br />placeholder text<br />for previewing.</h1>
        <p className='heroSectionPara'>Commerce is a customizable , open-source eCommerce platform  built for WordPress . </p>
        <p className='heroSectionPara'>Get started quickly and make your way.</p>
        <button className='heroSectionButton' onClick={() => { alert("Boston Consulting Group") }}>Start a New Store</button>
        <span> or <span className='customizeLink'><Link to="/">Customize & Extend <KeyboardArrowRightIcon style={{ color: "rgb(53, 53, 223)", fontSize: "15px", paddingTop: "2px" }} /></Link></span></span>
      </div>

      <div className='heroRightSection'>
        <div className='heroRightTioSection'>
          <div className='shoes'>
            <img src={laptop} className="heroShoe" />
            <img src={image1} className="heroShoes" />
            <div className="saleContainer">SALE</div>
            <div className="cartIcon">
              <AddShoppingCartIcon className="shoppingCartIcon" />
            </div>
          </div>
          <div className='heroCard'>
            <span className='shoesHeader'>SHOES</span>
            <label className='shoesSubHeader'>Dreams Originals</label>
            <h4 className='shoesMainHeader'>Dream Originals <br />OG Sneakers</h4>
            <div className='numberDiv'>
              {numbers.map((number, index) => (
                <div>
                  <h3 className="counter" key={index}>
                    {number.number}
                  </h3>
                </div>
              ))}
            </div>
            <button className='addToCart' onClick={() => { alert("Boston Consulting Group") }}>Add to cart</button>
            <div className="verifiedIcon">
              <VerifiedUserIcon style={{ color: "white", fontSize: "25px" }} />
            </div>
          </div>
        </div>
        <div className='paymentSection'>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgb(196, 170, 170)" }}>
            <h3 style={{ color: "rgb(53, 53, 223)", marginRight: "15px" }}>stripe</h3>
            <p style={{ fontSize: "13px", opacity: "0.4", marginRight: "16px" }}>stripe gateway</p>
            <ToggleOffIcon style={{ color: "#a4c639", fontSize: "40px" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgb(196, 170, 170)" }}>
            <img src={paypal} style={{ width: "40px", objectFit: "cover", marginRight: "13px" }} />
            <p style={{ fontSize: "13px", opacity: "0.4", marginRight: "13px" }}>Paypal payments</p>
            <ToggleOffIcon style={{ color: "#a4c639", fontSize: "40px" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <HomeIcon style={{ color: "blue", marginRight: "26px" }} />
            <p style={{ fontSize: "13px", opacity: "0.4", marginRight: "13px" }}>Bank Transfer</p>
            <ToggleOffIcon style={{ color: "blue", fontSize: "40px" }} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HersoSection