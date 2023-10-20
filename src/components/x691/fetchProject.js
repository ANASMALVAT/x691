import axios from "axios";

const PROJECT_URL = process.env.REACT_APP_PROJECT_URL;

export async function FetchProject(rootURL, token, project_id) {

  const requestData = {
    project_id: project_id,
    token: token,
    rootURL: rootURL,
  };

  console.log(requestData);

  try {
    const response = await axios.post(PROJECT_URL, requestData); 
    return response.data.usersData;

  } catch (error) {
    console.log(error);
  }
}