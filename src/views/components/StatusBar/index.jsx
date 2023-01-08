import React from "react";
import "./StatusBar.css";

function StatusBar() {
  return <div className='status-bar-main'>
    <div className="statistic-bar winner">
        <p className='statistic-title'>Mədaxil</p>
        <p className='sum-count'>1000 <span>AZN</span></p>
    </div>
     <div className="statistic-bar loser">
         <p className='statistic-title'>Məxaric</p>
        <p className='sum-count'>1345 <span>AZN</span></p>
     </div>
  </div>;
}

export default StatusBar;
