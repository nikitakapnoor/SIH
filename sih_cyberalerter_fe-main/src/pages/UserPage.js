import { useEffect, useState } from "react";
import { getAPI } from "../helpers/apiRequests";
import Sidebar from "../components/sidebar";
import Cookies from 'js-cookie';

const UserPage = () => {
      return(

        <div className="flex h-screen">
        {/* Sidebar on the left */}
        <Sidebar />
  
        {/* Main content on the right */}
        <div className="flex-1 ml-24  ">
          {/* Header at the top */}
     
        </div>
      </div>

      );
    }

export default UserPage;