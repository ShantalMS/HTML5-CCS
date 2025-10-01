document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("btnContacto");

  btn.addEventListener("click", function() {
    Swal.fire({
      title: "📩 Contáctame",
      html: `
        <p>Para consultas o mayor información:</p>
        <ul style="text-align: left;">
          <li>📧 <a href="mailto:2411110125@undc.edu.pe">2411110125@undc.edu.pe</a></li>
          <li>💬 <a href="https://wa.me/51925269405" target="_blank">WhatsApp</a></li>
          <li>🌐 <a href="https://facebook.com/shantal.marinsanchez.7/" target="_blank">Facebook</a></li>
        </ul>
      `,
      icon: "info",
      confirmButtonText: "Cerrar"
    });
  });
});
