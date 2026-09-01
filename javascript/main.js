import {generateRandomNumber} from './function.js';
import {isNumber} from './function.js';

let {array, textNumber} = generateRandomNumber();

const userInput = document.getElementById('userInput'); 
const correct = document.getElementById('correct');
const incorrect = document.getElementById("incorrect");
const history = document.getElementById("history");
const answerButton = document.getElementById("showAnswer")
const answer = document.getElementById("answer");
const button = document.getElementById('clickButton');
const nextButton = document.getElementById("nextButton");
const errorMessage = document.getElementById('errorMessage');
let sumChallenge = 0;
console.log(`Array of digits: ${array}`);
history.textContent = '';

nextButton.addEventListener("click", function(){
    incorrect.textContent = "";
    correct.textContent = "";
    history.textContent = "";
    answer.textContent = "";   
    sumChallenge = 0;
    const nextResult = generateRandomNumber();
    array = nextResult.array; 
    textNumber = nextResult.textNumber;
 
})

button.addEventListener('click', function(event) { 
    const userInputArray = userInput.value.split('').map(digit => Number(digit));

    
    errorMessage.textContent = '';
    if (!isNumber(Number(userInput.value))) {
    errorMessage.textContent = '数字４桁でを入力してください';
    }
    else if (isNumber(Number(userInput.value))) {
    sumChallenge += 1;
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
    userInput.value = "";
    userInput.focus();
}); 


answerButton.addEventListener("click", function() {
    answer.textContent = `正解は ${textNumber} です`;
})


