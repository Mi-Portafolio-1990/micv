
    document.addEventListener("DOMContentLoaded", function() {
        const texts = ["Lidera", "Innova", "Automatiza",
            "Enseña","Aprende","Sé ágil","Sinergiza","Transciende"];
        let index = 0;
        const logoText = document.getElementById("logo-text");

        function changeText() {
            index = (index + 1) % texts.length;
            logoText.textContent = texts[index];
        }

        setInterval(changeText, 5000); // Cambia el texto cada 5000 milisegundos (5 segundos)
    });

function moveText(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s"; /* Duración de la transición */
}

function returnText(element) {
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.3s"; /* Duración de la transición */
}

function mostrarOcultarMenu() {
    var nav = document.querySelector(".contenedor-header header ul");
    nav.classList.toggle("show");
}

function scaleIcon(element) {
    element.style.transform = 'scale(1.2)';
    element.style.transition = 'transform 0.3s';
}

function resetIcon(element) {
    element.style.transform = 'scale(1)';
    element.style.transition = 'transform 0.3s';
}


let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Variable para seguir el estado de animación
let animacionEjecutada = false;

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !animacionEjecutada) {
        let habilidades = document.getElementsByClassName("progreso");

        for (let i = 0; i < habilidades.length; i++) {
            let habilidad = habilidades[i];
            let span = habilidad.querySelector('span');
            let porcentaje = parseInt(span.innerText.replace('%', ''));
            let count = 0;
            span.innerText = '0%';

            // Animamos la barra y el porcentaje
            let interval = setInterval(() => {
                if (count < porcentaje) {
                    count++;
                    span.innerText = `${count}%`;
                    habilidad.style.width = `${count}%`;
                    span.style.left = `${count}%`; // Movemos el porcentaje junto con la barra
                    span.style.opacity = 1; // Hacemos visible el porcentaje
                } else {
                    clearInterval(interval);
                }
            }, 20); // Ajusta este valor para la velocidad de la animación del porcentaje
        }
        animacionEjecutada = true; // Marcar que la animación ha sido ejecutada

        // Dejar de escuchar el evento de desplazamiento
        window.removeEventListener('scroll', efectoHabilidades);
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.addEventListener('scroll', efectoHabilidades);
