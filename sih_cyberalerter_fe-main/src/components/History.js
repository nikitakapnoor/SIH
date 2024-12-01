import React, { useState, useEffect } from 'react';

const HistoryComponent = () => {
  const [activeOption, setActiveOption] = useState('monitorScan'); // State for active option
  const [monitorScans, setMonitorScans] = useState([]); // State for monitor scan data
  const [selectedScan, setSelectedScan] = useState(null); // State for selected scan

  // Fetch data from the database (replace with actual data fetching logic)
  useEffect(() => {
    // Example static data, replace with data fetched from the database
    const fetchData = async () => {
      const data = [
        { productName: 'Product 1', lastScanDate: '2024-01-01', details: 'Details of Product 1' },
        { productName: 'Product 2', lastScanDate: '2024-02-01', details: 'Details of Product 2' },
        { productName: 'Product 3', lastScanDate: '2024-03-01', details: 'Details of Product 3' },
      ];
      setMonitorScans(data);
      setSelectedScan(data[0]);
    };
    fetchData();
  }, []);

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
            <h4><b>Scan History</b></h4>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="px-4 py-2">Product Name</th>
                  <th className="px-4 py-2">Last Scan Date</th>
                  <th className="px-4 py-2">View</th>
                  <th className="px-4 py-2">Download</th>
                </tr>
              </thead>
              <tbody>
                {monitorScans.map((scan, index) => (
                  <tr key={index} className="bg-gray-100 border-b hover:bg-gray-200 rounded-lg">
                    <td className="px-4 py-2">{scan.productName}</td>
                    <td className="px-4 py-2">{scan.lastScanDate}</td>
                    <td className="px-4 py-2">
                      <button onClick={() => handleView(scan)} className="bg-blue-500 text-white px-2 py-1 rounded-lg">View</button>
                    </td>
                    <td className="px-4 py-2">
                      <button onClick={() => handleDownload(scan)} className="bg-green-500 text-white px-2 py-1 rounded-lg">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryComponent;
