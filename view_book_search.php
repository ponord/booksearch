<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Search</title>
    <link rel="stylesheet" href="book_search.css">
</head>
<body>
    <div class="container">
        <h1>Book Search</h1>
        <form id="searchForm">
            <input type="text" id="searchInput" placeholder="Enter a book title or author">
            <div>
                <label>
                    <input type="radio" name="searchType" value="title" checked> Title
                </label>
                <label>
                    <input type="radio" name="searchType" value="author"> Author
                </label>
            </div>
            <button type="button" id="searchButton">Search</button>
        </form>
        <div id="results"></div>
    </div>
    <script src="book_search.js"></script>
</body>
</html>