import React from 'react';
import './News.css';

function News() {
    // Competition data
    const competitions = [
        { title: "Competition-1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Competition-2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Competition-3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Competition-4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Competition-5", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ];

    // Quiz data
    const quizzes = [
        { title: "Quiz-1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Quiz-2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Quiz-3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Quiz-4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Quiz-5", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ];

    return (
        <div className="news-container">
            <h2 className="news-title">Updates for You</h2>
            
            <div className="news-content">
                <div className="news-column">
                    <div className="news-card">
                        <h3 className="news-subtitle">Competitions</h3>
                        <div className="news-items">
                            {competitions.map((competition, index) => (
                                <div key={`comp-${index}`} className="news-item competition-item">
                                    <div className="news-item-header">
                                        <div className="item-icon competition-icon">{index + 1}</div>
                                        <h4 className="item-title">{competition.title}</h4>
                                    </div>
                                    <p className="item-description">{competition.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="news-column">
                    <div className="news-card">
                        <h3 className="news-subtitle">Online Quiz</h3>
                        <div className="news-items">
                            {quizzes.map((quiz, index) => (
                                <div key={`quiz-${index}`} className="news-item quiz-item">
                                    <div className="news-item-header">
                                        <div className="item-icon quiz-icon">Q</div>
                                        <h4 className="item-title">{quiz.title}</h4>
                                    </div>
                                    <p className="item-description">{quiz.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;