 document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("formulario");
      const resultado = document.getElementById("resultado");
      const respuestas = document.getElementById("respuestas");

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const curso = document.getElementById("curso").value;
        const aprendiste = document.getElementById("aprendiste").value.trim();
        const dificultad = document.getElementById("dificultad").value;
        const pagina = document.getElementById("pagina").value.trim();
        const recomendacion = document.getElementById("recomendacion").value;
        const sugerencias = document.getElementById("sugerencias").value.trim();

        if (!nombre || !correo || !curso || !aprendiste || !dificultad || !pagina || !recomendacion) {
          resultado.innerHTML = `<p class="error">❌ Por favor, completa todos los campos obligatorios.</p>`;
          respuestas.innerHTML = "";
          return;
        }

        if (!validarCorreo(correo)) {
          resultado.innerHTML = `<p class="error">❌ El correo no es válido.</p>`;
          respuestas.innerHTML = "";
          return;
        }

        resultado.innerHTML = `<p class="exito">✅ ¡Gracias por completar la encuesta, ${nombre}!</p>`;

        respuestas.innerHTML = `
📝 <strong>Nombre:</strong> ${nombre}
📧 <strong>Correo:</strong> ${correo}
👍 <strong>¿Te gustó el curso?:</strong> ${curso}
📚 <strong>¿Qué aprendiste?:</strong> ${aprendiste}
📈 <strong>Dificultad:</strong> ${dificultad}
🌐 <strong>Opinión sobre la página:</strong> ${pagina}
🤝 <strong>¿Recomendarías el curso?:</strong> ${recomendacion}
💬 <strong>Sugerencias:</strong> ${sugerencias || 'Ninguna'}
        `;

        form.reset();
      });

      function validarCorreo(correo) {
        const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        return regex.test(correo);
      }
    });