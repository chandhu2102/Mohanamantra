import React, { useState } from "react";
import { auth } from "../firebase";
import "./LoginForm.css"; // Import the CSS file


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log("Login successful:", authUser);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={login}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
