/**
 * 入力された数字が指定された桁数か確認する
 *
 * @param {string} input - 入力された数字
 * @param {number} digitNumber - 必要な桁数
 * @returns {boolean}
 */
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
 const digits = new Set();

    while (digits.size < digitNumber) {
        const digit = Math.floor(Math.random() * 10);
        digits.add(digit);
    }

    const array = [...digits];

    // 1桁目を0にしたくない場合
    if (digitNumber > 1 && array[0] === 0) {
        const nonZeroIndex = array.findIndex((digit) => digit !== 0);

        [array[0], array[nonZeroIndex]] =
            [array[nonZeroIndex], array[0]];
    }

    const textNumber = array.join('');

    return {
        array,
        textNumber,
        number: digitNumber,
    };
}



