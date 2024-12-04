// PreviewComponent.js
import React, { useEffect, useState } from 'react';
import { Upgrade } from '../helpers/apiRequests';
import Cookies from 'js-cookie';
const PreviewComponent = ({qucikScanData}) => {
 const [showSubscribe,setShowSubscribe]=useState(false);
const storedData = localStorage.getItem("userData");
let userData = storedData ? JSON.parse(storedData) : null;
useEffect(()=>{
  userData?.subscriptionPlan=="Free" ? setShowSubscribe(true): setShowSubscribe(false);
},[userData])


  return (
    <div className="grid grid-cols-2 gap-4">
      {/* First Division (Card) */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3><b>Total Vunerabilities</b></h3>
        <p>Graph</p>
      </div>

      {/* Second Division (2x2 Cards) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3><b>qucikScanData</b></h3>
          <p> {JSON.stringify(qucikScanData, null, 2)}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3><b>Simple scans</b></h3>
          <p>Performed</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3><b>Notifications</b></h3>
          <p>Sent</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3><b>Subscription plan</b></h3>
          {showSubscribe&& <button onClick={()=>{
            Upgrade();
            setShowSubscribe(false);
           }} className='p-2 text-green-400 border-2 border-green-400 rounded-lg'> upgrade</button>}
          <p>Details about Card 5.</p>
        </div>
      </div>

      {/* Third Division (Card) */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3>Card 6</h3>
        <p>graph</p>
      </div>

      {/* Fourth Division (Card) */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3><b>Monitoring details</b></h3>
        <p>Subscription</p><br></br>
        <p>timer</p>
      </div>
    </div>
  );
};

export default PreviewComponent;
