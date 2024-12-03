import React from 'react';

const QuickScan=()=>{
return(
<div className="mt-4 ">
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
</div>
);
};
export default QuickScan;