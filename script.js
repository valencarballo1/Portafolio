document.addEventListener('DOMContentLoaded', function () {
    const text = "Bienvenid@s, soy Valentin Carballo";
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
});
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.toggle('flex-col');
    menu.classList.toggle('absolute');
    menu.classList.toggle('top-16');
    menu.classList.toggle('left-0');
    menu.classList.toggle('right-0');
    menu.classList.toggle('bg-white');
    menu.classList.toggle('dark:bg-gray-800');
    menu.classList.toggle('shadow-md');
    menu.classList.toggle('p-4');
});