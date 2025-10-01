document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnContacto");

  btn.addEventListener("click", () => {
    Swal.fire({
      title: "📩 Contáctame",
      html: `
        <p><strong>Email:</strong> <a href="mailto:2411110125@undc.edu.pe">2411110125@undc.edu.pe</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/51925269405" target="_blank">+51 925269405</a></p>
        <p><strong>Facebook:</strong> <a href="https://facebook.com/shantal.marinsanchez.7/" target="_blank">Perfil</a></p>
      `,
      background: "#1a001a",
      color: "#fff",
      icon: "success",
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#630063",
      backdrop: `rgba(0,0,0,0.7)`
    });
  });
});
