import React from 'react';
import "./knowOurCommunity.css";
import girlImage from "../../assets/girl.jpg";
import prof from "../../assets/Profile4.jpg"
const KnowOurCommunity = () => {
  return (
    <div className="communityContainer">
      <div className='clipPathContainer'></div>
      <div className="topCommunitySection">
        <div className='communityTopSection'>
          <div className='topimagediv'>
            <img className="girlTopProfileImage" src={girlImage} alt="girlProfileImage" />
          </div>
          <div className="topBackgroundCircle"></div>
        </div>
        <div className='topContent'>
          <h4>Develop <br />Without Limits</h4>
          <p>Commerceis developer friendly ,too. Built with REST API,Commerc is scalable and can integrate with virtually any service . Design a complex store from scratch , extend a store for a client , or simply add a single product to a WordPress site-your store , your way</p>
          <button className='contentButton'>Read the Documentation</button>
        </div>
      </div>
      <div className="bottomCommunitySection">
          <div className='bottomContent'>
            <h4>Know our <br />Global Community</h4>
            <p>Commerce is one of the fastest-growing eCommerce communities . We're proud that the helpfulness of the community and wealth of online resources are frequently cited as reasons our users love it . There are 80+ meetups worldwide.  </p>
            <button className='contentButton'>Read the Documentation</button>
          </div>
          <div className='communityBottomSection'>
            <div className='bottomimagediv'>
              <img className="girlBottomProfileImage" src={prof} alt="girlProfileImage" />
            </div>
            <div className="bottomBackgroundCircle"></div>
          </div>
        
      </div>

    </div>
  )
}

export default KnowOurCommunity