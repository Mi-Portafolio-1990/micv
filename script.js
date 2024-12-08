
    document.addEventListener("DOMContentLoaded", function() {
        const texts = ["Liderazgo ágil", "Sé diferente y triunfa", "Innovar es transcender",
            "Enseñar es aprender","Lidera con inteligencia","Cocrea"];
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
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");

        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("liderazgo");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("emocional");
        habilidades[9].classList.add("creatividad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


