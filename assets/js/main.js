function toggleSearch(searchId, buttonId) {
    const searchBar = document.getElementById(searchId);
    const searchButton = document.getElementById(buttonId);

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('show-search');
    });
}

function toggleMode() {
    var body = document.body;
    var logo = document.getElementById('logo');

    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    logo.src = body.classList.contains('dark-mode') ? "/assets/img/white-logo.webp" : "/assets/img/black-logo.webp";
}

toggleSearch('search-bar', 'search-button')
const toggle = document.getElementById('toggle');
toggle.addEventListener('change', toggleMode);
