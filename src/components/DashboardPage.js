// PreviewComponent.js
import React, { useEffect, useState } from 'react';
import { Upgrade } from '../helpers/apiRequests';
import axios from 'axios';
import BarChart from '../helpers/Barchart';
import Cookies from 'js-cookie';
const PreviewComponent = ({qucikScanData}) => {
 const [showSubscribe,setShowSubscribe]=useState(false);
 const [severityCount, setSeverityCount] = useState({ Low: 0, Medium: 0, High: 0, Critical: 0});
 const storedData = localStorage.getItem("userData");
 const [quickScanData, setQuickScanData] = useState(null);

let userData = storedData ? JSON.parse(storedData) : null;
useEffect(()=>{
  userData?.subscriptionPlan=="Free" ? setShowSubscribe(true): setShowSubscribe(false);
  // Fetch severity count from backend 
  axios.get('/api/quickscan_dashboard',
   { params: { userId: 'your-user-id' } // Replace with actual userId 
  }) .then(response => { if(response.status === 200)
     { 
      setSeverityCount(response.data.data.dashboard.severityCount);
     } }) 
     .catch(error => { 
      console.error('Error fetching data:', error);
     })
},[userData])

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* First Division (Card) */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3><b>Total Vunerabilities</b></h3>
        <BarChart data={severityCount} />
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
