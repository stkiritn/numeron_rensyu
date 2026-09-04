export function isNumber(input) {
    return typeof input === 'number' && input >= 1 && input <= 999999999;
}

export function generateRandomNumber() {
    let textNumber = '';
    const selectNumber = document.getElementById('selectNumber');
    while (textNumber.length !== 4) {
        const randomNumber = Math.floor(Math.random() * 1000000000);
        textNumber = String(randomNumber);
    }

    let digit = textNumber.split('');
    let array = digit.map(digit => Number(digit));

    return {array, textNumber};
}

export function nextGenerateRandomNumber() {
    let textNumber = '';
    const digitNumber = document.getElementById('digitNumber');
    while (textNumber.length !== Number(digitNumber.value)) {
        const randomNumber = Math.floor(Math.random() * 1000000000);
        textNumber = String(randomNumber);
    }

    let digit = textNumber.split('');
    let array = digit.map(digit => Number(digit));

    return {array, textNumber, number: Number(digitNumber.value)};
}



