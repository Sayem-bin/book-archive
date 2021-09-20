const searchBook = () => {
    const bookSearch = document.getElementById('search-field');
    const searchText = bookSearch.value;

    bookSearch.value = '';
    // console.log(searchText);
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => bookSearchResult(data.docs))
}

const bookSearchResult = books => {
    const searchResult = document.getElementById('search-result');
    // searchResult.textContent = '';
    books.forEach(book => {

        const div = document.createElement('div')
        const imgUrl = "https://covers.openlibrary.org";
        console.log(imgUrl);
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 ">
                <div class="card-body">
                    <img src="" class="card-img-top" alt="...">
                    <h4 class="card-title ">${book.subject} </h4>    
                    <h6 class="card-title "> Author : ${book.author_name} </h4>
                    <h6 class="card-title ">First Published : ${book.first_publish_year} </h6>
                </div>
        </div>
        `
        searchResult.appendChild(div);
    })


}
