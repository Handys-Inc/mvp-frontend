import React, { useState, useContext, useEffect, createContext } from "react";

import { useCookies } from "react-cookie";

import services from "../../services";
import Notify from "../../components/Notify/Notify";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/user/userService";

export const AuthContext = createContext();

const dataFromSession = JSON.parse(sessionStorage.getItem("newUser") || "{}");

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {
  // navigate
  const navigate = useNavigate();

  // data
  const [email, setEmail] = useState(dataFromSession.email || null);
  const [phone, setPhone] = useState(dataFromSession.phone || null);
  const [firstName, setFirstName] = useState(dataFromSession.firstName || "");
  const [lastName, setLastName] = useState(dataFromSession.lastName || "");
  const [userAccess, setUserAccess] = useState(dataFromSession.userAccess);
  const [password, setPassword] = useState(dataFromSession.password || "");

  // Current Authenticated user
  const [currentUser, setCurrentUser] = useState(false);

  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // useeffect to update current user
  useEffect(() => {
    if (cookies.user === undefined) {
      setCurrentUser(null);
    } else {
      setCurrentUser(cookies.user);
    }
  }, [cookies]);

  let functions = {
    setEmail,
    setPhone,
    setFirstName,
    setLastName,
  };

  // update session on updates
  useEffect(() => {
    sessionStorage.setItem(
      "newUser",
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
      const phoneNumber = entry;
      services
        .verifyPhone(phoneNumber)
        .then((res) => {
          setLoading(false);
          Notify("info", res.data.message);
          navigate(`/auth/validate?step=1`, { state: entry });
          console.log("phone number res", res.data);
        })
        .catch((e) => {
          setLoading(false);
          Notify("error", "Error occured, Please try again");
          console.log("error", e);
        });
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

        // clear session
        sessionStorage.clear();

        // store into local storage
        if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
          // dev code
          setCookie("user", JSON.stringify(res.data), {
            path: "/",
          });
        } else {
          // production code
          setCookie("user", JSON.stringify(res.data), {
            path: "/",
            domain: ".handys.ca",
            secure: true,
          });
        }
        setTimeout(() => {
          if (userAccess === "customer") {
            window.open(`${process.env.REACT_APP_CUSTOMER}`, "_self");
          }
          if (userAccess === "service") {
            window.open(`${process.env.REACT_APP_PROVIDER}`, "_self");
          }
        }, 2000);

        console.log("signiing up", res);
      })
      .catch((e) => {
        setLoading(false);
        Notify("error", "An error occured. Please try again");
        console.log("error signing up", e);
      });
  };

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

  const resetUserPassword = (password, passwordResetToken) => {
    setLoading(true);
    resetPassword(password, passwordResetToken)
      .then((res) => {
        setLoading(false);
        Notify("success", "Password has been reset");
        Notify("info", "Log In");
         navigate(`/login`);
        console.log("restting password", res);
      })
      .catch((e) => {
        setLoading(false);
        Notify("error", e.response.data);
        console.log("error", e);
      });
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

          Notify("success", "Logged in successfully");
          // set cookies

          if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
            // dev code
            setCookie("user", JSON.stringify(res.data), {
              path: "/",
            });
          } else {
            // production code
            setCookie("user", JSON.stringify(res.data), {
              path: "/",
              domain: ".handys.ca",
              secure: true,
            });
          }

          setTimeout(() => {
            if (userAccess === "customer") {
              window.open(`${process.env.REACT_APP_CUSTOMER}`, "_self");
            }
            if (userAccess === "provider") {
              window.open(`${process.env.REACT_APP_PROVIDER}`, "_self");
            }
          }, 1000);
        })
        .catch((e) => {
          setLoading(false);
          Notify("error", e.response.data);
        });
    }
  };

  // deleting/destroying user details upon logout
  const logOut = () => {
    removeCookie("user");
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        resetUserPassword,
        logOut,
        currentUser,
        email,
        phone,
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
