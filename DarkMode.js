function darkMode() {
    const mode = document.body;
    mode.classList.toggle("mode");

    const isDarkMode = mode.classList.contains("mode");
    localStorage.setItem("darkMode", isDarkMode);
}

function setInitialMode() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    const mode = document.body;
    const tombol = document.getElementById("tombol");

    tombol.checked = isDarkMode;

    if (isDarkMode) {
        mode.classList.add("mode");
    }
}

setInitialMode();
