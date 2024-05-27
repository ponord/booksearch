<?php
if (isset($_GET['type']) && isset($_GET['query'])) {
    $type = $_GET['type'];
    $query = urlencode($_GET['query']);

    $url = "http://openlibrary.org/search.json?$type=$query";

    $response = file_get_contents($url);
    echo $response;
}
?>