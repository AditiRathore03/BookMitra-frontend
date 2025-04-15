import "./Allbooks.css";
import React, { useEffect, useState } from 'react';

export default function LibraryBookCatalog() {
  const [allBooks, setAllBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [modalBook, setModalBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
          genre.toLowerCase().includes(selectedGenre.toLowerCase())
        )) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authors.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBookClick = (book) => {
    console.log("Book clicked:", book);
    setModalBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalBook(null);
  };

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
              onClick={() => handleBookClick(book)}
            >
              <img src={book.thumbnail} alt={`${book.title} Cover`} />
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

      {showModal && modalBook && (
        <div className="modal" style={modalStyles.overlay} onClick={closeModal}>
          <div className="modal-content" style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
            <span className="close" style={modalStyles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <h2>{modalBook.title}</h2>
            <p><strong>Author:</strong> {modalBook.authors}</p>
            <p><strong>Genres:</strong> {modalBook.genres.join(', ')}</p>
            <div className="book-summary">
              <h3>Summary</h3>
              <p>{modalBook.summary}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Inline styles to ensure modal displays properly
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '80%',
    maxHeight: '80vh',
    overflow: 'auto'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer'
  }
};