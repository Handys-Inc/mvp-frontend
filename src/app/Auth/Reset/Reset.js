import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../../components/Navbar/Navbar";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { AuthContext } from "../AuthContext";

import Loader from "../../../utils/Loader";

function Reset() {
  // password handling

  const { resetUserPassword, loading } = useContext(AuthContext);

  const { id } = useParams();

  const [newPassword, setNewPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [token, setToken] = useState("");

  React.useEffect(() => {
    setToken(id);
  }, [id]);

  const [passwordShown, setPasswordShown] = useState(false);

  const reset = () => {
    resetUserPassword(newPassword, token);
  };
  return (
    <div className="bg-lightGray h-screen">
      <Navbar />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl w-96 font-semibold">
            Set New Password
          </h1>

          {/* details */}
          <div className="my-5">
            <div className="relative mt-5 mb-3">
              <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>

              <input
                className="auth-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                autoComplete="off"
              />
            </div>

            <div className="relative mt-5 mb-3">
              <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>

              <input
                className="auth-input"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                autoComplete="off"
              />
            </div>

            <button
              onClick={() => reset()}
              disabled={
                repeatPassword !== newPassword ||
                newPassword === null ||
                repeatPassword === null ||
                loading
              }
              className="btn-primary w-full mt-5"
            >
              {loading ? <Loader /> : "Reset Password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
