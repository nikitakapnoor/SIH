import React, { useState } from "react";
import { postAPI } from "../helpers/apiRequests";
import Cookies from 'js-cookie';
const QuickScan = () => {
  // State variables for form inputs
  const [productName, setProductName] = useState("apache");
  const [productVersion, setProductVersion] = useState("2.4.41");
  const [cveId, setCveId] = useState("CVE-2024-0001");
  const [jsonData, setJsonData] = useState(null); // State to store the JSON data
  const [error, setError] = useState("");
  const [scanId,setScanId]=useState("")

  const sendScan = () => {
    if (!productName) {
      setError("Product Name is required");
      return;
    }
    setError("");
    postAPI({
      endpoint: "/quickscan/scan",
      params: {
        userId:   Cookies.get('userId'),
        productName: productName,
        productVersion: productVersion ?? null,  
        cveId: cveId ?? null
      },
      callback: (response) => {
        if (response.status === 200) {
          setJsonData(response.data.scanResults);
          setScanId(response.data.scanId)
        } else {
          // Handle error response
          setError(response.data.message);
        }
      },
    });

  };

const sendEmail =()=>{
  postAPI({
    endpoint: "/quickscan/send-email",
    params: {
    userId: Cookies.get('userId'),
    scanId: scanId
    },
    callback: (response) => {
      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        setError(response.data.message);
      }
    },
  });
}


  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left side - Form */}
      <div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Product Version (optional)
            </label>
            <input
              type="text"
              value={productVersion}
              onChange={(e) => setProductVersion(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter Product Version"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              CVE ID (optional)
            </label>
            <input
              type="text"
              value={cveId}
              onChange={(e) => setCveId(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter CVE ID"
            />
          </div>
        </form>
        <div className="mt-4">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg"
            onClick={sendScan}
          >
            Scan
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Right side - JSON Data Display */}
      <div className="p-4 border rounded-md bg-gray-50">
      {jsonData ? (
        <>
      <button className="p-2 border-2 border-blue-800 hover:bg-blue-200 text-blue-800" onClick={sendEmail}>
            send email
          </button>
        <h2 className="text-lg font-semibold mb-4">Scan Details</h2>
       
          <pre className="bg-white p-4 rounded-md overflow-auto">
            {JSON.stringify(jsonData, null, 2)}
          </pre>
          </>
        ) : (
          <p className="text-gray-600">No scan data available.</p>
        )}
      </div>
    </div>
  );
};

export default QuickScan;


//line number check what you get for response , response.data , and so on and see what and all you can access .
// add the code at line 110 to go through each json object in array (refer the project I sent initially which had download option).
// handled alert with some style .... check ant.d
