document.addEventListener("DOMContentLoaded", () => {
  Swal.fire({
    title: "✨ Bienvenida ✨",
    html: `
      <p>Hola, soy <strong>Shantal Marin Sanchez</strong>.</p>
      <p>Explora mi portafolio y conoce mis proyectos en <em>desarrollo web e innovación digital</em>.</p>
    `,
    background: "#1a001a",
    color: "#fff",
    icon: "info",
    confirmButtonText: "Comenzar 🚀",
    confirmButtonColor: "#630063",
    backdrop: `rgba(0,0,0,0.7)`
  });
});
