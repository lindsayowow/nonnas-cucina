import React from 'react';
import '../styles/BuildADish.css';
// import SayingsData from '../data/nonna.json';
import NonnaNeutral from '../assets/nonna-neutral.png';

export default function NonnaReaction() {
 
    return (
        <div key="nonna" className="nonna">
             <h2>Verify Your Selections</h2>
             <img src={NonnaNeutral} className="nonnaNeutral"></img>
             <p>       
              {/* {SayingsData.message} */}
            </p>
            {/* <p>Nonna's funny sayings here</p> */}
        </div>
    )
}
