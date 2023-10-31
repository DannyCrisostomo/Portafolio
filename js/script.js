// Simular la carga
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".contenedor").style.display = "none";
    showNewScreen();
  }, 1000); // Esperar 5 segundos antes de mostrar la nueva pantalla
});


// Nueva pantalla
function showNewScreen() {
  // Aquí puedes realizar la acción para mostrar la nueva pantalla
  const newScreen = document.createElement("div");
  newScreen.innerHTML = `
  <div id="windows" >
    <div class="navegar">
        <div class="superior">
            <div class="icono">
                <a class="link" href="youtuve.com">
                    <img class="link-icono" src="./icon/ventanas.png" alt="">
                </a>
            </div>
            <div class="icono">
                <a class="link" href="youtuve.com">
                    <img class="link-icono" src="./icon/lupa.png" alt="">
                </a>
            </div>
            <div class="icono">
                <a class="link" href="https://github.com/DannyCrisostomo">
                    <img class="link-icono" src="./icon/github.png" alt="">
                </a>
            </div>
            <div class="icono">
                <a class="link" href="https://www.youtube.com/">
                    <img class="link-icono" src="./icon/youtuve.png" alt="">
                </a>
            </div>
            <div class="icono">
                <a class="link"
                    href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwivzpOp242CAxWpqpUCHYNuAssQPAgJ">
                    <img class="link-icono" src="./icon/chrome.png" alt="">
                </a>
            </div>
        </div>
        <div class="inferior">

            <div class="icono">
                <div class="funciones sonido">
                    <img class="link-icono" src="./icon/grabar.png" alt="">
                    <img class="link-icono" src="./icon/internet.png" alt="">
                    <img class="link-icono" src="./icon/sonido.png" alt="">
                </div> 
            </div>
            <div class="icono">
                <a class="link lenguaje" href="#">
                    <h5>ESP</h5>
                </a>
            </div>

            <div class="icono fecha">
                <div id="hora"></div>
                <div id="dia"></div>
                <div id="fecha"></div>
            </div>

             <div class="icono">
                <a class="link" href="#">
                    <img class="link-icono" src="./icon/notificacion.png" alt="">
                </a>
            </div>
        </div>
    </div>
    <div class="escritorio">
        <div class="contenedor-app app-columnas">


                <div class="apk">
                    <a class="link" href="https://www.linkedin.com/in/danny-crisostomo/">
                        <img class="icono-esc" src="./icon/linkedin.png" alt=""> Linkedin
                    </a>
                </div>
    
                <div class="apk">
                    <a class="link" href="https://walink.co/4f87d6">
                        <img class="icono-esc" src="./icon/whatsapp.png" alt=""> whatsapp
                    </a>
                </div>

                <div class="apk">
                    <a class="link" href="#">
                        <img class="icono-esc" src="./icon/mapa.png" alt=""> Maps
                    </a>
                </div>


        </div>
    </div>
</div>
    `;
  document.body.appendChild(newScreen);


  
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
  setInterval(changeBackground, 10000); //Cambia el fondo cada 10 segundo
  //setInterval(changeBackground, 30 * 60 * 1000);  Cambia el fondo cada 30 minutos

  }
