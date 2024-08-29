let score = 0;
let timeRemaining = 60;
let timerInterval;
let countdownInterval;
let rotationAngle = 0;

const financesData1 = [
    { income: 8000, expenditureRatio: 5, incomeRatio: 8 }
];

const financesData2 = [
    { savings: 1500, incomeRatio: 13, savingsRatio: 3 }
];

const financesData3 = [
    { expenditure: 3300, expenditureRatio: 11, savingsRatio: 2 }
];

const financesData4 = [
    { savings: 1400, incomeRatio: 3, expenditureRatio: 2 }
];

const financesData5 = [
    { expenditure: 4500, incomeRatio: 5, savingsRatio: 2 }
];

const financesData6 = [
    { income: 7800, expenditureRatio: 7, savingsRatio: 6 }
];

function generateTable() {
    const table = document.getElementById('finances-table');
    table.innerHTML = ''; 

    financesData1.forEach((data, index) => {
        const row = document.createElement('tr');

        const incomeCell = document.createElement('td');
        incomeCell.innerText = `$${data.income}`;
        row.appendChild(incomeCell);

        const expenditureCell = document.createElement('td');
        expenditureCell.innerHTML = `$<input type="text" id="expenditure${index}">`;
        row.appendChild(expenditureCell);

        const savingsCell = document.createElement('td');
        savingsCell.innerHTML = `$<input type="text" id="savings${index}">`;
        row.appendChild(savingsCell);

        const ratioCell = document.createElement('td');
        ratioCell.innerText = `Income: Expenditure = ${data.incomeRatio}:${data.expenditureRatio}`;
        row.appendChild(ratioCell);

        const checkCell = document.createElement('td');
        const checkButton = document.createElement('button');
        checkButton.innerText = 'Check Answer';
        checkButton.setAttribute('onclick', `checkAnswer1(${index})`);
        checkCell.appendChild(checkButton);
        row.appendChild(checkCell);

        const resultCell = document.createElement('td');
        resultCell.innerHTML = `<span id="result${index}"></span>`;
        row.appendChild(resultCell);

        table.appendChild(row);
    });

    financesData2.forEach((data, index) => {
        const row = document.createElement('tr');

        const incomeCell = document.createElement('td');
        incomeCell.innerHTML = `$<input type="text" id="income2${index}">`;
        row.appendChild(incomeCell);

        const expenditureCell = document.createElement('td');
        expenditureCell.innerHTML = `$<input type="text" id="expenditure2${index}">`;
        row.appendChild(expenditureCell);

        const savingsCell = document.createElement('td');
        savingsCell.innerText = `$${data.savings.toFixed(2)}`;
        row.appendChild(savingsCell);

        const ratioCell = document.createElement('td');
        ratioCell.innerText = `Income: Savings = ${data.incomeRatio}:${data.savingsRatio}`;
        row.appendChild(ratioCell);

        const checkCell = document.createElement('td');
        const checkButton = document.createElement('button');
        checkButton.innerText = 'Check Answer';
        checkButton.setAttribute('onclick', `checkAnswer2(${index})`);
        checkCell.appendChild(checkButton);
        row.appendChild(checkCell);

        const resultCell = document.createElement('td');
        resultCell.innerHTML = `<span id="result2${index}"></span>`;
        row.appendChild(resultCell);

        table.appendChild(row);
    });

    financesData3.forEach((data, index) => {
        const row = document.createElement('tr');

        const incomeCell = document.createElement('td');
        incomeCell.innerHTML = `$<input type="text" id="income3${index}">`;
        row.appendChild(incomeCell);

        const expenditureCell = document.createElement('td');
        expenditureCell.innerText = `$${data.expenditure.toFixed(2)}`;
        row.appendChild(expenditureCell);

        const savingsCell = document.createElement('td');
        savingsCell.innerHTML = `$<input type="text" id="savings3${index}">`;
        row.appendChild(savingsCell);

        const ratioCell = document.createElement('td');
        ratioCell.innerText = `Expenditure: Savings = ${data.expenditureRatio}:${data.savingsRatio}`;
        row.appendChild(ratioCell);

        const checkCell = document.createElement('td');
        const checkButton = document.createElement('button');
        checkButton.innerText = 'Check Answer';
        checkButton.setAttribute('onclick', `checkAnswer3(${index})`);
        checkCell.appendChild(checkButton);
        row.appendChild(checkCell);

        const resultCell = document.createElement('td');
        resultCell.innerHTML = `<span id="result3${index}"></span>`;
        row.appendChild(resultCell);

        table.appendChild(row);
    });

    financesData4.forEach((data, index) => {
        const row = document.createElement('tr');

        const incomeCell = document.createElement('td');
        incomeCell.innerHTML = `$<input type="text" id="income4${index}">`;
        row.appendChild(incomeCell);

        const expenditureCell = document.createElement('td');
        expenditureCell.innerHTML = `$<input type="text" id="expenditure4${index}">`;
        row.appendChild(expenditureCell);

        const savingsCell = document.createElement('td');
        savingsCell.innerText = `$${data.savings.toFixed(2)}`;
        row.appendChild(savingsCell);

        const ratioCell = document.createElement('td');
        ratioCell.innerText = `Income: Expenditure = ${data.incomeRatio}:${data.expenditureRatio}`;
        row.appendChild(ratioCell);

        const checkCell = document.createElement('td');
        const checkButton = document.createElement('button');
        checkButton.innerText = 'Check Answer';
        checkButton.setAttribute('onclick', `checkAnswer4(${index})`);
        checkCell.appendChild(checkButton);
        row.appendChild(checkCell);

        const resultCell = document.createElement('td');
        resultCell.innerHTML = `<span id="result4${index}"></span>`;
        row.appendChild(resultCell);

        table.appendChild(row);
    });

    financesData5.forEach((data, index) => {
        const row = document.createElement('tr');

        const incomeCell = document.createElement('td');
        incomeCell.innerHTML = `$<input type="text" id="income5${index}">`;
        row.appendChild(incomeCell);

        const expenditureCell = document.createElement('td');
        expenditureCell.innerText = `$${data.expenditure.toFixed(2)}`;
        row.appendChild(expenditureCell);

        const savingsCell = document.createElement('td');
        savingsCell.innerHTML = `$<input type="text" id="savings5${index}">`;
        row.appendChild(savingsCell);

        const ratioCell = document.createElement('td');
        ratioCell.innerText = `Income: Savings = ${data.incomeRatio}:${data.savingsRatio}`;
        row.appendChild(ratioCell);

        const checkCell = document.createElement('td');
        const checkButton = document.createElement('button');
        checkButton.innerText = 'Check Answer';
        checkButton.setAttribute('onclick', `checkAnswer5(${index})`);
        checkCell.appendChild(checkButton);
        row.appendChild(checkCell);

        const resultCell = document.createElement('td');
        resultCell.innerHTML = `<span id="result5${index}"></span>`;
        row.appendChild(resultCell);

        table.appendChild(row);
    });

    financesData6.forEach((data, index) => {
        const row = document.createElement('tr');

        const incomeCell = document.createElement('td');
        incomeCell.innerText = `$${data.income}`;
        row.appendChild(incomeCell);

        const expenditureCell = document.createElement('td');
        expenditureCell.innerHTML = `$<input type="text" id="expenditure6${index}">`;
        row.appendChild(expenditureCell);

        const savingsCell = document.createElement('td');
        savingsCell.innerHTML = `$<input type="text" id="savings6${index}">`;
        row.appendChild(savingsCell);

        const ratioCell = document.createElement('td');
        ratioCell.innerText = `Expenditure: Savings = ${data.expenditureRatio}:${data.savingsRatio}`;
        row.appendChild(ratioCell);

        const checkCell = document.createElement('td');
        const checkButton = document.createElement('button');
        checkButton.innerText = 'Check Answer';
        checkButton.setAttribute('onclick', `checkAnswer6(${index})`);
        checkCell.appendChild(checkButton);
        row.appendChild(checkCell);

        const resultCell = document.createElement('td');
        resultCell.innerHTML = `<span id="result6${index}"></span>`;
        row.appendChild(resultCell);

        table.appendChild(row);
    });
}

function checkAnswer1(index) {
    const data = financesData1[index];
    const expenditure = (data.income * data.expenditureRatio) / data.incomeRatio;
    const savings = data.income - expenditure;

    const userExpenditure = parseFloat(document.getElementById(`expenditure${index}`).value);
    const userSavings = parseFloat(document.getElementById(`savings${index}`).value);

    const resultElement = document.getElementById(`result${index}`);
    if (userExpenditure === expenditure && userSavings === savings) {
        resultElement.innerText = `Correct! The expenditure is $${expenditure.toFixed(2)} and savings is $${savings.toFixed(2)}.`;
        resultElement.style.color = 'green';
        updateScore(true);
    } else {
        resultElement.innerText = `Incorrect. Try again.`;
        resultElement.style.color = 'red';
        updateScore(false);
    }
}

function checkAnswer2(index) {
    const data = financesData2[index];
    const calculatedIncome = (data.savings * data.incomeRatio) / data.savingsRatio;
    const calculatedExpenditure = calculatedIncome - data.savings;

    const userIncome = parseFloat(document.getElementById(`income2${index}`).value);
    const userExpenditure = parseFloat(document.getElementById(`expenditure2${index}`).value);

    const resultElement = document.getElementById(`result2${index}`);
    if (userIncome === calculatedIncome && userExpenditure === calculatedExpenditure) {
        resultElement.innerText = `Correct! The income is $${calculatedIncome.toFixed(2)} and expenditure is $${calculatedExpenditure.toFixed(2)}.`;
        resultElement.style.color = 'green';
        updateScore(true);
    } else {
        resultElement.innerText = `Incorrect. Try again.`;
        resultElement.style.color = 'red';
        updateScore(false);
    }
}

function checkAnswer3(index) {
    const data = financesData3[index];
    const calculatedSavings = (data.expenditure * data.savingsRatio) / data.expenditureRatio;
    const calculatedIncome = data.expenditure + calculatedSavings;

    const userIncome = parseFloat(document.getElementById(`income3${index}`).value);
    const userSavings = parseFloat(document.getElementById(`savings3${index}`).value);

    const resultElement = document.getElementById(`result3${index}`);
    if (userIncome === calculatedIncome && userSavings === calculatedSavings) {
        resultElement.innerText = `Correct! The income is $${calculatedIncome.toFixed(2)} and savings are $${calculatedSavings.toFixed(2)}.`;
        resultElement.style.color = 'green';
        updateScore(true);
    } else {
        resultElement.innerText = `Incorrect. Try again.`;
        resultElement.style.color = 'red';
        updateScore(false);
    }
}

function checkAnswer4(index) {
    const data = financesData4[index];
    const x = data.savings / (data.incomeRatio - data.expenditureRatio);
    const calculatedIncome = data.incomeRatio * x;
    const calculatedExpenditure = data.expenditureRatio * x;

    const userIncome = parseFloat(document.getElementById(`income4${index}`).value);
    const userExpenditure = parseFloat(document.getElementById(`expenditure4${index}`).value);

    const resultElement = document.getElementById(`result4${index}`);
    if (userIncome === calculatedIncome && userExpenditure === calculatedExpenditure) {
        resultElement.innerText = `Correct! The income is $${calculatedIncome.toFixed(2)} and expenditure is $${calculatedExpenditure.toFixed(2)}.`;
        resultElement.style.color = 'green';
        updateScore(true);
    } else {
        resultElement.innerText = 'Incorrect. Try again.';
        resultElement.style.color = 'red';
        updateScore(false);
    }
}

function checkAnswer5(index) {
    const data = financesData5[index];
    const x = data.expenditure / (data.incomeRatio - data.savingsRatio);
    const calculatedIncome = data.incomeRatio * x;
    const calculatedSavings = data.savingsRatio * x;

    const userIncome = parseFloat(document.getElementById(`income5${index}`).value);
    const userSavings = parseFloat(document.getElementById(`savings5${index}`).value);

    const resultElement = document.getElementById(`result5${index}`);
    if (userIncome === calculatedIncome && userSavings === calculatedSavings) {
        resultElement.innerText = `Correct! The income is $${calculatedIncome.toFixed(2)} and savings are $${calculatedSavings.toFixed(2)}.`;
        resultElement.style.color = 'green';
        updateScore(true);
    } else {
        resultElement.innerText = 'Incorrect. Try again.';
        resultElement.style.color = 'red';
        updateScore(false);
    }
}

function checkAnswer6(index) {
    const data = financesData6[index];
    const totalRatio = data.expenditureRatio + data.savingsRatio;
    const x = data.income / totalRatio;
    const expenditure = data.expenditureRatio * x;
    const savings = data.savingsRatio * x;

    const userExpenditure = parseFloat(document.getElementById(`expenditure6${index}`).value);
    const userSavings = parseFloat(document.getElementById(`savings6${index}`).value);

    const resultElement = document.getElementById(`result6${index}`);
    if (userExpenditure === expenditure && userSavings === savings) {
        resultElement.innerText = `Correct! The expenditure is $${expenditure.toFixed(2)} and savings is $${savings.toFixed(2)}.`;
        resultElement.style.color = 'green';
        updateScore(true);
    } else {
        resultElement.innerText = `Incorrect. Try again.`;
        resultElement.style.color = 'red';
        updateScore(false);
    }
}

function updateScore(isCorrect) {
    if (isCorrect) {
        score += 1;
    } else {
        score -= 1;
    }
    document.getElementById('score').innerText = `Score: ${score}`;
}

function startCountdown() {
    let countdownNumber = 3;
    const countdownElement = document.getElementById('countdown-number');

    countdownElement.textContent = countdownNumber;

    countdownInterval = setInterval(function() {
        rotationAngle += 90;
        countdownElement.style.transform = `rotate(${rotationAngle}deg)`;

        countdownNumber--;
        countdownElement.textContent = countdownNumber;

        if (countdownNumber < 1) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-screen').style.display = 'none';
            document.getElementById('game-interface').style.display = 'block';
            startGame();
        }
    }, 1000);
}

function startReset() {
    const startResetButton = document.getElementById('startreset');
    if (startResetButton.innerText === 'Start Game') {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('countdown-screen').style.display = 'flex';
        startCountdown();
    } else {
        resetGame();
    }
}

function startGame() {
    document.getElementById('gameOver').style.display = 'none';
    score = 0;
    timeRemaining = 60;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('timeremainingvalue').innerText = timeRemaining;

    document.getElementById('score').style.display = 'block';
    document.getElementById('timeremaining').style.display = 'block';

    startTimer();
    generateTable();
    document.getElementById('startreset').innerText = 'Reset Game';
}

function resetGame() {
    clearInterval(timerInterval);
    clearInterval(countdownInterval);
    document.getElementById('startreset').innerText = 'Start Game';
    document.getElementById('score').innerText = 'Score: 0';
    document.getElementById('timeremainingvalue').innerText = '60';
    document.getElementById('finances-table').innerHTML = '';
    document.getElementById('gameOver').style.display = 'none';

    document.getElementById('score').style.display = 'none';
    document.getElementById('timeremaining').style.display = 'none';

    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('countdown-screen').style.display = 'none';
    document.getElementById('game-interface').style.display = 'none';
}

function startTimer() {
    timerInterval = setInterval(function() {
        timeRemaining--;
        document.getElementById('timeremainingvalue').innerText = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            document.getElementById('gameOver').style.display = 'block';
            document.getElementById('startreset').innerText = 'Start Game';
        }
    }, 1000);
}





