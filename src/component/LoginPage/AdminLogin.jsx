import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const AdminLogin = ({ setShowAdminLogin }) => {
  return (
    <div className="admin-login-container" >

      

      <h1>Admin Login</h1>
      <p>Enter your credentials below:</p>
      <form className="login-form" >
        <div className="input-container" >
          <i className="fas fa-envelope input-icon"></i>
          <input
            type="email"
            id="admin-email"
            placeholder="     Admin Email"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <i className="fas fa-lock input-icon"></i>
          <input
            type="password"
            id="admin-password"
            placeholder="      Admin Password"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <i className="fas fa-key input-icon"></i>
          <input
            type="text"
            id="admin-code"
            placeholder="        Access Code"
            className="input-field"
          />
        </div>

        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
      <div className="social-login">
              <p>Or</p>
              <div className="social-icons">
                <img src="../../assets/logos/google.svg" alt="Google" id="google-login" />
              </div>
            </div>

            <p className="register-link">
  Already have an account?{" "}
  <Link to="/admin-register" style={{ color: "#4f130b" }}>
    Register
  </Link>
</p>
    </div>
  );
};

export default AdminLogin;


