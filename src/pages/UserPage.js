import { useEffect, useState } from "react";
import { getAPI, postAPI } from "../helpers/apiRequests";
import Sidebar from "../components/sidebar";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getAPI({
      endpoint: "/users/user_profile",
      callback: (response) => {
        if (response.status === 200) {
          console.log("[a] ", response.data.data);
          setUserData(response.data.data);
        } else {
          console.error(response.data.message);
        }
      },
    });
  }, []);

  const navigate = useNavigate();
  const logout = () => {
    postAPI({
      endpoint: "/Users/logout",
      params: {
        token: Cookies.get('token'),
      },
      callback: (response) => {
        if (response.status === 200) {
          Cookies.remove('token');
          Cookies.remove('userId');
          setTimeout(() => {
            navigate('/');
          }, 500);
        } else {
          console.error(response.data.message);
        }
      },
    });
  };

  return (
    <div className="flex h-screen bg-scan-patternn bg-cover bg-center bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              onClick={logout}
            >
              Logout
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-lg"><strong>Email:</strong> {userData?.email}</p>
            <p className="text-lg"><strong>Username:</strong> {userData?.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
