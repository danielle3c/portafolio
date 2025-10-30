// Efecto hover usando this
function hoverProyecto(element) {
    element.style.transform = "scale(1.05)";
    element.style.transition = "0.3s";
    element.style.boxShadow = "0 0 25px #00ffcc";
}

// Restaurar hover
function unhoverProyecto(element) {
    element.style.transform = "scale(1)";
    element.style.boxShadow = "0 0 10px rgba(0,0,0,0.4)";
}

// Abrir GitHub y eliminar el proyecto
function abrirYEliminar(btn) {
    const proyecto = btn.closest('li');
    const imgAlt = proyecto.querySelector('img').alt;

    // Enlaces según el proyecto
    let link = "";
    if (imgAlt.includes("Clima")) {
        link = "https://github.com/danielle3c/desarrollo_de_aplic/tree/main/3.7%20Tiempo%20-%20onchange";
    } else if (imgAlt.includes("Facebook")) {
        link = "https://github.com/danielle3c/desarrollo_de_aplic/tree/main/3.2%20Me%20gusta%20(parte%202)";
    } else if (imgAlt.includes("Tienda")) {
        link = "https://github.com/danielle3c/desarrollo_de_aplic/tree/main/3.6%20Vista%20previa%20de%20video%20-%20Onmouseover%20y%20Onmouseout";
    }

    // Abrir GitHub
    window.open(link, "_blank");

    // Eliminar proyecto del DOM
    proyecto.remove();
}
