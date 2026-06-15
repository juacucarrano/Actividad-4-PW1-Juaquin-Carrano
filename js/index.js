const PAISES = ["Seleccionar pais","Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "España", "Guatemala", "Haití", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana", "Uruguay", "Venezuela"];

const selectPais = document.querySelector("#pais");

PAISES.forEach(pais => {
    const option = document.createElement("option");
    option.value = pais;
    option.textContent = pais;
    selectPais.appendChild(option);
});

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const edad = document.querySelector("#age").value;
    const pais = document.querySelector("#pais").value;
    const terminos = document.querySelector("#terminos").checked;

    if (nombre.length < 5) {
        alert("Ingrese un nombre mayor a 5 caracteres.");
        return;
    }

    if (!email.includes("@")) {
        alert("Ingrese un email válido.");
        return;
    }

    if (edad < 18 || edad > 60) {
        alert("Ingrese una edad entre 18 y 60");
        return;
    }

    if (pais === "Seleccionar pais" || pais === "") {
        alert("Por favor seleccione un país.");
        return;
    }

    const url = `./pages/resultados.html?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&edad=${edad}&pais=${encodeURIComponent(pais)}`;
    
    window.location.href = url;
});