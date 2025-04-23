// Seleccionamos el contenedor de la tarjeta
const target = document.querySelector("#perfil-card-container");

// Función de callback cuando el contenedor entre en la vista
const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Activamos la animación añadiendo la clase 'fade-in'
        entry.target.classList.add("fade-in");
        // Dejamos de observar una vez que la tarjeta está en pantalla
        observer.unobserve(entry.target);
      }
    });
  };

  // Configuración del observer
const options = {
    root: null, // Usamos el viewport como el contenedor de observación
    rootMargin: "0px", // No hay margen adicional
    threshold: 0.5 // El 50% de la tarjeta debe estar visible
  };
  
  // Creamos el observer y comenzamos a observar
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(target);