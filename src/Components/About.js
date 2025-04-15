import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Welcome to <b>BookMitra</b>, a place where knowledge and technology come together to enhance the reading experience. Designed for book lovers, students, and researchers, our library offers a vast collection spanning various genres, including fiction, non-fiction, history, science, and technology. Whether you are searching for academic resources or leisurely reads, BookMitra provides a seamless and efficient way to explore an extensive range of books.<br/>

With an intuitive and user-friendly catalog, readers can easily search for books, filter by genre, and navigate through the collection with pagination. Features like a personalized favorites section and dark mode ensure a comfortable and customized browsing experience. Our system is designed to make book discovery effortless, allowing users to find and manage their reading lists with ease.<br/>

At BookMitra, we believe in the power of books to inspire, educate, and transform lives. Our mission is to create an accessible and engaging space for readers, making knowledge more available and reading more enjoyable for everyone.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
