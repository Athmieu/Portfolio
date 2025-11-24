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

// ===== Page Projet (Projet.html) =====
function initProjetPage() {
    const projets = {
        1: {
            titre: "Classification automatique de dépêches",
            image: "image/SAE1.01.png",
            description: "Nous avons dû réaliser en groupe de deux un système capable de classer automatiquement des dépêches journalistiques dans cinq catégories (Sciences, Culture, Économie, Politique, Sport) en analysant leur contenu textuel. La première phase consistait à créer manuellement des lexiques de mots-clés représentatifs. La seconde phase reposait sur l'automatisation de cette génération via une méthode d'apprentissage supervisé. Un comparatif a été effectué avec l'algorithme des k plus proches voisins (K-NN). Pour finir, nous devions rédiger un document résumant ce que nous avions fait en anglais.",
            competences: "Réaliser un développement d'application : c'est-à-dire concevoir, coder, tester et intégrer une solution informatique pour un client. Optimiser des applications : proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources...",
            outils: ["image/Java.webp", "image/word.webp"],
            actions: "Je me suis occupé de réaliser l'automatisation de la classification des dépêches ainsi que de la génération des scores pour chaque mot présent dans les dépêches. Cela m'a permis d'en apprendre plus sur Java ainsi que sur KNN, que je ne connaissais que de nom."
        },
        2: {
            titre: "Installation d'un environnement de développement sous Debian 12",
            image: "image/SAE1.03.png",
            description: "J'ai dû réaliser seul une installation complète d'un environnement de développement sur une machine virtuelle Debian 12 avec KDE/Plasma ainsi qu'une carte mentale représentant les différentes étapes de cette installation. L'objectif était d'installer et configurer plusieurs outils de développement (git, JDK, IntelliJ IDEA) en respectant une procédure précise. L'évaluation portait sur la bonne exécution des étapes techniques, la cohérence des captures, la maîtrise de l'environnement Linux et la traçabilité de l'installation.",
            competences: "Administrer des systèmes informatiques communicants complexes : installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation.",
            outils: ["image/debian-logo.png"],
            actions: "Je me suis occupé de créer une machine virtuelle sous Debian 12, de vérifier l'intégrité de l'image ISO, d'installer le système avec un nom de login personnalisé, d'installer Git et JDK, d'installer IntelliJ IDEA de trois manières (archive, snap, flatpak), ainsi que de vérifier si tout cela fonctionnait et de prendre des captures d'écran pour le rendu. Cela m'a permis d'apprendre comment installer une machine virtuelle ainsi qu'un système d'exploitation Debian."
        },
        3: {
            titre: "Base de données – Club de bowling SuperBall",
            image: "image/SAE1.04.png",
            description: "Nous avons dû concevoir, par groupe de deux, une base de données relationnelle complète pour la gestion des réservations d'un club de bowling. Le système permet de gérer les réservations de pistes, l'emprunt de chaussures, les plages d'indisponibilité, et d'assurer le respect de nombreuses contraintes métier (disponibilité des équipements, horaires d'ouverture, validation des joueurs, etc.). Le travail a été organisé en trois étapes : modélisation (SEA ➝ SLR), scripts SQL (création, suppression, insertion, test), puis ajout de nouvelles fonctionnalités comme le remplacement de matériel et l'évolution des règles du jeu.",
            competences: "Gérer des données de l'information : concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.",
            outils: ["image/sql.png", "image/word.webp"],
            actions: "Je me suis occupé de la création du schéma relationnel, de la rédaction de scripts SQL ('Create.sql', 'Drop.sql', 'Test.sql'), de la formulation de requêtes répondant à des besoins métier, ainsi que de la gestion de cas évolutifs (piste dégradée, renouvellement de chaussures). Cela m'a permis d'apprendre à gérer une petite base de données en SQL."
        },
        4: {
            titre: "Site web institutionnel pour Sopra Steria",
            image: "image/SAE1.0506.png",
            description: "Nous avons dû réaliser, en groupe de 3, la conception et l'implémentation d'un site web destiné à présenter une entreprise du secteur numérique à un public non spécialiste, en particulier des élèves de 3ᵉ en recherche de stage. L'objectif était de rendre accessibles des notions d'entreprise, de transition numérique et écologique, via un site sobre, clair et éco-conçu.",
            competences: "Conduire un projet : satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles. Collaborer au sein d'une équipe informatique : acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
            outils: ["image/HTML5.png", "image/CSS2.png", "image/word.webp"],
            actions: "J'ai dû rechercher et sélectionner des informations sur l'entreprise Sopra Steria, rédiger une fiche vulgarisée, créer une maquette du site, développer des pages web en HTML/CSS, prendre en compte les retours sur les maquettes et finaliser le projet. Nous avons ensuite réalisé une présentation orale du projet en groupe. Cela m'a permis d'apprendre à créer un site internet complet et de constater que travailler en groupe n'est pas toujours facile."
        },
        5: {
            titre: "Installation d'un serveur Debian 12 avec Apache, PostgreSQL et PHP",
            image: "image/SAE2.03.png",
            description: "J'ai dû réaliser seul l'installation d'un serveur Debian 12 minimal (sans interface graphique) dans une machine virtuelle Qemu/KVM. L'objectif était d'installer et configurer Apache, PostgreSQL et PHP, de rendre le serveur accessible depuis la machine hôte, et de rédiger un guide technique en anglais documentant toutes les étapes.",
            competences: "Administrer des systèmes informatiques communicants complexes : installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux, et optimiser le système informatique d'une organisation.",
            outils: ["image/debian-logo.png", "image/sql.png", "image/word.webp"],
            actions: "J'ai réalisé la création d'une machine virtuelle Debian, l'installation de logiciels serveur avec APT, la configuration réseau, la création d'utilisateurs et de bases PostgreSQL, les tests de connectivité locale et distante, ainsi que la rédaction d'un guide en anglais structuré, illustré par des captures d'écran. Cela m'a permis d'approfondir mes connaissances sur Debian, l'installation de serveurs, ainsi que sur la rédaction technique en anglais."
        },
        6: {
            titre: "Analyse des données d'accidents de la route",
            image: "image/SAE2.04.png",
            description: "Nous avons dû réaliser, en groupe de deux, une analyse des bases de données officielles issues du fichier BAAC (Bulletin d'analyse des accidents corporels), recensant les accidents routiers survenus en France entre 2005 et 2023. Nous devions réaliser une analyse sur les accidents impliquant des cyclistes dans la région Auvergne-Rhône-Alpes entre 2006 et 2023.",
            competences: "Gérer des données de l'information : concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.",
            outils: ["image/sql.png", "image/R-logo.png"],
            actions: "J'ai étudié le modèle de données BAAC, conçu des requêtes d'analyse, traité les données manquantes, et effectué des croisements entre variables pour interprétation statistique. Cela m'a permis d'apprendre à gérer une base de données volumineuse, ce que je n'avais encore jamais fait."
        },
        7: {
            titre: "Développement d'un outil d'aide à l'organisation d'événements",
            image: "image-organisation-evenements.jpg",
            description: "Nous devions, en groupe de 6, concevoir et développer une application de bureau en Java avec JavaFX et l'architecture MVC, permettant à un administrateur de gérer plusieurs événements (planification, intervenants, logistique, communication, etc.).",
            competences: "Réaliser un développement d'application : concevoir, coder, tester et intégrer une solution informatique pour un client. Optimiser des applications : proposer des applications informatiques optimisées. Conduire un projet : organiser et piloter un projet informatique. Collaborer au sein d'une équipe informatique.",
            outils: ["image/java.webp", "image/Java-FX.png", "image/GitHub-Logo.png", "image/UML.png", "image/word.webp"],
            actions: "J'ai dû analyser les besoins fonctionnels, rédiger la documentation (cadrage, modélisation), modéliser l'interface. Cela m'a permis d'améliorer mes compétences en travail d'équipe et de comprendre les enjeux d'un projet collaboratif."
        }
    };

    // Charger les données du projet depuis l'URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id && projets[id]) {
        const projet = projets[id];
        const titleEl = document.getElementById('projet-titre');
        const imageEl = document.getElementById('projet-image');
        const descEl = document.getElementById('description');
        const compEl = document.getElementById('competences');
        const actionsEl = document.getElementById('actions');
        const outilsEl = document.getElementById('outils');

        if (titleEl) titleEl.textContent = projet.titre;
        if (imageEl) {
            imageEl.src = projet.image;
            imageEl.alt = projet.titre;
        }
        if (descEl) descEl.textContent = projet.description;
        if (compEl) compEl.textContent = projet.competences;
        if (actionsEl) actionsEl.textContent = projet.actions;

        // Ajout images outils
        if (outilsEl) {
            outilsEl.innerHTML = "";
            if (Array.isArray(projet.outils) && projet.outils.length > 0) {
                projet.outils.forEach(src => {
                    const img = document.createElement("img");
                    img.src = src;
                    img.alt = "Outil utilisé";
                    img.style.maxWidth = "120px";
                    img.style.marginRight = "40px";
                    outilsEl.appendChild(img);
                });
            } else {
                outilsEl.textContent = "Aucun outil renseigné.";
            }
        }
    } else {
        const titleEl = document.getElementById('projet-titre');
        const imageEl = document.getElementById('projet-image');
        const outilsEl = document.getElementById('outils');
        
        if (titleEl) titleEl.textContent = "Projet non trouvé";
        if (imageEl) imageEl.style.display = 'none';
        if (outilsEl) outilsEl.style.display = 'none';
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