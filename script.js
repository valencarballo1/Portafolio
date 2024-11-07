
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