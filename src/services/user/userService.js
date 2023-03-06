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
  const data = JSON.stringify({
    verificationToken: code,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/verify-code`,
    data: data,
    headers: headers,
  });
};

export const signUpNewUser = (
  firstName,
  lastName,
  email,
  password,
  userAccess
) => {
  const data = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    userAccess,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/signup`,
    data: data,
    headers: headers,
  });
};

export const sendPasswordReset = (email) => {
  const data = JSON.stringify({
    email,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/forgot-password`,
    data: data,
    headers: headers,
  });
};
