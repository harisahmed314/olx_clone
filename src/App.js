import React from "react";
import "./App.css";
import ContextAuth from "./contextStore/AuthContext";
import ContextPost from "./contextStore/PostContext";
import MainRoutes from "./Routes/MainRoutes";
import ContextAllPost from "./contextStore/ContextAllPost";


function App() {
  return (
    <div>
      <ContextAuth>
        <ContextAllPost>
          <ContextPost>
            <MainRoutes />
          </ContextPost>
        </ContextAllPost>
      </ContextAuth>
    </div>
  );
}

export default App;