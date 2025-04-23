// Seleccionamos el contenedor de la tarjeta
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("perfil-card-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Detener observación luego de aplicar la animación
        }
      });
    },
    {
      threshold: 0.3, // Se activa cuando el 30% del contenedor está visible
    }
  );

  if (target) {
    observer.observe(target);
  }
});
