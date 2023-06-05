import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { Homepage } from '../Pages/HomePage'

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const test = {
      userName: "abc", 
      pw: "123"
    }

    // Store token in localStorage
    localStorage.setItem(SignIn.JSON.stringify(test))
    const onHandleRead = () => {
      const i = JSON.parse(localStorage.getItem(test))
      console.log(i)
    }
   
    // Navigate user to home page
    <Routes>
    <Route path = 'homepage' exact={true} element ={<Homepage />}/>
    </Routes>
    };

  return (
    <div>
      <h1>Welcome to the best App!</h1>
      <div id="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <br />
      </div>
    </div>
  );
};
