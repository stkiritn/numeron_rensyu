import {generateRandomNumber} from './function.js';
import {isNumber} from './function.js';

let textNumber = '';

while (textNumber.length !== 4) {
    textNumber = String(generateRandomNumber());
}
/** 数字を４分割にする */
const digit = textNumber.split('');
/** 数字を数字にして配列に格納する */
const array = digit.map(digit => Number(digit));
const userInput = document.getElementById('userInput'); 
const correct = document.getElementById('correct');
const incorrect = document.getElementById("incorrect");
const history = document.getElementById("history");
let sumChallenge = 0;
console.log(`Array of digits: ${array}`);

const button = document.getElementById('clickButton');
button.addEventListener('click', function(event) { 
    const userInputArray = userInput.value.split('').map(digit => Number(digit));

    sumChallenge += 1;

    if (!isNumber(Number(userInput.value))) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '数字４桁でを入力してください';
    }
    else if (isNumber(Number(userInput.value))) {
    let hit = 0;
    let blow = 0;

    for (let i = 0; i < 4; i++) {
        if (userInputArray[i] === array[i]) {
            hit += 1;
        }
    }
    // ② 正解と入力に、それぞれの数字が何個あるか数える
    for (let number = 0; number <= 9; number++) {
        let correctCount = 0;
        let inputCount = 0;

        for (let i = 0; i < 4; i++) {
            if (array[i] === number) {
                correctCount += 1;
            }

            if (userInputArray[i] === number) {
                inputCount += 1;
            }
        }

        // ③ 共通している個数の少ない方を加える
        blow += Math.min(correctCount, inputCount);
    }
    blow -= hit;
    incorrect.textContent = "挑戦回数:" + sumChallenge;
    correct.textContent = `${hit}ヒット ${blow}ブロー`;
    
    const historyItem = document.createElement('li');
    historyItem.textContent = `${userInput.value}　　 ${hit}ヒット ${blow}ブロー`;
    history.appendChild(historyItem);
    }
}); 

