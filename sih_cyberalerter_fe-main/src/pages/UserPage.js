import { useEffect, useState } from "react";
import { getAPI } from "../helpers/apiRequests";
import Sidebar from "../components/sidebar";

const UserPage = () => {
    const [userData,setUserData]=useState(null)
      useEffect(()=>{
        getAPI({
          endpoint: "/users/user_profile",
          callback: (response) => {
            if (response.status === 200) {
                console.log("[a] ", response.data.data)
                setUserData(response.data.data)
             
            } else {
              // Handle error response
              console.error(response.data.message);
            }
          },
        });
      },[])
      return(

        <div className="flex h-screen">
        {/* Sidebar on the left */}
        <Sidebar />
  
        {/* Main content on the right */}
        <div className="flex-1 ml-24  ">
          {/* Header at the top */}
         <p> {userData?.email} </p>
         <p> {userData?.username} </p>
        </div>
      </div>

      );
    }

export default UserPage;