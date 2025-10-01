// Acción del botón de contacto
document.addEventListener("DOMContentLoaded", function () {
  const btnContacto = document.getElementById("btnContacto");

  btnContacto.addEventListener("click", function () {
    Swal.fire({
      title: "📩 Contáctame",
      html: `
        <p>Puedes escribirme al correo:</p>
        <a href="mailto:2411110125@undc.edu.pe">2411110125@undc.edu.pe</a>
        <hr>
        <p>O sígueme en mis redes sociales:</p>
        <a href="https://www.facebook.com/shantal.marinsanchez.7/" target="_blank">Facebook</a> | 
        <a href="https://www.instagram.com/shantims_17/" target="_blank">Instagram</a>
      `,
      icon: "info",
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#ffab2d"
    });
  });
});
