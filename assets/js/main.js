function toggleSearch(searchId, buttonId) {
    const searchBar = document.getElementById(searchId);
    const searchButton = document.getElementById(buttonId);

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('show-search');
    });
}

// function setMode(mode) {
//     const background = document.getElementById('background');

//     localStorage.setItem("theme", mode);

//     document.body.classList.remove('dark-mode', 'light-mode');
//     background.classList.remove('stars', 'sky');
  
//     document.body.classList.add(mode);
  
//     const logo = document.getElementById('logo');
//     if (mode === 'dark-mode') {
//         background.classList.add('stars');
//         logo.src = "/assets/img/webp/white-logo.webp";
//     } else {
//         background.classList.add('sky');
//         logo.src = "/assets/img/webp/black-logo.webp";
//     }

    // const toggle = document.getElementById('toggle');
    // toggle.checked = mode === 'light-mode';
// }

// function toggleMode() {
//     const currentMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
//     const newMode = currentMode === 'dark-mode' ? 'light-mode' : 'dark-mode';
//     setMode(newMode);
// }

// function setInitialMode() {
//     // Get the user's theme preference from local storage, if it's available
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//         setMode(savedTheme);
//     } else {
//         const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
//         if (prefersDarkMode) {
//             setMode("dark-mode");
//         } else {
//             setMode("light-mode");
//         }
//     }
// }

function generateSpaceLayer(size, selector, totalStars, duration) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme == "dark-mode") {
        const layer = [];
        const COLORS = ["#fff", "#fff2", "#fff4", "#fff7", "#fffc"];
        // const COLORS = ["white"];
    
        for (let i = 0; i < totalStars; i++) {
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            const x = Math.floor(Math.random() * 100);
            const y = Math.floor(Math.random() * 100);
            layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y+100}vh 0 ${color}`);
        }
    
        const container = document.querySelector(selector);
        container.style.setProperty("--space-layer", layer.join(","));
        container.style.setProperty("--size", size);
        container.style.setProperty("--duration", duration);    
    }
}

toggleSearch('search-bar', 'search-button');
// const toggle = document.getElementById('toggle');
// toggle.addEventListener('change', toggleMode);

// setInitialMode();
generateSpaceLayer("1px", ".space-1", 200, "35s");
generateSpaceLayer("2px", ".space-2", 75, "30s");
generateSpaceLayer("3px", ".space-3", 15, "20s");