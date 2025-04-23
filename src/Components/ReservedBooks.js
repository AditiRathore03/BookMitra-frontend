import React from 'react';
import './ReservedBooks.css';

function ReservedBooks() {
  // Book reservation data
  const reservations = [
    { name: "Pranav", book: "Rich Dad Poor Dad", date: "12/7/2021" },
    { name: "Sashank", book: "The Subtle Art", date: "10/7/2021" },
    { name: "Tanishq", book: "Wings Of Fire", date: "15/9/2021" },
    { name: "Akhil", book: "The Secret", date: "02/9/2021" },
    { name: "Surya", book: "Bad Guys", date: "21/7/2021" },
    { name: "Dinesh", book: "Giovanni Rovelli", date: "02/7/2021" }
  ];

  return (
    <div className="reserved-books-container">
      <h2 className="reserved-books-title">Books On Hold</h2>
      
      <div className="table-container">
        <div className="table-content">
          {/* Header Row */}
          <div className="table-header">
            <div className="header-cell">Name</div>
            <div className="header-cell">Book</div>
            <div className="header-cell">Date</div>
          </div>
          
          {/* Data Rows */}
          {reservations.map((reservation, index) => (
            <div 
              key={index} 
              className={`table-row ${index % 2 === 0 ? 'row-even' : 'row-odd'}`}
            >
              <div className="name-cell">
                <div className="user-initial">
                  {reservation.name.charAt(0)}
                </div>
                <span>{reservation.name}</span>
              </div>
              <div className="book-cell">
                <div className="book-accent"></div>
                <span>{reservation.book}</span>
              </div>
              <div className="date-cell">{reservation.date}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="return-reminder">
        Please return books within 14 days of checkout
      </div>
    </div>
  );
}

export default ReservedBooks;