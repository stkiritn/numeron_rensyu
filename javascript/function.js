export function isNumber(input) {
    return typeof input === 'number' && input >= 1000 && input <= 9999;
}

export function generateRandomNumber() {
    let textNumber = '';

    while (textNumber.length !== 4) {
        const randomNumber = Math.floor(Math.random() * 10000);
        textNumber = String(randomNumber);
    }

    let digit = textNumber.split('');
    let array = digit.map(digit => Number(digit));

    return {array, textNumber};
}



