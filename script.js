// Función para cambiar entre modo oscuro y claro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Guardar la preferencia del usuario en localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Aplicar el tema guardado al cargar la página
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Añadir un botón para cambiar el tema
function addThemeToggleButton() {
    const button = document.createElement("button");
    button.textContent = "🌙";
    button.id = "theme-toggle";
    button.addEventListener("click", toggleDarkMode);
    document.body.prepend(button);
}

// Inicializar
applySavedTheme();
addThemeToggleButton();