// PreviewComponent.js
import React from 'react';

const PreviewComponent = () => {
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
          <h3><b>Total product</b></h3>
          <p>monitored</p>
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
