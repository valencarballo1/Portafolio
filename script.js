const descargaCv = document.getElementById("descargaCv");

descargaCv.addEventListener("click", function () {
    const pdfPath = "/assets/FullStack_Valentin_Carballo.pdf"; // Ruta ajustada
    window.open(pdfPath, '_blank');
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2 // Mostrar 1 elemento en pantallas pequeñas (menos de 576px)
            },
            768: {
                items: 4 // Mostrar 3 elementos en pantallas medianas (de 576px a 992px)
            },
            992: {
                items: 6 // Mostrar 4 elementos en pantallas grandes (992px o más)
            }
        }
    });
});