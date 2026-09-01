
export function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10000);
    return randomNumber;
}

export function isNumber(input) {
    return typeof input === 'number' && input >= 1000 && input <= 9999;
}
