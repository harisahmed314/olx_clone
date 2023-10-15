import React, { Fragment, useContext } from "react";
import { AuthContext } from "../contextStore/AuthContext";
import Login from "../Componets/Login/Login";
import Create from "../Componets/Create/Create";

const Createpost = () => {
  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      {user ? (
        <Create/>
      ) : (
        <>          
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default Createpost;