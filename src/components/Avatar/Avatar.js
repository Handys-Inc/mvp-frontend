import React, { useContext } from "react";

import { AuthContext } from "../../app/Auth/AuthContext";

function Avatar() {
  const { currentUser } = useContext(AuthContext);

  console.log("current user", currentUser);
  return (
    <>
      {currentUser !== null && (
        <div className="w-10 h-10 rounded-full flex font-bold items-center justify-center bg-lightSecondary">
          <p>
            {currentUser.user.firstName.split("")[0]}
            {currentUser.user.lastName.split("")[0]}
          </p>
        </div>
      )}
    </>
  );
}

export default Avatar;
