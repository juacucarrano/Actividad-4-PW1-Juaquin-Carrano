window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    
    const nombre = params.get("nombre");
    const email = params.get("email");
    const edad = params.get("edad");
    const pais = params.get("pais");
    
    if (nombre) {
        document.getElementById("resNombre").textContent = nombre;
        document.getElementById("resEmail").textContent = email;
        document.getElementById("resEdad").textContent = edad;
        document.getElementById("resPais").textContent = pais;
    } else {
        document.getElementById("contenedor-resultados").innerHTML = 
            "<p>No se recibieron datos. Por favor, completa el formulario primero.</p>";
    }
});