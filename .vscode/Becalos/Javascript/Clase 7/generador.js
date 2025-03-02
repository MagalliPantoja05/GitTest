const passwordDisplay = document.getElementById('password');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const strengthDisplay = document.getElementById('strength-display');
const strengthLevel = document.getElementById('strength-level');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

function generatePassword() {
    const length = parseInt(lengthInput.value);
    let charset = '';
    let password = '';

    if (uppercaseCheckbox.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercaseCheckbox.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbersCheckbox.checked) charset += '0123456789';
    if (symbolsCheckbox.checked) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    passwordDisplay.value = password;
    updateStrength(password);
}

function updateStrength(password) {
    let strength = 0;
    if (password.length > 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;

    if (strength === 0) {
        strengthDisplay.textContent = 'Débil';
        strengthLevel.style.width = '25%';
        strengthLevel.style.backgroundColor = 'red';
    } else if (strength < 3) {
        strengthDisplay.textContent = 'Media';
        strengthLevel.style.width = '50%';
        strengthLevel.style.backgroundColor = 'orange';
    } else {
        strengthDisplay.textContent = 'Fuerte';
        strengthLevel.style.width = '100%';
        strengthLevel.style.backgroundColor = 'green';
    }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', () => {
    passwordDisplay.select();
    document.execCommand('copy');
});

// Generar contraseña inicial
generatePassword();