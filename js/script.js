document.getElementById('convert-btn').addEventListener('click', convertTemperature);
document.getElementById('reset-btn').addEventListener('click', resetForm);
document.getElementById('reverse-btn').addEventListener('click', reverseConversion);

function convertTemperature() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitInput = document.getElementById('fahrenheit').value;

    if (celsiusInput) {
        const celsius = parseFloat(celsiusInput);
        if (isNaN(celsius)) {
            alert('Please enter a valid number');
            return;
        }
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else if (fahrenheitInput) {
        const fahrenheit = parseFloat(fahrenheitInput);
        if (isNaN(fahrenheit)) {
            alert('Please enter a valid number');
            return;
        }
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('calculation').value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    } else {
        alert('Please enter a value to convert');
    }
}

function resetForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
}

function reverseConversion() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    document.getElementById('celsius').value = fahrenheitInput;
    document.getElementById('fahrenheit').value = celsiusInput;
}
