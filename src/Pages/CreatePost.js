import React, { Fragment, useContext } from "react";
import Create from "../Componets/Create/Create";
import { AuthContext } from "../contextStore/AuthContext";
import Login from "../Componets/Login/Login";

const Createpost = () => {
  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      {user ? (
        <Create />
      ) : (
        <>          
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default Createpost;