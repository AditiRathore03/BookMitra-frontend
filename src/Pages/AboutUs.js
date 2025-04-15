import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Aditi Rathore",
      role: "Full Stack Developer",
      image:  "https://cdn-icons-png.flaticon.com/512/2922/2922561.png", 
    },
    {
      name: "Adarsh Singh",
      role: "Frontend Engineer",
       image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // You can replace this later
    },
  ];

  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>About BookMitra</h1>
        <p>Empowering library users with a modern, seamless book management experience 📚💻</p>
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1000&q=80"
          alt="Library innovation"
        />
      </header>

      <section className="about-section">
        <h2>Our Project</h2>
        <div className="about-content">
        <img
  className="section-img"
  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
  alt="Project concept"
/>

          <p>
            <strong>BookMitra</strong> is a library management and book discovery platform designed to simplify and enhance the library experience.
            From seamless book borrowing and inventory management to personalized recommendations powered by machine learning,
            BookMitra bridges the gap between technology and traditional libraries.
          </p>
          <p>
            Our goal is to make libraries more interactive, organized, and reader-friendly. Whether you're a student, librarian, or just a book enthusiast —
            BookMitra is your go-to platform to explore, manage, and fall in love with reading again.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <img
            className="section-img"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Teamwork"
          />
          <p>
            We are a team of passionate developers dedicated to building impactful software that solves real-world problems. 
            BookMitra was born out of a shared vision to modernize the way libraries operate, making them more accessible and tech-driven.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        <p>Made with ❤️ by Team BookMitra — Aditi & Adarsh</p>
      </footer>
    </div>
  );
}
