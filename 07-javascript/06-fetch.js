const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');
const loadingIndicator = document.querySelector('#loading');


const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  try {
    const response = await fetch(url);
    const books = await response.json();

    // Remove loading indicator
    loadingIndicator.remove();

    books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book', 'text-center', 'mb-4');

      bookElement.innerHTML = `
        <h3>${book.name}</h3>
        <p>by ${book.authors.join(', ')}</p>
        <p>${new Date(book.released).getFullYear()}</p>
        <p>${book.numberOfPages} pages</p>
      `;

      app.appendChild(bookElement);
    });

    // Center the books
    app.classList.add('d-flex', 'flex-column', 'align-items-center');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData(url);