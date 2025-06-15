// Acción de prueba para el botón
document.querySelector('.btn-portfolio').addEventListener('click', function () {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
});
