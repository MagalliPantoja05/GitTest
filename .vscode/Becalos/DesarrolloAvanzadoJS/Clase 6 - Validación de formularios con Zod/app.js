const { z } = window.Zod;

const registerForm = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const generalErrors = document.getElementById("generalErrors");

const registerSchema = z.object({
  name: z.string().nonempty({ message: "El nombre es obligatorio." }),
  email: z.string().email({ message: "El correo electrónico no es válido." }).nonempty({ message: "El correo es obligatorio." }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }).nonempty({ message: "La contraseña es obligatoria." }),
});

function limpiarErrores() {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    generalErrors.textContent = "";
}

function mostrarErrorCampo(campoId, mensaje) {
    document.getElementById(campoId + "Error").textContent = mensaje;
    document.getElementById(campoId).classList.add('error-input');
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  limpiarErrores();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    registerSchema.parse(formData);
    generalErrors.style.color = 'green';
    generalErrors.textContent = "¡Registro exitoso!";
    alert("¡Registro exitoso!");
  } catch (error) {
    generalErrors.style.color = 'red';
    generalErrors.textContent = "Por favor, corrige los errores en el formulario.";
    error.errors.forEach(err => {
        if (err.path[0] === 'name') {
            mostrarErrorCampo('name', err.message);
        } else if (err.path[0] === 'email') {
            mostrarErrorCampo('email', err.message);
        } else if (err.path[0] === 'password') {
            mostrarErrorCampo('password', err.message);
        } else {
            generalErrors.textContent += ` ${err.message}`;
        }
    });
  }
});