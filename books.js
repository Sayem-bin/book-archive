const searchBook = () => {
    const bookSearch = document.getElementById('search-field');
    const searchText = bookSearch.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}

