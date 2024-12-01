import axios from 'axios';
import { BASE_URL } from "../data/EndPoints";

export const postAPI = ({
    endpoint,
    params,
    callback,
  }) => {
    
    axios({
      method: 'POST',
      url: `${BASE_URL}${endpoint}`,
      data: params, // For POST, data is sent in the body
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        callback(response);
      })
      .catch((error) => {
        console.error(error); // Handle error as per your logic
      });
  };
  