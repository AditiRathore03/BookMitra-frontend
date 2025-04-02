// import React from "react";
import "./Allbooks.css";

// function Allbooks() {
//   return (
//     <div className="books-page">
//       <div className="books">
//         <div className="book-card">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU"
//             alt=""
//           ></img>
//           <p className="bookcard-title">Wings Of Fire</p>
//           <p className="bookcard-author">By Pranavdhar</p>
//           <div className="bookcard-category">
//             <p>Auto Biography</p>
//           </div>
//           <div className="bookcard-emptybox"></div>
//         </div>
//         <div className="book-card">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
//             alt=""
//           ></img>
//           <p className="bookcard-title">The Power Of Your Subconscious Mind</p>
//           <p className="bookcard-author">By Joseph</p>
//           <div className="bookcard-category">
//             <p>Psychology</p>
//           </div>
//           <div className="bookcard-emptybox"></div>
//         </div>
//         <div className="book-card">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFiDRQ7a-Oo-CnMmnbIMApP1Cq9B5bYx-UA&usqp=CAU"
//             alt=""
//           ></img>
//           <p className="bookcard-title">Elon Musk</p>
//           <p className="bookcard-author">By Elon</p>
//           <div className="bookcard-category">
//             <p>Auto Biography</p>
//           </div>
//           <div className="bookcard-emptybox"></div>
//         </div>
//         <div className="book-card">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
//             alt=""
//           ></img>
//           <p className="bookcard-title">The Subtle Art Of Not Giving A Fuck</p>
//           <p className="bookcard-author">By Mark Manson</p>
//           <div className="bookcard-category">
//             <p>COMIC</p>
//           </div>
//           <div className="bookcard-emptybox"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Allbooks;


import React, { useEffect, useState } from 'react';
// import './LibraryBookCatalog.css';

export default function LibraryBookCatalog() {
  const [allBooks, setAllBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [modalBook, setModalBook] = useState(null);

  const maxResults = 20;
  const totalBooksToFetch = 100;

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    if (startIndex >= totalBooksToFetch) return;

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=relevance&maxResults=${maxResults}&startIndex=${startIndex}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.items) return;

        const newBooks = data.items.map((book) => {
          const info = book.volumeInfo;
          return {
            title: info.title || 'No Title',
            authors: info.authors ? info.authors.join(', ') : 'Unknown Author',
            thumbnail:
              info.imageLinks?.thumbnail ||
              'https://via.placeholder.com/120x180?text=No+Cover',
            genres: info.categories || ['General'],
            summary: info.description || 'No summary available.',
          };
        });

        setAllBooks((prev) => [...prev, ...newBooks]);
        setStartIndex((prev) => prev + maxResults);
      })
      .catch((error) => console.error('Error fetching books:', error));
  };

  const uniqueGenres = Array.from(new Set(allBooks.flatMap((book) => book.genres)));

  const filteredBooks = allBooks.filter(
    (book) =>
      (selectedGenre === 'all' ||
        book.genres.some((genre) =>
          genre.toLowerCase().includes(selectedGenre)
        )) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authors.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="library-container">
      <div id="controls">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="all">All Genres</option>
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre.toLowerCase()}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div id="books-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="book-card"
              onClick={() => setModalBook(book)}
            >
              <img src={book.thumbnail} alt="Book Cover" />
              <div className="book-title">{book.title}</div>
              <div className="book-author">{book.authors}</div>
              <div className="book-genres">{book.genres.join(', ')}</div>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>

      <button
        id="load-more"
        onClick={fetchBooks}
        disabled={startIndex >= totalBooksToFetch}
      >
        {startIndex >= totalBooksToFetch
          ? 'All Books Loaded'
          : 'Load More Books'}
      </button>

      {modalBook && (
        <div className="modal" onClick={() => setModalBook(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setModalBook(null)}>
              &times;
            </span>
            <h2>{modalBook.title}</h2>
            <p>{modalBook.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
}
