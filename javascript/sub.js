import {
    generateRandomNumber,
    isNumber,
} from './function-sub.js';

let { array, textNumber, number: digitNumber } = generateRandomNumber();

const userInput = document.getElementById('userInput');
const correct = document.getElementById('correct');
const incorrect = document.getElementById('incorrect');
const history = document.getElementById('history');
const answerButton = document.getElementById('showAnswer');
const answer = document.getElementById('answer');
const button = document.getElementById('clickButton');
const nextButton = document.getElementById('nextButton');
const errorMessage = document.getElementById('errorMessage');
const selectNumber = document.getElementById('selectNumber');
const selectNumberTitle = document.getElementById('selectNumberTitle');
const digitNumberElement = document.getElementById('digitNumber');

let sumChallenge = 0;

history.textContent = '';
updateDigitTitle();

console.log(`Array of digits: ${array}`);


/**
 * 問題をリセットする
 */
function resetGame() {
    incorrect.textContent = '';
    correct.textContent = '';
    history.textContent = '';
    answer.textContent = '';
    errorMessage.textContent = '';

    sumChallenge = 0;
    userInput.value = '';
}


/**
 * 新しい問題を作成する
 */
function createNextQuestion() {
    const nextResult = generateRandomNumber(Number(digitNumberElement.value));

    array = nextResult.array;
    textNumber = nextResult.textNumber;
    digitNumber = nextResult.number;

    console.log(`Array of digits: ${array}`);
}


/**
 * 現在の桁数を表示する
 */
function updateDigitTitle() {
    selectNumberTitle.textContent =
        `現在選択されている桁数は ${digitNumberElement.value} 桁です`;
}


/**
 * 桁数を変更したとき
 */
selectNumber.addEventListener('click', () => {
    resetGame();
    createNextQuestion();
    updateDigitTitle();

    userInput.focus();
});


/**
 * 次の問題へ進む
 */
nextButton.addEventListener('click', () => {
    resetGame();
    createNextQuestion();
    updateDigitTitle();

    userInput.focus();
});

userInput.addEventListener('keydown', (event) => {
        // 押されたキーが "Enter" かどうか判定
        if (event.key === 'Enter') {
            // 意図しないフォーム送信などのデフォルト動作を防ぐ
            event.preventDefault();

            // 「入力」ボタンをプログラム側でクリックさせる
            clickButton.click();
        }
    });
    
/**
 * 入力された数字を判定する
 */
button.addEventListener('click', () => {
    errorMessage.textContent = '';

    const input = userInput.value;
    const requiredDigits = Number(digitNumberElement.value);

    // 入力された数字が正しい桁数か確認
    if (!isNumber(input, requiredDigits)) {
        errorMessage.textContent =
            `${requiredDigits}桁の数字を入力してください`;

        userInput.focus();
        return;
    }

    sumChallenge += 1;

    const userInputArray = input
        .split('')
        .map((digit) => Number(digit));

    let hit = 0;
    let blow = 0;

    // ヒットを数える
    for (let i = 0; i < requiredDigits; i++) {
        if (userInputArray[i] === array[i]) {
            hit += 1;
        }
    }

    // 正解と入力に同じ数字が何個あるか調べる
    for (let number = 0; number <= 9; number++) {
        let correctCount = 0;
        let inputCount = 0;

        for (let i = 0; i < requiredDigits; i++) {
            if (array[i] === number) {
                correctCount += 1;
            }

            if (userInputArray[i] === number) {
                inputCount += 1;
            }
        }

        blow += Math.min(correctCount, inputCount);
    }

    // ヒットとして数えたものをブローから除く
    blow -= hit;

    incorrect.textContent = `挑戦回数: ${sumChallenge}`;
    correct.textContent = `${hit}ヒット ${blow}ブロー`;

    // 履歴を追加
    const historyItem = document.createElement('li');

    historyItem.textContent =
        `${input}　　 ${hit}ヒット ${blow}ブロー`;

    history.prepend(historyItem);

    userInput.value = '';
    userInput.focus();
});


/**
 * 正解を表示する
 */
answerButton.addEventListener('click', () => {
    answer.textContent = `正解は ${textNumber} です`;
});