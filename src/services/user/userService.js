import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASE_URL}/api/users`;

const headers = { 'Content-Type': 'application/json' }

export const login = (email, password) => {
  const data = JSON.stringify({
    email, password
  })
  return axios({
    method: "POST",
    url: `${baseURL}/login`,
    data: data,
    headers: headers
  });
};