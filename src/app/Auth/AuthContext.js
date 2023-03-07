import React, { useState, useContext, useEffect, createContext } from "react";

import services from "../../services";
import Notify from "../../components/Notify/Notify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const dataFromSession = JSON.parse(
  sessionStorage.getItem("h@ndy$us3r") || "{}"
);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {
  // Getting shared Auth between all domains
  // const customerFrame = document.getElementById("frame-app");

  // function sendMessage(windowObj, payload) {
  //   if (windowObj) {
  //     console.log("posting message payload", payload);
  //     windowObj.contentWindow.postMessage(payload, "http://localhost:3001");
  //     window.open("http://localhost:3001", "_self");
  //   }
  // }

  // useEffect(() => {
  //   const data = {
  //     _id: "64061a43def07f66fb1bef5b",
  //     firstName: "Alice",
  //     lastName: "Iris",
  //     email: "customer@handys.ca",
  //     userAccess: ["customer"],
  //     userLevel: "user",
  //   };

  //   // function postCrossDomainMessage(msg) {
  //   //   console.log("sending message to ifr")
  //   //   var win = document.getElementById("ifr").contentWindow;
  //   //   win.postMessage(msg, "http://localhost:3001");
  //   // }

  //   setTimeout(() => {
  //     localStorage.setItem("myData", "Hello from localhost:3000!");
  //     // window.location.href = "http://localhost:3001";
  //     window.postMessage({ data: localStorage.getItem("myData") }, "*");

  //     window.open("http://localhost:3001", "_self");
  //   }, 2000);
  // }, []);

  useEffect(() => {
    const targetWindow = window.open("http://localhost:3001", "_self");

    targetWindow.onload = function () {
      console.log("running onload function");
      const targetOrigin = "http://localhost:3001";
      const messageData = {
        hello: "hello",
      };

      targetWindow.postMessage(messageData, targetOrigin);
    };
  }, []);

  // navigate
  const navigate = useNavigate();

  // data
  const [email, setEmail] = useState(dataFromSession.email || null);
  const [phone, setPhone] = useState(dataFromSession.phone || null);
  const [firstName, setFirstName] = useState(dataFromSession.firstName || "");
  const [lastName, setLastName] = useState(dataFromSession.lastName || "");
  const [userAccess, setUserAccess] = useState(dataFromSession.userAccess);
  const [password, setPassword] = useState(dataFromSession.password || "");

  let functions = {
    setEmail,
    setPhone,
    setFirstName,
    setLastName,
  };

  // update session on updates
  useEffect(() => {
    sessionStorage.setItem(
      "h@ndy$us3r",
      JSON.stringify({ email, phone, firstName, lastName, userAccess })
    );
  }, [email, phone, firstName, lastName, password, userAccess]);

  // loading for all requests
  const [loading, setLoading] = useState(false);

  const sendVerification = (entry, userAccess) => {
    // check if email or phone number then validate and call right endpoint
    setUserAccess(userAccess);
    if (entry.includes("@") && entry.includes(".")) {
      // it is an EMAIL
      setLoading(true);
      setEmail(entry);
      services
        .verifyEmail(entry)
        .then((res) => {
          setLoading(false);
          console.log("res email entry", res.data);
          Notify("info", res.data.message);
          navigate(`/auth/validate?step=1`, { state: entry });
        })
        .catch((e) => {
          setLoading(false);
          Notify("error", "Error occured, Please try again");
          console.log("error", e);
        });
    } else {
      // it is a PHONE NUMBER
      setLoading(true);
      setPhone(entry);
    }
  };

  const verifyUserOTP = (code, setCode) => {
    setLoading(true);
    services
      .verifyOTP(code)
      .then((res) => {
        setLoading(false);
        Notify("success", res.data.message);
        navigate(`/auth/validate?step=2`);
      })
      .catch((e) => {
        setLoading(false);

        Notify("error", e.response.data.message);
        setCode("");
      });
  };

  const signUp = () => {
    //
    setLoading(true);
    services
      .signUpNewUser(firstName, lastName, email, password, userAccess)
      .then((res) => {
        setLoading(false);
        Notify("success", "Signed up successfully");
        Notify("info", "Redirecting...");

        // store into local storage

        // setTimeout(() => {
        //   if (userAccess === "customer") {
        //     window.open(`${process.env.REACT_APP_CUSTOMER}`, "_self");
        //   }
        //   if (userAccess === "service") {
        //     window.open(`${process.env.REACT_APP_PROVIDER}`, "_self");
        //   }
        // }, 2000);

        console.log("signiing up", res);
      })
      .catch((e) => {
        setLoading(false);
        Notify("error", "An error occured. Please try again");
        console.log("error signing up", e);
      });
  };

  // sign up res
  //   {
  //     "_id": "64061a43def07f66fb1bef5b",
  //     "firstName": "Alice",
  //     "lastName": "Iris",
  //     "email": "customer@handys.ca",
  //     "userAccess": [
  //         "customer"
  //     ],
  //     "userLevel": "user"
  // }

  const sendPasswordReset = (email) => {
    if (!email.includes("@") || !email.includes(".")) {
      Notify("info", "Please enter a valid email");
    } else {
      setLoading(true);
      services
        .sendPasswordReset(email)
        .then((res) => {
          console.log("send pass");
          setLoading(false);
          Notify("success", `Sent password reset mail to ${email}`);
        })
        .catch((e) => {
          setLoading(false);
          Notify("error", e.response.data);
        });
    }
  };

  const loginWithEmailAndPass = (email, password, userAccess) => {
    if (email.length < 4 || password.length < 4) {
      Notify("info", "Please check information entered");
    } else {
      setLoading(true);
      services
        .login(email, password)
        .then((res) => {
          setLoading(false);
          console.log("res", res);

          Notify("success", "Logged in successfully");

          setTimeout(() => {
            if (userAccess === "customer") {
              window.open(`${process.env.REACT_APP_CUSTOMER}`, "_self");
            }
            if (userAccess === "provider") {
              window.open(`${process.env.REACT_APP_PROVIDER}`, "_self");
            }
          }, 2000);
        })
        .catch((e) => {
          setLoading(false);
          Notify("error", e.response.data);
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        firstName,
        lastName,
        setFirstName,
        setLastName,
        password,
        signUp,
        setPassword,
        userAccess,
        ...functions,
        sendVerification,
        verifyUserOTP,
        loading,
        setLoading,
        loginWithEmailAndPass,
        sendPasswordReset,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
