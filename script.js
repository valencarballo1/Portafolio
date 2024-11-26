document.addEventListener('DOMContentLoaded', function () {
    const text = "Valentin Carballo";
    const typedTextSpan = document.querySelector("#typed-text");
    const cursorSpan = document.querySelector(".cursor");

    let i = 0;
    function type() {
        if (i < text.length) {
            typedTextSpan.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            cursorSpan.style.display = 'none';
        }
    }

    if (typedTextSpan) {
        setTimeout(type, 1000);
    }

    const toggleButton = document.getElementById('toggleButton');
    const infoText = document.getElementById('infoText');
    const photoContainer = document.getElementById('photoContainer');
    const sobreMiSection = document.getElementById('sobre-mi');
    const background = document.getElementById('background');
    let infoVisible = false;

    function adjustBackground() {
        const sectionHeight = sobreMiSection.scrollHeight;
        background.style.height = `${sectionHeight}px`;
    }

    toggleButton.addEventListener('click', () => {
        if (!infoVisible) {
            photoContainer.style.transform = 'translateY(-100vh)';
            photoContainer.style.opacity = '0';
            infoText.style.opacity = '1';
            infoText.classList.remove('hidden');
            toggleButton.textContent = 'Ver foto';
            infoVisible = true;

            // Fade in each paragraph
            const paragraphs = infoText.querySelectorAll('.fade-in');
            paragraphs.forEach((p, index) => {
                setTimeout(() => {
                    p.classList.add('visible');
                }, index * 500);
            });
        } else {
            photoContainer.style.transform = 'translateY(0)';
            photoContainer.style.opacity = '1';
            infoText.style.opacity = '0';
            setTimeout(() => infoText.classList.add('hidden'), 500);
            toggleButton.textContent = 'Conoce más sobre mí';
            infoVisible = false;

            // Reset fade-in elements
            const paragraphs = infoText.querySelectorAll('.fade-in');
            paragraphs.forEach(p => p.classList.remove('visible'));
        }

        setTimeout(adjustBackground, 50); // Ajustar el fondo después de un breve retraso
    });

    // Ajustar el fondo inicialmente y en el resize de la ventana
    adjustBackground();
    window.addEventListener('resize', adjustBackground);

    const toggleMenu = document.getElementById('menu-toggle');
            const menu = document.getElementById('menu-items');
            const menuItems = menu.querySelectorAll('a'); 
            let activeSection = '';

            toggleMenu.addEventListener('click', function () {
                menu.classList.toggle('hidden');
            });

            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    menu.classList.add('hidden');
                });
            });

            const handleScroll = () => {
                const sections = ['#sobre-mi', '#habilidades', '#experiencia', '#proyectos'].map(id => document.querySelector(id));
                const scrollPosition = window.scrollY + 100;

                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = sections[i];
                    if (section && section.offsetTop <= scrollPosition) {
                        activeSection = ['#sobre-mi', '#habilidades', '#experiencia', '#proyectos'][i];
                        break;
                    }
                }
                updateActiveLink();
            };

            const updateActiveLink = () => {
                menuItems.forEach(item => {
                    const href = item.getAttribute('href');
                    if (href === activeSection) {
                        item.classList.add('text-blue-500', 'dark:text-blue-400');
                    } else {
                        item.classList.remove('text-blue-500', 'dark:text-blue-400');
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll();
});
