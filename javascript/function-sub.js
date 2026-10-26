export function isNumber(input, digitNumber) {
    return (
        /^\d+$/.test(input) &&
        input.length === digitNumber
    );
}

/**
 * 指定された桁数のランダムな数字を作成する
 *
 * @param {number} digitNumber - 桁数
 * @returns {{array: number[], textNumber: string, number: number}}
 */
export function generateRandomNumber(digitNumber = 4) {
    const min = digitNumber === 1
        ? 0
        : 10 ** (digitNumber - 1);

    const max = 10 ** digitNumber - 1;

    const randomNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;

    const textNumber = String(randomNumber);

    const array = textNumber
        .split('')
        .map((digit) => Number(digit));

    return {
        array,
        textNumber,
        number: digitNumber,
    };
}