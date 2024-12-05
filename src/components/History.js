import React, { useState } from 'react';
const HistoryComponent = ({qucikScanData}) => {
  const [activeOption, setActiveOption] = useState('monitorScan'); // State for active option
  const [monitorScans, setMonitorScans] = useState([]); // State for monitor scan data
  const [selectedScan, setSelectedScan] = useState(null); // State for selected scan


  console.log("[qs] history",qucikScanData);

  // View button handler 
  const handleView = (scan) =>
     { 
      setSelectedScan(scan); 
     };

     // Download button handler
      const handleDownload = (scan) =>
         { const blob = new Blob([JSON.stringify(scan.details)],
           { 
            type: 'application/json' 
           }); const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); 
            a.href = url; 
            a.download = `${scan.productName}-scan-details.json`; 
            a.click(); 
            URL.revokeObjectURL(url);
           };

  return (
    <div className="space-y-4">
      <div>
        <h3 id="history" className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <b>History</b> 
        </h3>
      </div>

      {/* Options for Monitor Scans and Other History */}
      <div className="flex space-x-4">
        <button
          className={`${
            activeOption === 'monitorScan' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveOption('monitorScan')}>
          <b>Monitor Scan History</b> 
        </button>
        <button
          className={`${
            activeOption === 'otherHistory' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveOption('otherHistory')}
        >
          <b>Single Scan History</b>
        </button>
      </div>

      {/* Render content based on active option */}
      {activeOption === 'monitorScan' && (
        <div>
          <div>
            <ul className="flex space-x-4"> {/* Flex container for horizontal layout */}
              {monitorScans.map((scan, index) => (
                <li
                  key={index}
                  className={`cursor-pointer shadow-md border-2 p-1 rounded-lg ${
                    selectedScan === scan ? "bg-blue-800 text-white border-blue-600" : "bg-white"
                  }`}
                  onClick={() => setSelectedScan(scan)}
                >
                  {scan.productName}
                </li>
              ))}
            </ul>
          </div>

          {/* Display selected scan below */}
          {selectedScan && (
            <div className="mt-4">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h4><b>Selected Scan:</b> {selectedScan.productName}</h4>
                <p><b>Details about:</b> {selectedScan.details}.</p>                
              </div>
            </div>
          )}
        </div>
      )}

      {/* Table for scan history */}
      {activeOption === 'otherHistory' && (
        <div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4><b>Quick Scan History</b></h4>
            <div>{JSON.stringify(qucikScanData, null, 2)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryComponent;
