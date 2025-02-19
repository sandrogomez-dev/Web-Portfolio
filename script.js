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

// Manejo de navbar con el botón hamburguesa
(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('open');
        });
    }
})();

// Manejo del navbar al hacer scroll
(function () {
    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
    let breakpoint = main ? main.offsetTop - navbarHeight : 0;
    let windowPos = 0;
    let isFixed = false;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {
        updatePos();
        
        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');
            navbar.classList.add('navbar-fixed');
            if (main) main.style.marginTop = "0px";
            isFixed = true;
        } else if (windowPos < breakpoint) {
            navbar.classList.remove('navbar-fixed');
            if (main) main.style.marginTop = "0px";
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);
})();
