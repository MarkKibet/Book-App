document.addEventListener("DOMContentLoaded", () => {
    let books = [];

    // Fetch initial data from the JSON file
    fetch('http://localhost:3000/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        books = data;
        const fewBooks = books.slice(0, 40); // Adjust the number to display as needed
        fewBooks.forEach(book => renderBook(book));
    })
    .catch(error => {
        console.error('Error fetching the books:', error);
    });

    // Function to handle the input search event
    document.getElementById('currentBook').addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        const suggestions = document.getElementById('suggestions');
        suggestions.innerHTML = ''; // Clear previous suggestions

        if (query.length > 0) {
            books.forEach(book => {
                if (book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)) {
                    const suggestionItem = document.createElement('a');
                    suggestionItem.classList.add('dropdown-item');
                    suggestionItem.href = '#';
                    suggestionItem.dataset.bookId = book.id;
                    suggestionItem.innerHTML = `
                        <img src="${book.coverImage}" alt="${book.title}" style="width: 50px; height: 75px; object-fit: cover;">
                        <div>
                            <strong>${book.title}</strong><br>
                            <small>${book.author}</small>
                        </div>
                    `;
                    suggestions.appendChild(suggestionItem);
                }
            });

            suggestions.classList.add('show');
            suggestions.style.display = 'block';
        } else {
            suggestions.classList.remove('show');
            suggestions.style.display = 'none'; 
        }
    });

    document.getElementById('searchButton').addEventListener('click', function() {
        const searchContainer = document.querySelector('.search-container');
        const searchInput = document.getElementById('currentBook');
    
        // Toggle the active class to show/hide the input field
        if (searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
            searchInput.value = ''; // Clear the input value
            searchInput.blur(); // Remove focus
        } else {
            searchContainer.classList.add('active');
            searchInput.focus(); // Focus input field
        }
    });
    
    // Function to render books
function renderBook(book) {
    const recommendationContainer = document.getElementById('recommendationContainer');
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-item', 'col-md-3');
    bookCard.innerHTML = `
        <img src="${book.coverImage}" alt="${book.title}" class="img-fluid book-image" data-book-id="${book.id}">
        <h5>${book.title}</h5>
        <p>Author: ${book.author}</p>
        <p>Genre: ${book.genre}</p>
    `;
    
    // Add event listener to the cover image for opening the summary modal
    bookCard.querySelector('.book-image').addEventListener('click', function () {
        const bookId = this.getAttribute('data-book-id');
        const selectedBook = books.find(b => b.id == bookId);

        if (selectedBook) {
            // Populate and show the modal with the book's details
            const bookSummaryBody = document.getElementById('bookSummaryBody');
            bookSummaryBody.innerHTML = `
                <img src="${selectedBook.coverImage}" alt="${selectedBook.title}" class="img-fluid book-image">
                <h2>${selectedBook.title}</h2>
                <p><strong>Author:</strong> ${selectedBook.author}</p>
                <p><strong>Genre:</strong> ${selectedBook.genre}</p>
                <p><strong>Summary:</strong> ${selectedBook.summary}</p>
            `;

            $('#bookSummaryModal').modal('show');
        }
    });

    recommendationContainer.appendChild(bookCard);
}

   // Event listener for selecting a suggestion
document.getElementById('suggestions').addEventListener('click', function(event) {
    if (event.target.closest('.dropdown-item')) {
        const bookId = event.target.closest('.dropdown-item').dataset.bookId;
        const selectedBook = books.find(book => book.id == bookId);

        // Filter books for recommendations
        const recommendedBooks = books.filter(book =>
            (book.author.toLowerCase() === selectedBook.author.toLowerCase() || book.genre.toLowerCase() === selectedBook.genre.toLowerCase()) &&
            book.title.toLowerCase() !== selectedBook.title.toLowerCase()
        );

        // Update modal with recommendations
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `<p>If you loved reading "${selectedBook.title}", then you will love these books:</p>`;
        const bookList = document.createElement('div');
        bookList.classList.add('book-list');

        if (recommendedBooks.length > 0) {
            recommendedBooks.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-item');
                bookCard.innerHTML = `
                    <img src="${book.coverImage}" alt="${book.title}" class="img-fluid book-image" data-book-id="${book.id}">
                    <h5>${book.title}</h5>
                    <p>Author: ${book.author}</p>
                    <p>Genre: ${book.genre}</p>
                `;
                bookList.appendChild(bookCard);
            });
        } else {
            bookList.innerHTML = '<p>No similar books found.</p>';
        }

        modalBody.appendChild(bookList);
        $('#recommendationModal').modal('show');
        suggestions.classList.remove('show');
        suggestions.style.display = 'none'; // Hide dropdown after selection
    }
});

    // Password validation
const correctPassword = "Marco@2650"; // Replace with your actual password

document.getElementById('addBookButton').addEventListener('click', function() {
    $('#passwordModal').modal('show');
});

document.getElementById('passwordSubmit').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput').value;
    if (passwordInput === correctPassword) {
        $('#passwordModal').modal('hide');
        $('#addBookModal').modal('show');
    } else {
        alert("Incorrect password!");
    }
});

// Form submission
document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookCoverImage = document.getElementById('bookCoverImage').value;
    const bookDownloadLink = document.getElementById('bookDownloadLink').value;
    const bookSummary = document.getElementById('bookSummary').value;

    const bookData = {
        title: bookTitle,
        author: bookAuthor,
        coverImage: bookCoverImage,
        downloadLink: bookDownloadLink,
        summary: bookSummary
    };

    fetch('http://localhost:3000/books', { // Update with your JSON server URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Book added:', data);
        alert("Book added successfully!");
        $('#addBookModal').modal('hide');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Failed to add the book.");
    });
});

    function addToFavorites(book) {
        fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then(data => {
            alert('Book added to favorites!');
        })
        .catch(error => {
            console.error('Error adding to favorites:', error);
            alert('Failed to add book to favorites.');
        });
    }
    
    // Handle Add to Favorites button click
    document.getElementById('addToFavoritesButton').addEventListener('click', function() {
        const bookId = document.querySelector('#bookSummaryModal .book-image').dataset.bookId;
        const book = books.find(book => book.id == bookId);
        addToFavorites(book);
    });
    
    // Function to start the download process
    function downloadBook(book) {
        const downloadUrl = book.downloadLink; // Get download link from JSON
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${book.title}.pdf`; // Adjust the file type as needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    // Handle Download button click
    document.getElementById('downloadButton').addEventListener('click', function() {
        const bookId = document.querySelector('#bookSummaryModal .book-image').dataset.bookId;
        const book = books.find(book => book.id == bookId);
        downloadBook(book);
    });
    
    // Handle the modal body click to show the book summary
document.getElementById('modalBody').addEventListener('click', function(event) {
    if (event.target.classList.contains('book-image')) {
        const bookId = event.target.getAttribute('data-book-id');
        const book = books.find(book => book.id == bookId);

        const bookSummaryBody = document.getElementById('bookSummaryBody');
        bookSummaryBody.innerHTML = `
            <img src="${book.coverImage}" alt="${book.title}" class="img-fluid book-image" data-book-id="${book.id}">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Summary:</strong> ${book.summary}</p>
        `;

        $('#bookSummaryModal').modal('show');
    }
});
    // Close the suggestions dropdown if clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#currentBook') && !event.target.closest('#suggestions')) {
            const suggestions = document.getElementById('suggestions');
            suggestions.classList.remove('show');
            suggestions.style.display = 'none'; 
        }
    });
    
    function openModal(modalId) {
        // Close all modals first
        $('.modal').modal('hide');
        // Open the desired modal
        $(modalId).modal('show');
    }
    // Ensure modals behave as expected
    $('#bookSummaryModal').on('hidden.bs.modal', function() {
        document.body.style.overflow = ''; // Restore scrolling after modal close
        document.body.style.position = ''; // Reset position after modal close
    });
    
    // Function to render books
    function renderBook(book) {
        const recommendationContainer = document.getElementById('recommendationContainer');
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-item', 'col-md-3');
        bookCard.innerHTML = `
            <img src="${book.coverImage}" alt="${book.title}" class="img-fluid book-image" data-book-id="${book.id}">
            <h5>${book.title}</h5>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
        `;
        recommendationContainer.appendChild(bookCard);
    }
    })