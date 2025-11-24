// ===== Burger Menu =====
function initBurgerMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    if (burger && nav) {
        burger.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
}

// ===== Mode Sombre =====
function initDarkMode() {
    const darkBtn = document.getElementById('toggle-dark');
    if (darkBtn) {
        if (localStorage.getItem('theme') === 'dark' || (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
            darkBtn.checked = true;
            document.body.classList.add('dark');
        }
        darkBtn.addEventListener('change', function () {
            if (darkBtn.checked) {
                document.body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

// ===== Tabs (À propos) =====
function initTabs() {
    const buttons = document.querySelectorAll('.tab-menu li');
    const contents = document.querySelectorAll('.tab-content');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected_btn'));
            button.classList.add('selected_btn');

            const target = button.getAttribute('data-target');
            contents.forEach(c => {
                c.classList.remove('active');
                if (c.id === target) c.classList.add('active');
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", initTabs);


// ===== Formulaire Contact (Formspree) =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('form-status');
    
    if (form && status) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                status.textContent = "Merci ! Votre message a bien été envoyé.";
                form.reset();
            } else {
                status.textContent = "Une erreur est survenue. Veuillez réessayer.";
            }
        });
    }
}



// ===== Intersection Observer pour fade-in =====
function initFadeInObserver() {
    const items = document.querySelectorAll(".fade-in");
    if (items.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        items.forEach(item => observer.observe(item));
    }
}

// ===== Initialisation DOMContentLoaded =====
document.addEventListener('DOMContentLoaded', function () {
    initBurgerMenu();
    initDarkMode();
    initTabs();
    initContactForm();
    initProjetPage();
    initFadeInObserver();
});