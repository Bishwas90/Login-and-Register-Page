import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Login.css";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  return [visible, toggleVisibility];
};

const Login = () => {
  const [passwordVisible, togglePasswordVisibility] = usePasswordToggle();
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="heading">Login</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <div className={`input-icon ${isPasswordFocused ? "blur-icon" : ""}`}>
            <input type="email" name="email" required />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <div className="input-icon">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              required
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <IoIosEyeOff />}
            </span>
          </div>
        </div>
        <div className="remember-me-container">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <div className="button-container">
          <button type="submit" className="login-button">
            Login
          </button>
          <span className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </span>
        </div>
        <div className="signup-container">
          <span>
            New Here? <Link to="/register">Create an Account</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
