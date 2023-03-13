import React, { useContext } from "react";

import { AuthContext } from "../../app/Auth/AuthContext";

function Avatar() {
  const { currentUser } = useContext(AuthContext);

  const { firstName, lastName } = currentUser;

  return (
    <>
      {currentUser !== null && (
        <div className="w-10 h-10 rounded-full flex font-bold items-center justify-center bg-lightSecondary">
          <p>
            {firstName.split("")[0]}
            {lastName.split("")[0]}
          </p>
        </div>
      )}
    </>
  );
}

export default Avatar;
