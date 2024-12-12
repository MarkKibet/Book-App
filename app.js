const books = [
    { id: 1, title: "Angels and Demons", author: "Dan Brown", genre: "Mystery Thriller", coverImage: "/images/images (10).jpeg", summary: "Angels and Demons is a mystery thriller by Dan Brown. The story begins with the murder of physicist Leonardo Vetra at the CERN research facility in Switzerland. Vetra’s body is found branded with a mysterious symbol, and Robert Langdon, a Harvard symbologist, is called to investigate. He discovers that Vetra had been working on antimatter, a highly volatile substance, which has gone missing. Langdon learns that the Illuminati, an ancient secret society that opposes the Catholic Church, has stolen the antimatter and plans to use it to destroy Vatican City during the Papal Conclave, a major event where a new pope is to be elected.Langdon teams up with Vetra’s daughter, Vittoria, to solve the puzzle. Together, they race against time, traveling through Rome and deciphering clues hidden in famous works of art, religious symbols, and architecture. As they uncover a deadly conspiracy, they are hunted by a mysterious assassin. The pair must navigate a web of religious history, scientific discovery, and deep-rooted secrets to stop the Illuminati’s plan. the novel explores themes of science versus religion and the power of secret societies in shaping history. The final twist challenges the characters' beliefs and forces readers to question the balance between faith and reason." },
    { id: 2, title: "Blind Spot: Why Science Cannot Ignore Human Experience", author: "Adam Frank, Marcelo Gleiser, and Evan Thompson", genre: "Science, Philosophy", coverImage: "/images/images (4).jpeg" },
    { id: 3, title: "The Thursday Murder Club", author: "Richard Osman", genre: "Mystery, Crime Fiction", coverImage: "/images/images (8).jpeg" },
    { id: 4, title: "Then She Was Gone", author: "Lisa Jewell", genre: "Psychological Thriller", coverImage: "/images/images (9).jpeg" },
    { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical Fiction", coverImage: "/images/download (4).jpeg" },
    { id: 6, title: "Inferno", author: "Dan Brown", genre: "Mystery Thriller", coverImage: "images/images (13).jpeg", summary: "Inferno follows Harvard symbologist Robert Langdon, who is thrust into a race against time to unravel a puzzle tied to one of the most famous works of literature in history: Dante Alighieri's Divine Comedy. Waking up in a hospital in Florence, Italy, with no memory of the past 36 hours, Langdon is soon thrust into a mysterious plot involving a bioterrorist threat. Working alongside Dr. Sienna Brooks, a brilliant doctor, Langdon discovers that a bio-weapon designed to reduce the world's population has been hidden, and its activation is imminent. The key to finding this weapon lies in the cryptic clues embedded in Dante's Inferno — the first part of The Divine Comedy, which explores the nine circles of Hell. Langdon and Sienna race across historical cities in Italy, facing increasingly dangerous adversaries, as they try to decode the verses and symbols leading to the weapon's location. As they navigate through stunning landmarks like the Florence Cathedral and the Palazzo Vecchio, Langdon and Sienna uncover secrets that challenge their understanding of the modern world and the very future of humanity. The novel climaxes in a shocking twist, revealing the true nature of the plot and forcing Langdon to make a life-altering decision." },
    { id: 7, title: "Veronika Decides to Die", author: "Paulo Coelho", genre: "Psychological Drama", coverImage: "/images/download (5).jpeg" },
    { id: 8, title: "The Silent Patient", author: "Alex Michaelides", genre: "Psychological Thriller", coverImage: "/images/images (7).jpeg" },
    { id: 9, title: "Where the Crawdads Sing", author: "Delia Owens", genre: "Mystery, Literary Fiction", coverImage: "images/owens.jpeg" },
    { id: 10, title: "Becoming", author: "Michelle Obama", genre: "Biography, Memoir", coverImage: "images/becoming.jpeg" },
    {id: 11, title: "The Republic", author: "Plato", genre: "Philosophy", coverImage: "images/images (2).jpeg"},
    {id: 12, title: "State of Fear", author: "Michael Crichton", genre: "Science Fiction, Techno-Thriller", coverImage: "images/images (11).jpeg"},
    {id: 13, title: "Timeline", author: "Michael Crichton", genre: "Science Fiction, Time travel, Adventure, Historical Fiction", coverImage:"images/download (3).jpeg"},
    {id: 14, title: "Jurassic Park", author: "Michael Crichton", genre: "Science Fiction, Adventure, Historical Fiction", coverImage:"images/download.png"},
    {id: 15, title: "The Lost Symbol", author: "Dan Brown", genre: "Mystery Thriller, Historical Fiction, Conspiracy Fiction", coverImage: "images/symbol.jpeg", summary: "The Lost Symbol is the third book in Dan Brown's Robert Langdon series. The story takes place in Washington, D.C., where Langdon is called to give a lecture at the U.S. Capitol, only to discover that his mentor, Peter Solomon, has been kidnapped. In his place, a gruesome clue is left behind: Solomon’s severed hand, positioned in a Masonic gesture. Langdon teams up with Katherine Solomon, Peter’s sister, to solve a trail of cryptic symbols, uncovering secrets tied to Freemasonry and the mysterious Lost Word. As they race through the city, they discover that this ancient secret holds immense power and could change the world forever. But a dangerous villain, Mal’akh, is also after the Lost Word, and his motives are deadly.The novel delves into the world of Freemasonry, secret societies, and the search for hidden knowledge, blending historical references with modern conspiracy. *The Lost Symbol* explores the balance between science, religion, and human consciousness, while Langdon and Katherine must decode ancient symbols to stop a global catastrophe. It’s a fast-paced thriller filled with puzzles, intrigue, and hidden truths." },
    {id: 16, title: "Origin", author: "Dan Brown", genre: "Mystery Thriller, Science Fiction, Techno-Thriller", coverImage: "images/origin.jpeg", summary: "In Origin Harvard professor Robert Langdon is once again thrust into a high-stakes mystery, this time set in the modern art world and the cutting-edge world of artificial intelligence. The novel begins with Langdon being invited to the Guggenheim Museum in Bilbao, Spain, by his friend and billionaire futurist, Edmond Kirsch. Kirsch is on the verge of revealing two groundbreaking scientific discoveries that will answer humanity’s biggest questions: *Where do we come from?* and *Where are we going?* Before he can share his findings with the world, Kirsch is murdered, leaving Langdon and museum director Ambra Vidal to uncover the truth behind his discoveries. As they race through Spain, the duo is caught in a deadly game of cat-and-mouse with shadowy figures, while trying to decode the clues left behind by Kirsch.The novel delves into the intersection of science, religion, and technology, exploring themes of artificial intelligence, the search for truth, and the potential for a future reshaped by technological advances. At the heart of the story is the question of whether humanity's future will be determined by science and technology or by age-old religious beliefs. As Langdon and Vidal follow a trail of encrypted messages, they uncover a revelation that could radically change the course of history." },
    {id: 17, title:"The Da Vinci Code", author: "Dan Brown", genre: "Mystery Thriller", coverImage: "images/davinci.jpeg", summary: "The Da Vinci Code is a fast-paced mystery thriller that explores the intersection of art, history, and religion. The novel follows Robert Langdon, a Harvard symbologist, who is called to the Louvre Museum in Paris after the curator, Jacques Saunière, is found murdered. Before his death, Saunière left behind a series of cryptic clues that Langdon and cryptologist Sophie Neveu must decipher to uncover a secret that has been hidden for centuries. As they race to unravel the mystery, Langdon and Sophie discover that the murder is connected to an ancient society, Opus Dei, and a powerful secret about the Holy Grail. They journey through Europe, decoding religious symbols, ancient texts, and famous artworks—most notably, Leonardo da Vinci’s The Last Supper—as they attempt to prevent a devastating revelation from being uncovered. Throughout their pursuit, Langdon and Sophie must confront a centuries-old conspiracy and a dangerous adversary who will stop at nothing to keep the truth hidden. The story raises questions about the authenticity of historical and religious beliefs, blending real historical events with fictional elements to create an explosive narrative that keeps readers on the edge of their seats. The novel is filled with suspense, unexpected twists, and thought-provoking questions about religion, history, and the nature of truth."}
];

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
});
