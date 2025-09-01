import React, { useState } from "react";
import "./Login.css";
import { FaEyeSlash } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { toast } from "react-toastify";

function Login({ loginWatch, setLoginWatch }) {
  const [backToLogin, setBackToLogin] = useState(false);
  const [watchPassword, setWatchPasseword] = useState(false);

  const [managerLogin, setManagerLogin] = useState("");
  const [managerPassword, setManagerPassword] = useState("");

  const [errorInput1, setErrorInput1] = useState(false);
  const [errorInput2, setErrorInput2] = useState(false);

  const managment = () => {
    if (managerLogin == "codial" && managerPassword == "1234") {
      setBackToLogin(true);
      setLoginWatch(true);
      setManagerLogin("");
      setManagerPassword("");
      toast.success("Muvofaqiyatli kirdingiz");
    } else if (managerLogin == "" && managerPassword == "") {
      // alert("salom");
      setErrorInput1(true);
      setErrorInput2(true);
      setBackToLogin(true);
      setLoginWatch(false);
      setManagerLogin("");
      setManagerPassword("");
    } else {
      setBackToLogin(true);
      setLoginWatch(false);

      if (managerLogin != "codial" && managerPassword == "1234") {
        toast.error("Xato login");
        setErrorInput1(true);
        setManagerLogin("");
      } else if (managerLogin == "codial" && managerPassword != "1234") {
        setErrorInput2(true);
        toast.error("Xato parol");
        setManagerPassword("");
      } else {
        toast.error("Login va parol xato");
        setErrorInput1(true);
        setErrorInput2(true);
      }
    }
  };

  return (
    <>
      <div className={`login ${loginWatch ? "watch-home" : ""}`}>
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
              managment();
            }}
            className="login-right"
          >
            <h1>Login</h1>
            <input
              onChange={(e) => {
                setManagerLogin(e.target.value);
              }}
              onClick={() => {
                setErrorInput1(false);
              }}
              value={managerLogin}
              type="text"
              className={errorInput1 ? "fields" : ""}
              placeholder={`${errorInput1 ? "Loginni kiriting" : "Username"}`}
            />
            <div
              onClick={() => {
                setErrorInput2(false);
              }}
              className={`password-eye ${errorInput2 ? "fields" : ""}`}
            >
              <input
                onChange={(e) => {
                  setManagerPassword(e.target.value);
                }}
                value={managerPassword}
                type={watchPassword ? "text" : "password"}
                placeholder={`${errorInput2 ? "Parol kiriting" : "Parol:"}`}
              />
              <p
                onClick={() => {
                  watchPassword
                    ? setWatchPasseword(false)
                    : setWatchPasseword(true);
                }}
              >
                {watchPassword ? <BsEyeFill /> : <FaEyeSlash />}
              </p>
            </div>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
