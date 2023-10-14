import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Firebase } from "../../firebase/config";
import RoundLoading from "../Loading/RoundLoading";
import "./Login.css";


function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  const navigation = useNavigate()
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigation("/")
    }).catch((error)=>{
      alert(error.message)
    })

  };
  return (<>
    {loading && <RoundLoading/> }
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="../../../Images/olx-logo.png" alt=""></img>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="sijeesh@gmail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div> 
    </div>
    </>
  );
}

export default Login;