
document.addEventListener("DOMContentLoaded", () => {
    let books = [];

    // Fetch initial data from the JSON file
    fetch('http://localhost:3000/books') // Change this URL if you're using a different server or path
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            books = data;
            // Render each book using the renderBook function
            books.forEach(book => renderBook(book));
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
        modalBody.innerHTML = '';

        if (recommendedBooks.length > 0) {
            modalBody.innerHTML = `<p>If you loved reading "${selectedBook.title}", then you will love these books:</p>`;
            recommendedBooks.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-item');
                bookCard.innerHTML = `
                    <img src="${book.coverImage}" alt="${book.title}" class="img-fluid book-image" data-book-id="${book.id}">
                    <h5>${book.title}</h5>
                    <p>Author: ${book.author}</p>
                    <p>Genre: ${book.genre}</p>
                `;
                modalBody.appendChild(bookCard);
            });
        } else {
            modalBody.innerHTML = '<p>No similar books found.</p>';
        }

        $('#recommendationModal').modal('show');
        suggestions.classList.remove('show');
        suggestions.style.display = 'none'; // Hide dropdown after selection
    }
});

// Handle the modal body click to show the book summary
document.getElementById('modalBody').addEventListener('click', function(event) {
    if (event.target.classList.contains('book-image')) {
        const bookId = event.target.getAttribute('data-book-id');
        const book = books.find(book => book.id == bookId);

        const bookSummaryBody = document.getElementById('bookSummaryBody');
        bookSummaryBody.innerHTML = `
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

// Example usage: You can trigger this function to open a modal, and it will ensure no other modals are visible
$(document).ready(function() {
    // Example: Triggering the opening of a modal
    $('#searchButton').click(function() {
        // You can trigger any modal, like the recommendation modal
        openModal('#recommendationModal');
    });
});

// Optional: Ensure modals behave as expected
$('#bookSummaryModal').on('hidden.bs.modal', function() {
    document.body.style.overflow = ''; // Restore scrolling after modal close
    document.body.style.position = ''; // Reset position after modal close
})});
