import React, { useState, useRef, useEffect } from "react";

import { Outlet } from "react-router";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// state from redux

export const ProtectedRoutes = () => {
  // password handling
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const [authed, setAuthed] = useState(false);

  const passwordRef = useRef();

  const setPwd = () => {
    setLoading(true);
    localStorage.setItem("pwd", passwordRef.current.value);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const dataFromSession = localStorage.getItem("pwd") || "";
    if (dataFromSession === "h@ndysb3t@1") {
      setAuthed(true);
    }
  }, [loading]);

  return authed ? (
    <Outlet />
  ) : (
    // temporal restriction
    <div className="w-full h-screen text-center bg-secondary flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPwd();
        }}
        className="text-center"
      >
        <div className="relative w-96">
          <span
            className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
            onClick={() => setPasswordShown(!passwordShown)}
          >
            {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <input
            className="auth-input"
            ref={passwordRef}
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <button
          disabled={loading}
          onSubmit={(e) => {
            e.preventDefault();
            setPwd();
          }}
          className="btn-primary my-4 mx-auto text-center"
        >
          {loading ? "Hang on.." : "Enter"}
        </button>
      </form>
    </div>
  );
};
