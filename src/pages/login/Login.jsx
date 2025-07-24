import React, { useState } from "react";
import "./Login.css";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import { BsEyeFill } from "react-icons/bs";

function Login() {
  const [backToLogin, setBackToLogin] = useState(false);
  const [watchPassword, setWatchPasseord] = useState(false);
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
          <div></div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="login-right"
          >
            <h1>Login</h1>
            <input type="text" placeholder="Username :" />
            <div className="password-eye">
              <input
                type={watchPassword ? "text" : "password"}
                placeholder="Password :"
              />{" "}
              <p
                onClick={() => {
                  watchPassword
                    ? setWatchPasseord(false)
                    : setWatchPasseord(true);
                }}
              >
                {watchPassword ? <BsEyeFill /> : <FaEyeSlash />}
              </p>
            </div>
            <button>Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
