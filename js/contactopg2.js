document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnContacto");

  btn.addEventListener("click", () => {
    Swal.fire({
      title: "📩 Contáctame",
      html: `
        <p><strong>Email:</strong> 
          <a href="mailto:2411110125@undc.edu.pe" target="_blank">
            2411110125@undc.edu.pe
          </a>
        </p>
        <p><strong>WhatsApp:</strong> 
          <a href="https://wa.me/51925269405" target="_blank">
            +51 925 269 405
          </a>
        </p>
        <p><strong>Instagram:</strong> 
          <a href="https://instagram.com/shantims_17/" target="_blank">
            @shantims_17
          </a>
        </p>
      `,
      icon: "success",
      confirmButtonText: "Cerrar",
      background: "#faf5ff",
      color: "#333",
      confirmButtonColor: "#d291bc"
    });
  });
});
