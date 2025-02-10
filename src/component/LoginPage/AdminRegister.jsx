import React from "react";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";

const AdminRegister = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <ImageSlider />
       
        <div className="image-container">
          <img src="../assets/images/lib1.jpg" alt="Travel" />
        </div>
      </div>

      <div className="right-section">
        <h1>Admin Register</h1>
        <p>Create a new admin account</p>

        <form className="login-form">
          <div className="input-container">
            <i className="fas fa-user input-icon"></i>
            <input type="text" id="admin-username" placeholder="      Username" className="input-field" />
          </div>

          <div className="input-container">
            <i className="fas fa-envelope input-icon"></i>
            <input type="email" id="admin-email" placeholder="       Email" className="input-field" />
          </div>

          <div className="input-container">
            <i className="fas fa-lock input-icon"></i>
            <input type="password" id="admin-password" placeholder="      Password" className="input-field" />
          </div>

          <div className="input-container">
            <i className="fas fa-key input-icon"></i>
            <input type="text" id="admin-code" placeholder="        Access Code" className="input-field" />
          </div>

          <button type="submit" className="login-button">
            REGISTER
          </button>
        </form>

        <p className="register-link">
          Already have an account?{" "}
          <Link to="/admin-login" style={{ color: "#4f130b" }}>
            Login as Admin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
