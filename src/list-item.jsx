import React from 'react';
import './App.css';
import UserAvatar from './UserAvatar.png';
import LTP from './LTP.png';
import LBP from './LBP.png';

const ListItem = () => (
    <div className="ListItem">
        <div className="ItemLeftBlock">
            <div className="LeftPicTop">
                <img src={LTP} className="LTP" alt="LTP" width="20px" height="20px" />
            </div>
            <div className="LeftPicBott">
                <img src={LBP} className="LBP" alt="LBP" width="20px" height="20px" />
            </div>
        </div>
        <div className="ItemMiddle">
            <div className="ItemMiddleTop">
                <div className="ItemHeader">TIS-71</div>                    
                <div className="ItemContent">
                    Homepage footer uses an inline
                    style - sholud use a class
                </div>
            </div>
            <div className="ItemMiddleBottom">
                <div className="ItemLocation">
                    Space Travel Partners
                </div>
            </div>                
        </div>
        <div className="ItemRightBlock">
            <div className="UserPic">
                <img src={UserAvatar} className="UserAvatar" alt="User" width="70px" height="70px" />
            </div>
            <div className="ItemCount">7</div>
        </div>
    </div>
)
export default ListItem;