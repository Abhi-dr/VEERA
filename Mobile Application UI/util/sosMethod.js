import axios from 'axios';
import { getLocation } from './permission.js';
import * as Location from 'expo-location';

// export const sendAlert = async () => {
//   try {
//     let userData = await axios.post('http://172.16.149.176:3000/api/auth/user',{token:session});
//     userData = userData.data.user;
//     userData.location = await getLocation(Location);
//     let res = await axios.post('http://172.16.149.176:3000/api/help/sos', userData);
//   } catch (err) {
//     console.log("Error sending alert:", err.message);
//   }
// };

export async function Emergency(session) {
  try {
    console.log("Emr",session);
    let userData = await axios.post('http://172.16.149.176:3000/api/auth/user',{token:session});
    userData = userData.data.user;
    console.log(userData);
    userData.location = await getLocation(Location);
    console.log(userData);
    // console.log( await getLocation(Location));
    let res = await axios.post('http://172.16.149.176:3000/api/help/sos', userData);
    console.log(res);

  } catch (err) {

    console.log("Error sending alert:", err.message);
  }
  }
  
  export function FalseTrue() {
    console.log("FalseTrue");
  }