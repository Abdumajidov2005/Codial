import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [backToLogin, setBackToLogin] = useState(false);
  return (
    <>
      <div className="login">
        <div className={`login-page ${backToLogin ? "logins" : ""}`}>
          <div className="login-left">
            <div
              onClick={() => {
                backToLogin ? setBackToLogin(false) : setBackToLogin(true);
              }}
              className="rasm"
            >
              <img src="/imgs/image.png" alt="" />
            </div>
            <h1>Codial</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="login-right"
          >
            <input type="text" placeholder="Username :" />
            <input type="text" placeholder="Password :" />
            <button >Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
