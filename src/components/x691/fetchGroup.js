import axios from "axios";

const GROUP_URL = process.env.REACT_APP_GROUP_URL;

export async function FetchGroup(rootURL, token, group_id) {
  
  const requestData = {
    group_id: group_id,
    token: token,
    rootURL: rootURL,
  };

  try {
    const response = await axios.post(GROUP_URL, requestData); 
    return response.data.usersData;
  } catch (error) {
    console.log(error);
  }
}