document.getElementById('searchButton').onclick = () => {
    const searchType = document.querySelector('input[name="searchType"]:checked').value;
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert('Please enter a search term.');
        return;
    }

    fetch(`book_search.php?type=${searchType}&query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            if (data.docs) {
                data.docs.slice(0, 10).forEach(book => {
                    const bookDiv = document.createElement('div');
                    bookDiv.classList.add('book');
                    bookDiv.innerHTML = `
                        <h3>${book.title}</h3>
                        <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
                        <p><strong>ISBN:</strong> ${book.isbn ? book.isbn[0] : 'N/A'}</p>`;
                    resultsDiv.appendChild(bookDiv);
                });
            } else {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            }
        });
};