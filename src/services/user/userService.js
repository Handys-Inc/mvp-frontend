import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASE_URL}/api/users`;

const headers = { "Content-Type": "application/json" };

export const login = (email, password) => {
  const data = JSON.stringify({
    email,
    password,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/login`,
    data: data,
    headers: headers,
  });
};

export const verifyEmail = (email) => {
  const data = JSON.stringify({
    email,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/verify-email`,
    data: data,
    headers: headers,
  });
};

export const verifyOTP = (code) => {
  console.log("verigfying with, code", code);
  const data = JSON.stringify({
    verificationToken: code,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/verify-email`,
    data: data,
    headers: headers,
  });
};
