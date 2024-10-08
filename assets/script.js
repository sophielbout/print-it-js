document.addEventListener("DOMContentLoaded", () => {
    // Tableau contenant les slides avec image et tagline
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    // Variable pour suivre l'index du slide actuel
    let currentSlide = 0;
    const arrowLeft = document.querySelector(".arrow_left");
    const arrowRight = document.querySelector(".arrow_right");
    const bannerImg = document.querySelector(".banner-img");
    const tagLine = document.querySelector("#banner p");
    const dotsContainer = document.querySelector(".dots");

    // Fonction pour mettre à jour le slider et la tagline
    function updateSlider(index) {
        bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
        tagLine.innerHTML = slides[index].tagLine;
        updateActiveDot(index);
    }

    // Fonction pour créer les bullet points dynamiquement avec une boucle for
    function createDots() {
        for (let i = 0; i < slides.length; i++) {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === 0) {
                dot.classList.add("active");
            }
            dot.addEventListener("click", () => {
                currentSlide = i;
                updateSlider(currentSlide);
            });
            dotsContainer.appendChild(dot);
        }
    }

    // Fonction pour mettre à jour l'état des bullet points actifs
    function updateActiveDot(index) {
        const dots = document.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("dot_selected"));
        dots[index].classList.add("dot_selected");
    }

    // Ajoute un événement au bouton de gauche pour changer d'image en arrière
    arrowLeft.addEventListener("click", () => {
        currentSlide -= 1;
        if (currentSlide == -1) {
            currentSlide = slides.length - 1;
        }
        updateSlider(currentSlide);
        console.log("Bonjour, vous avez cliqué sur le bouton gauche !");
    });

    // Ajoute un événement au bouton de droite pour avancer d'image
    arrowRight.addEventListener("click", () => {
        currentSlide += 1;
        if (currentSlide == slides.length) {
            currentSlide = 0;
        }
        updateSlider(currentSlide);
        console.log("Bonjour, vous avez cliqué sur le bouton droit !");
    });

    createDots(); // Crée les bullet points au chargement
    updateSlider(currentSlide); // Affiche la première slide au chargement
});