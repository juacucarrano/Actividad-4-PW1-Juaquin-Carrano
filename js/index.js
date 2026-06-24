const PAISES = ["Seleccionar pais","Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "España", "Guatemala", "Haití", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana", "Uruguay", "Venezuela"];

const selectPais = document.querySelector("#pais");

PAISES.forEach(pais => {
    const option = document.createElement("option");
    option.value = pais;
    option.textContent = pais;
    selectPais.appendChild(option);
});

const formulario = document.querySelector("#formulario");
const errores = document.querySelector("#errores");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    errores.innerHTML = "";

    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const edad = document.querySelector("#age").value;
    const pais = document.querySelector("#pais").value;
    const terminos = document.querySelector("#terminos").checked;

    let mensajesError = [];

    if (nombre.length < 5) {
        mensajesError.push("El nombre debe tener al menos 5 caracteres.");
    }

    if (!email.includes("@")) {
        mensajesError.push("Ingrese un email válido.");
    }

    if (edad < 18 || edad > 60) {
        mensajesError.push("La edad debe estar entre 18 y 60 años.");
    }

    if (pais === "Seleccionar pais" || pais === "") {
        mensajesError.push("Debe seleccionar un país.");
    }

    if (!terminos) {
        mensajesError.push("Debe aceptar los términos y condiciones.");
    }

    if (mensajesError.length > 0) {
        errores.innerHTML = mensajesError
            .map(error => `<p>${error}</p>`)
            .join("");
        return;
    }

    const url = `./pages/resultados.html?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&edad=${edad}&pais=${encodeURIComponent(pais)}`;

    window.location.href = url;
});