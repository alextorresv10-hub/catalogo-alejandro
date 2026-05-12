// Snow Luxury Motors
// Script básico para interacción visual

document.addEventListener("DOMContentLoaded", () => {

    // Animación suave al navegar
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e){

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if(destino){
                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });

});


// Efecto simple al cargar tarjetas

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0px)";

    }, index * 150);

});