import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import MonitorScan from "../components/MonitorScan";
import QuickScan from "../components/QuickScan";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("quickScan"); // State for active tab

  
  // const [inputCount, setInputCount] = useState(0);

  // const handleInputCountChange = (e) => {
  //   setInputCount(parseInt(e.target.value));
  // };

  // const renderInputs = () => {
  //   const inputs = [];
  //   for (let i = 1; i <= inputCount; i++) {
  //     inputs.push(
  //       <div key={i}>
  //         <label className="block text-sm font-semibold mb-2">Input {i}</label>
  //         <input
  //           type="text"
  //           className="w-full p-2 border rounded-md"
  //           placeholder={`Enter Input ${i}`}
  //         />
  //       </div>
  //     );
  //   }
  //   return inputs;
  // };

  return (
    <div className="flex h-screen bg-cover bg-center bg-scan-patternn">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <div className="flex-1 ml-16 flex flex-col">
        {/* Header at the top */}
        {/* <Header title="Scan" /> */}

        {/* Main Content */}
        <div className="flex-1 mt-16 p-3 overflow-auto ">
          {/* Card with Tabs */}
          <div className="flex ">
            <button
              className={`flex py-1 px-1 text-center text-md font-semibold rounded-t-lg border-t-2 border-x-2  ${
                activeTab === "quickScan"
                  ? "bg-white"
                  : "bg-gray-300 text-gray-600 border-gray-300 shadow-inner"
              }`}
              onClick={() => setActiveTab("quickScan")}
            >
              Quick Scan
            </button>
            <button
              className={`flex py-1 px-1 text-center text-md font-semibold rounded-t-lg border-t-2 border-x-2 ${
                activeTab === "monitorScan"
                  ? "bg-white"
                  : "bg-gray-300 text-gray-600 border-gray-300 shadow-inner"
              }`}
              onClick={() => setActiveTab("monitorScan")}
            >
              Monitor Scan
            </button>
          </div>
          <div className="bg-white  rounded-b-lg p-6 border-b-2 border-x-2 rounded-tr-lg">
            {/* Tab buttons */}
            {/* Content based on active tab */}
            {activeTab === "quickScan" && <QuickScan/>}
            {/* (
              <div className="mt-4">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      URL of OEM
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter URL of OEM"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter Product Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Product Version (optional)
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter Product Version"
                    />
                  </div>
                </form>
                <div className="mt-4">
                  <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">
                    Scan
                  </button>
                </div>
              </div> */}
        

          {activeTab === "monitorScan" && <MonitorScan/>}
           {/*  (
              <div className="mt-4">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select Number of Inputs
                    </label>
                    <select
                      onChange={handleInputCountChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="0">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  {renderInputs()}
                </form>
              </div> */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
