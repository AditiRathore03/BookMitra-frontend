import React from "react";
import "./middle.css";
import vector from "../assets/images/lib_vector.webp"; // Ensure the correct path
import { useNavigate } from "react-router-dom";

const MiddlePage = () => {
  const navigate = useNavigate();

  return (
    <div className="middle-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="top-box">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login to Start
          </button>
        </div>
        <div className="bottom-box">
  <h1>BOOK MITRA</h1>
  <h2>LIBRARY MANAGEMENT SYSTEM</h2>
  <p>
  Our platform helps you efficiently manage books, track borrowing history, 
    and streamline library operations. Whether you're a student searching for 
    your next great read or an admin organizing resources, we've got you covered.  
    Enjoy a smarter, faster, and hassle-free way to access the world of knowledge!
  </p>
 
</div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img src={vector} alt="Library" /> {/* Fixed image usage */}
      </div>
    </div>
  );
};

export default MiddlePage;
