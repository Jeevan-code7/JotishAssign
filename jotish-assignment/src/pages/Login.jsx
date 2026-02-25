import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // if (username == "textuser" && password == "Test123") {
    //   navigate("/List");
    // }
  }
  return (
    <div className="h-screen flex justify-center items-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input
          className="w-full p-2 border mb-3 rounded"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 border mb-3 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="mb-2 text-orange-400">forgot pasword?</p>
        <button
          onClick={handleLogin}
          className="bg-orange-400 text-white w-full p-2 rounded hover:bg-orange-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
