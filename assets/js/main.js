function toggleSearch(searchId, buttonId) {
    const searchBar = document.getElementById(searchId);
    const searchButton = document.getElementById(buttonId);

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('show-search');
    });
}

function setMode(mode) {
    localStorage.setItem("theme", mode);
  
    document.body.classList.remove('dark-mode', 'light-mode');
  
    document.body.classList.add(mode);
  
    const logo = document.getElementById('logo');
    if (mode === 'dark-mode') {
      logo.src = "/assets/img/white-logo.webp";
    } else {
      logo.src = "/assets/img/black-logo.webp";
    }

    const toggle = document.getElementById('toggle');
    toggle.checked = mode === 'light-mode';
}

function toggleMode() {
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newMode = currentMode === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setMode(newMode);
}

function setInitialMode() {
    // Get the user's theme preference from local storage, if it's available
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setMode(savedTheme);
    } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            setMode("dark-mode");
        } else {
            setMode("light-mode");
        }
    }
}

toggleSearch('search-bar', 'search-button');
const toggle = document.getElementById('toggle');
toggle.addEventListener('change', toggleMode);

setInitialMode();