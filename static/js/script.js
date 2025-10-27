// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // Cerrar menú móvil si está abierto
        document.querySelector('nav ul').classList.remove('show');
    });
});

// Menú móvil
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Animación de las barras de habilidades al hacer scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Observador de intersección para animar habilidades cuando son visibles
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    observer.observe(skillsSection);
}

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Aquí normalmente enviarías los datos a un servidor
    // Por ahora, solo mostraremos una alerta
    alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`);
    
    // Limpiar el formulario
    this.reset();
});

// Efecto de aparición suave para las secciones al hacer scroll
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Aplicar estilos iniciales para la animación
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// Efecto de carga inicial
window.addEventListener('load', function() {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});