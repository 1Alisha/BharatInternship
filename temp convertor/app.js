let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

/* Celsius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celsiusInput.value);

    // Check if cTemp is a valid number
    if (isNaN(cTemp)) {
        alert('Please enter a valid number for Celsius.');
        return;
    }

    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});

/* Fahrenheit to Celsius and Kelvin */
fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value);

    // Check if fTemp is a valid number
    if (isNaN(fTemp)) {
        alert('Please enter a valid number for Fahrenheit.');
        return;
    }

    let cTemp = (fTemp - 32) * (5 / 9);
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
});

/* Kelvin to Celsius and Fahrenheit */
kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value);

    // Check if kTemp is a valid number
    if (isNaN(kTemp)) {
        alert('Please enter a valid number for Kelvin.');
        return;
    }

    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
});

btn.addEventListener('click', () => {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});
