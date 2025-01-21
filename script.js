document.addEventListener('DOMContentLoaded', (event) => {
    // Animación del menú
    const menuItems = document.querySelectorAll('#menu a');
    const layout = document.querySelector('.layout');
  const sections = document.querySelectorAll('.section');
  const btnHome = document.getElementById('btn-default');
  const btnProyectos = document.getElementById('btn-proyectos');
  const btnSobreMi = document.getElementById('btn-sobre-mi');
  const btnConexiones = document.getElementById('btn-conexiones');

  // Función para ocultar todas las secciones
  function hideAllSections() {
    sections.forEach(section => {
      section.classList.remove('active');
      section.style.opacity = '0'; // Inicia opacidad en 0 para animación
      section.style.transform = 'translateY(20px)'; // Baja un poco la posición
    });
  }
  // Función para mostrar la sección seleccionada
  function showSection(sectionId) {
    hideAllSections(); // Ocultar todas las secciones
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active'); // Mostrar la sección seleccionada
    setTimeout(() => {
      // Inicia transición luego de un breve delay
      targetSection.style.opacity = '1';
      targetSection.style.transform = 'translateY(0)';
    }, 50);


  }
showSection('default'); 
  // Eventos para los botones
  btnProyectos.addEventListener('click', () => showSection('proyectos'));
  btnSobreMi.addEventListener('click', () => showSection('sobre-mi'));
  btnConexiones.addEventListener('click', () => showSection('conexiones'));
  btnHome.addEventListener('click', () => showSection('default'));

  // Mostrar sección predeterminada al cargar la página
  // Puedes cambiar esto a la sección que desees mostrar por defecto
   

    // Cambio de tema
    
    const themeToggle = document.getElementById('toggle');
    const body = document.body;
    
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            var img = document.getElementById('imgD');
            img.src = "./icons/home96white.svg";
            img = document.getElementById('imgP');
            img.src = "./icons/proyectos96white.svg";
            img = document.getElementById('imgC');
            img.src = "./icons/iconizer-contacto86white.svg";
            img = document.getElementById('imgS');
            img.src = "./icons/galeria.svg";
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            var img = document.getElementById('imgD');
            img.src = "./icons/home96.svg";
            img = document.getElementById('imgP');
            img.src = "./icons/proyectos96.svg";
            img = document.getElementById('imgC');
            img.src = "./icons/contacto86.svg";
            img = document.getElementById('imgS');
            img.src = "./icons/galeria_black.svg";

        }
    });
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    // Asegúrate de que los estilos responsivos se apliquen correctamente
    function applyResponsiveStyles() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }

      // Aplica los estilos responsivos al cargar la página y al cambiar el tamaño de la ventana
      window.addEventListener('load', applyResponsiveStyles);
      window.addEventListener('resize', applyResponsiveStyles);

    // Animación de transición entre secciones
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    function openModal(photo) {
      var modal = document.getElementById("myModal");
      var modalImage = document.getElementById("modalImage");
      var modalComment = document.getElementById("modalComment");
    
      // Establecer la fuente de la imagen y el comentario
      modalImage.src = photo.querySelector("img").src;
      modalComment.innerHTML = photo.querySelector(".comment").innerHTML;
    
      // Mostrar la modal
      modal.style.display = "flex";
    }
    
    // Función para cerrar la modal
    function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
});




