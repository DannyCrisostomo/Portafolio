// Simular la carga
window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".contenedor").style.display = "none";
        showNewScreen();
    }, 1500); // Esperar 5 segundos antes de mostrar la nueva pantalla
});
// Cambia de carga a escritorio
window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".contenedor_windows").style.display = "block";
        showNewScreen();
    }, 1500); // Esperar 5 segundos antes de mostrar la nueva pantalla
});

// Función para obtener y mostrar la hora y la fecha en tiempo real
function actualizarHoraFecha() {
    const horaFecha = new Date();
    const hora = horaFecha.getHours().toString().padStart(2, "0");
    const minutos = horaFecha.getMinutes().toString().padStart(2, "0");
    const dia = horaFecha.getDate().toString().padStart(2, "0");
    const mes = (horaFecha.getMonth() + 1).toString().padStart(2, "0");
    const anio = horaFecha.getFullYear();
    const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][horaFecha.getDay()];

    document.getElementById("hora").textContent = `${hora}:${minutos}`;
    document.getElementById("dia").textContent = diaSemana;
    document.getElementById("fecha").textContent = `${dia}/${mes}/${anio}`;
}
// Llamar a la función para mostrar la hora y la fecha inicialmente
actualizarHoraFecha();
// Actualizar la hora y la fecha cada segundo
setInterval(actualizarHoraFecha, 1000);
// Cambiar el fondo

const windowsContainer = document.getElementById("windows");
const backgrounds = ["./img/fondo.jpg", "./img/fondo1.jpg", "./img/fondo2.jpg", "./img/fondo3.jpg",];
let currentBackgroundIndex = 0;

function changeBackground() {
    windowsContainer.style.backgroundImage = `url("${backgrounds[currentBackgroundIndex]}")`;
    currentBackgroundIndex++;
    if (currentBackgroundIndex >= backgrounds.length) {
        currentBackgroundIndex = 0;
    }
}

changeBackground(); // Cambia el fondo inicial
setInterval(changeBackground, 300 * 60 * 1000);  //Cambia el fondo cada 300 minutos

