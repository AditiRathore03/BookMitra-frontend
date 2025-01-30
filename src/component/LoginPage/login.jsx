import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

import ImageSlider from "./ImageSlider";
import AdminLogin from "./AdminLogin";

const LoginPage = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <div className="login-container">
      <div className="left-section">
        <ImageSlider />
        
        <div className="image-container">
          <img src="../../assets/images/lib1.jpg" alt="Travel" />
        </div>
      </div>

      <div className="right-section">
        <div className="login-toggle">
          <p
            className={`toggle-option ${!showAdminLogin ? "active" : ""}`}
            onClick={() => setShowAdminLogin(false)}
          >
            Login as User
          </p>
          <p
            className={`toggle-option ${showAdminLogin ? "active" : ""}`}
            onClick={() => setShowAdminLogin(true)}
          >
            Login as Admin
          </p>
        </div>

        {/* Conditional rendering for AdminLogin or User login form */}
        {showAdminLogin ? (
          <AdminLogin showAdminLogin={showAdminLogin} setShowAdminLogin={setShowAdminLogin} />
        ) : (
          <>
            <h1>Student Login</h1>
            <p>Login with Email</p>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-container">
                <i className="fas fa-envelope input-icon"></i>
                <input
                  type="email"
                  id="email"
                  placeholder="       Email"
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <i className="fas fa-lock input-icon"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="      Password"
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
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "#4f130b" }}>Register Now</Link>

            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
